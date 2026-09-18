# `functions/` —— 预留的后端目录（V1 未使用）

本目录是规范（§36）里预留的采购需求表单后端。**V1 完全静态，没有任何 Worker 脚本**，所以这里现在只有一个占位文件。

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
