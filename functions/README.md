# `functions/` —— Cloudflare Pages Functions

Cloudflare Pages 会自动把本目录下的每个 `.js` / `.ts` 文件变成一个部署后的 Worker 路由。**文件路径就是 URL**：

| 文件 | 变成 |
| --- | --- |
| `functions/api/inquiry.js` | `POST /api/inquiry` |
| `functions/api/upload.js` | `POST /api/upload` |
| `functions/api/contact.js` | `POST /api/contact` |

这三个路由就是规范（§36）里预留的后端。它们在 **V1 中并未实现** —— 首页是完全静态的，采购需求表单目前还没有提交处理逻辑。

本目录下的 Markdown 文件会被构建忽略，可以放心保留。

## 实现之前

1. 创建 Cloudflare 资源，并在 `wrangler.toml` 中取消对应绑定的注释：

   ```bash
   npx wrangler d1 create sourden-db
   npx wrangler r2 bucket create sourden-uploads
   ```

2. 在 Pages 后台添加仅服务端使用的密钥（绝不写进本仓库）：

   - `TURNSTILE_SECRET_KEY`
   - `INQUIRY_NOTIFY_TO`

3. 从 Function 的 `env` 参数（即处理函数的第二个参数）读取密钥，**不要**用 `import.meta.env` —— 后者在构建时被内联进产物，任何下载到打包文件的人都能看到。

## Turnstile

因为站点是静态的，组件令牌虽然由浏览器校验，但可以被伪造。**务必在 Function 内对 `https://challenges.cloudflare.com/turnstile/v0/siteverify` 做一次服务端重新校验。** 仅做客户端校验等于完全没有防护。
