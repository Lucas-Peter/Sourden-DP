# `functions/` —— 历史说明目录（V1 后端已实现，但不在本目录）

本目录是规范（§36）里预留的采购需求表单后端的**设计说明**。V1 后端已经实现，但按
"方案 A"放在仓库根的 `worker/index.js`（一个真正的 Worker 脚本），而不是本目录 —— 因为
**Workers 不会自动路由 `functions/` 文件**（详情见下方）。本目录现在只保留这份说明，
真正的代码在 `worker/index.js`。

规范预期的三个接口是：

| 期望路由 | 用途 |
| --- | --- |
| `POST /api/inquiry` | 接收采购需求提交 |
| `POST /api/upload` | 接收参考文件上传（R2） |
| `POST /api/contact` | 一般联系表单 |

---

## 重要：Workers 不会自动路由本目录

这个目录沿用的是 **Cloudflare Pages Functions** 的约定 —— 在 Pages 上，把文件放在
`functions/api/inquiry.js`，Cloudflare 就会自动把它变成 `/api/inquiry`。

**现在部署目标是 Worker（静态资源模式），没有这个自动行为。** Cloudflare 官方的兼容性矩阵里，
Pages Functions 的「基于文件的路由」在 Workers 上标记为「不支持，但有变通方案」。

所以实现后端时，必须二选一：

### 方案 A（推荐）：自己写一个 Worker 脚本

在 `assets.directory`（即 `dist/`）**之外**新建脚本，例如 `worker/index.js`：

```js
import { WorkerEntrypoint } from 'cloudflare:workers';

export default class extends WorkerEntrypoint {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/inquiry' && request.method === 'POST') {
      // 在这里做 Turnstile 校验、写 D1、发通知邮件
      return Response.json({ ok: true });
    }
    return new Response('Not found', { status: 404 });
  }
}
```

然后在 `wrangler.toml` 里加两行：

```toml
main = "./worker/index.js"

[assets]
# ……原有的 directory / html_handling / not_found_handling 保持不变……
binding = "ASSETS"          # 只有存在 main 之后才合法
run_worker_first = ["/api/*"]   # 只让 /api/* 走脚本，其余请求直接命中静态资源（不计费）
```

**注意两点：**

- `binding = "ASSETS"` 只在有 `main` 时才合法。纯静态项目里加上它会直接让部署报配置错误 ——
  `npm run verify` 的部署检查会拦住这个错误。
- 脚本放在 `dist/` 外面，可以避免它被当成静态资源上传。

### 方案 B：沿用文件式路由

保留本目录的写法，但构建时要先把它编译成单个脚本：

```bash
npx wrangler pages functions build --outdir=./dist/worker/
```

然后把 `main` 指向产物：

```toml
main = "./dist/worker/index.js"
```

代价是：产物落在 `dist/` 里面，会被当成静态资源上传，所以还需要在
`dist/.assetsignore` 里排除它（或把产物输出到 `dist/` 之外）。官方也建议改用
Hono 之类的框架来做路由，而不是依赖这个兼容命令。

---

## 实现前必须准备的东西

1. 创建 Cloudflare 资源，并在 `wrangler.toml` 中取消对应绑定的注释：

   ```bash
   npx wrangler d1 create sourden-db
   npx wrangler r2 bucket create sourden-uploads
   ```

2. 在 Cloudflare 控制台添加**仅运行时**使用的密钥（绝不写进本仓库）：

   - `TURNSTILE_SECRET_KEY`
   - `INQUIRY_NOTIFY_TO`

3. 从 Worker 的 `env` 参数（`fetch(request, env)` 的第二个参数）读取密钥。**不要**用
   `import.meta.env` —— 它在构建时就被内联进产物，任何下载到打包文件的人都能看到。

   > 注意：`env` 里的变量和构建期变量是两套。`PUBLIC_SITE_URL` 属于构建期变量，
   > 要在 Worker 的 **Build** 设置里配，不是在运行时变量里配。

## Turnstile

因为站点是静态的，组件令牌虽然由浏览器校验，但可以被伪造。**务必在脚本内对
`https://challenges.cloudflare.com/turnstile/v0/siteverify` 做一次服务端重新校验。**
仅做客户端校验等于完全没有防护。

---

## 前端已经在按这个契约发请求

`src/pages/sourcing-request.astro` 的 `/sourcing-request` 页面已上线，表单会真的向
`POST /api/inquiry` 发 JSON 请求。**只有 2xx 才算成功**（规范 §23），否则显示"发送失败"
并给出邮件兜底，不会假装成功。

V1 已落地：请求被 `wrangler.toml` 的 `run_worker_first = ["/api/*"]` 路由到 `worker/index.js`，
不再返回 404。**后端契约必须与下面的真实 payload 形状完全一致** —— 因为它是照
`src/lib/inquiry.ts` 的 `buildPayload()` 实现的，而不是这份 README 早期草稿里的旧字段。

### `POST /api/upload` —— 单文件，逐个上传（V1 不在范围内：规范明确禁止文件/图片上传）

`multipart/form-data`，两个字段：

| 字段 | 内容 |
| --- | --- |
| `file` | 文件本体，filename 为原始文件名 |
| `name` | 原始文件名（字符串，冗余但便于日志） |

**必须**返回 2xx 且响应体是 JSON `{ "key": "<存储键>" }`。
前端按顺序一个文件一个请求地传；只要有一个失败，**整个提交就会中止**，
不会把缺文件的请求发出去。2xx 但没有 `key` 也会被当成失败。

限制在 `src/lib/inquiry.ts` 的 `FILE_RULES` 里，**服务端要独立再校验一遍**：
`.jpg/.jpeg/.png/.webp/.pdf`、最多 10 个、单个最大 10 MB。

### `POST /api/inquiry` —— JSON（真实契约，照 `src/lib/inquiry.ts` 实现）

**5 个必填项**：`contact.name`、`contact.email`、`contact.phone`、`contact.country`、
`message`。`business.type` / `business.stage` 可选，**为空时前端会整个省略 `business`**，
所以服务端不要假设该键一定存在。`turnstileToken` 在未配置 `PUBLIC_TURNSTILE_SITE_KEY`
时是 `""`（空字符串，键仍然存在）。

```json
{
  "contact": {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "phone": "+1 555 0100",
    "country": "United States"
  },
  "business": { "type": "Retailer", "stage": "Ready to order" },
  "message": "Looking for a wood products manufacturer for custom shelves…",
  "turnstileToken": "…"
}
```

- `contact.email` 必须过 `^[^\s@]+@[^\s@]+\.[^\s@]{2,}$` 校验（与前端同一条规则）。
- 服务端独立再校验一遍这 5 个必填项；缺任一即返回 400。
- **2xx = 成功，其余一律失败**。前端不解析成功响应体，只认 `response.ok`。
- 完整实现见 `worker/index.js` 的 `fetch` 处理。

### 数据流向

```
浏览器 ──(每个文件一次)──> POST /api/upload ──> R2 ──> { key }
   │
   └──(全部成功后一次)──> POST /api/inquiry ──> D1 + 通知邮件 ──> 2xx
```

