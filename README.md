# SOURDEN 官网

> 品牌标语：**China Sourcing. Done.**

SOURDEN 的品牌官网。SOURDEN 是一家面向小批发商、独立零售商、实体门店与成长型品牌的中国采购与代采服务商。

当前仓库包含 **首页 V1**，以及为后续页面预留的完整 URL 架构。所有预留路由都能打开真实页面（不会 404），并在拥有真实内容之前被排除在搜索引擎索引之外。

---

## 技术栈

| 关注点 | 选型 | 理由 |
| --- | --- | --- |
| 框架 | **Astro 7**（`output: 'static'`） | 组件化开发，默认零 JavaScript，SEO 友好，产物是纯静态资源 |
| 样式 | **原生 CSS** + 自定义属性设计令牌 | 无需预处理器；设计令牌是唯一数据源 |
| 字体 | **Fontsource 可变字体**，自托管 | 无第三方请求，无布局抖动，无隐私/GDPR 风险 |
| 内容 | `src/data/` 下的 **JS 数据模块** | 文案即数据，不写死在标签里 —— 见[内容模型](#内容模型) |
| 托管 | **Cloudflare Pages** | 全球边缘节点、免费 TLS、Brotli 压缩、每个 PR 独立预览环境 |
| 源码 | **GitHub** | Cloudflare Pages 直接从仓库构建 |
| 加速 | **Cloudflare CDN** | 静态产物自动走边缘缓存 |

没有运行时框架、没有 CSS 框架、没有统计代码、没有第三方脚本。

---

## 环境要求

- **Node.js ≥ 20.3**（`.nvmrc` 已锁定 `22.22.2`）
- npm

---

## 本地开发

```bash
npm install          # 安装依赖
npm run dev          # 开发服务器 → http://localhost:4321
npm run build        # 生产构建 → dist/
npm run preview      # 本地预览构建产物
```

### 验证

```bash
npm run verify       # 构建 + 审计  ← 每次推送前都要跑
```

`npm run verify` 会针对**真实构建产物**（不是源码）运行 `scripts/audit.mjs`。审计不通过就意味着**不要部署**。检查项如下：

1. 所有内部链接和资源引用都能解析到真实文件。
2. 每个页面有且仅有一个 `<h1>`，且标题层级不跳级。
3. Title、meta description、canonical、`og:image`、JSON-LD、`<html lang>` 都存在。
4. `noindex` 页面不出现在 `sitemap.xml` 里，且 sitemap 中的页面都是可索引的。
5. 每个 `<img>` 都声明了 `width`、`height` 和 `alt`。
6. 没有内联 `style=""` 属性，没有第三方阻塞渲染的请求。
7. 所有未带兜底值的 `var(--token)` 都有定义。
8. 编译后的 CSS 中**没有 Media Queries Level 4 范围语法**（见 [浏览器兼容](#浏览器兼容) —— 这属于"静默布局塌陷"类缺陷，所以直接让构建失败，而不是留给人工复核）。
9. **共享核心样式表排在每个页面样式表之前** —— 见[样式表架构](#样式表架构)。
10. **页面样式表不得重定义共享核心中已有的选择器** —— 同一节解释了这条规则的由来。

---

## 项目结构

```text
.
├── README.md                 # 本文件
├── IMAGES.md                 # 摄影成片清单与裁切规则
├── .gitattributes            # 行尾归一（Windows 检出 / Linux 构建）
├── astro.config.mjs          # 构建、sitemap、浏览器下限  ← 请阅读里面的注释
├── wrangler.toml             # Cloudflare Pages 配置 + 预留绑定
├── public/
│   ├── _headers              # Cloudflare 安全与缓存响应头
│   ├── _redirects            # Cloudflare 重定向规则
│   ├── favicon.svg
│   └── images/               # 占位图（见下文）
├── functions/
│   ├── README.md             # 预留的 Pages Functions（规范 §36）
│   └── api/                  # /api/inquiry · /api/upload · /api/contact
├── scripts/
│   ├── audit.mjs             # 构建后质量闸门
│   └── generate-placeholders.mjs
└── src/
    ├── data/                 # ← 所有文案与内容都在这里
    ├── layouts/BaseLayout.astro
    ├── components/           # 首页每个版块对应一个组件
    ├── pages/                # 路由（基于文件系统）
    └── styles/
        ├── tokens.css        # ← 设计令牌：颜色、字阶、间距
        ├── base.css          # 重置样式、无障碍基础
        ├── layout.css        # 容器、栅格、版块底色
        ├── components.css    # 按钮、链接、媒体、行列表 + 站点外壳
        ├── index.css         # 入口 —— 引入以上全部
        ├── home.css          # 仅首页版块
        └── inner-pages.css   # 预留页外壳 + 404
```

**设计值都写在 `tokens.css` 里。** 每个颜色、字号、间距、过渡都来自那里的自定义属性。在页面样式表里硬编码色值或像素字号不会被审计拦住 —— 但会让设计逐渐走样，所以不要这么做。

### 样式表架构（新增页面前必读）

样式被拆成**一份共享核心** + **每种页面类型一份样式表**。

| 样式表 | 由谁引入 | 内容 |
| --- | --- | --- |
| `src/styles/index.css` | `BaseLayout.astro` | **共享核心。** 入口文件；依次引入 字体 → `tokens` → `base` → `layout` → `components` |
| `src/styles/components.css` | 经 `index.css` 引入 | 按钮、链接、标签、媒体、编辑型行列表 —— **以及站点外壳：头部、移动菜单、页脚、移动端吸底 CTA** |
| `src/styles/home.css` | `src/pages/index.astro` | 仅首页版块 |
| `src/styles/inner-pages.css` | `ReservationPage.astro` | 预留页外壳 + 404 |

有两条规则保证这套结构不出问题。两条都由 `npm run audit` 强制执行，不留给人工复核 —— 因为这两种失效模式都**不是肉眼能看出来的**。

**1. 布局的引入必须早于页面样式表。**

Astro 对同特异性的规则按引入顺序判定优先级，而它的构建运行时会把共享 CSS 分块**排到最后** —— 所以凡是引入层级比布局更"浅"的页面样式表，在同优先级竞争中必然全输。具体到实际后果：这正是曾经导致移动端头部 CTA 没有隐藏、以及全部 26 个非首页路由的头部和页脚**完全失去样式**的原因。

目前顺序是正确的，因为：

- `index.astro` 和 `404.astro` 先引入 `BaseLayout`，再引入自己的样式表；
- 其余所有页面渲染 `ReservationPage`，它先引入 `BaseLayout`，再引入 `inner-pages.css` —— 即外壳组件自己持有自己的样式，任何页面都不可能漏引。

只要有页面把页面样式表排在核心之前，审计就会让构建失败。

**2. 页面样式表不得重定义核心已定义的选择器。**

即使链接顺序正确，两个**不同**的单类选择器作用在同一元素上（比如核心的 `.section` 和页面的 `.reserved-body`）特异性依然相等，此时决定胜负的是样式表顺序，而不是设计意图。所以规则是：想让某个核心组件在某一页换个样子？加一个修饰类（`.btn--ghost`、`.hero__cta`）。想全站都换？搬进 `components.css`。一旦发生选择器碰撞，审计会让构建失败。

### 新增一种页面类型

1. 创建 `src/styles/<页面类型>.css`。
2. 从页面（或页面渲染的外壳组件）引入它 —— 位置在布局引入**之后**，并附上说明性注释。
3. 优先复用 `components.css` 里的组件类，不要急着发明新类；这是保证站点视觉统一的根基。
4. 运行 `npm run verify`。

### 类名作用域

版块样式以所属块为前缀，例如 `.hero__`、`.service-row__`、`.case-study__`。只使用组件局部类，不设工具类层。这样新页面不会意外改到已有页面的样式。

---

## 内容模型

**规则：文案即数据。** 凡是重复出现、成列表出现、或可能由非开发人员修改的文案，都不直接写在 `.astro` 标签里。

| 文件 | 负责内容 |
| --- | --- |
| `src/data/site.js` | 品牌常量、主 CTA 目标地址、头部/页脚导航、SEO 默认值 |
| `src/data/home.js` | 首页 Hero 文案 |
| `src/data/services.js` | 五项服务内容 |
| `src/data/industries.js` | 六个品类（+ 各断点的栅格跨度） |
| `src/data/process.js` | 能力条、"我们做什么"、"合作流程"时间轴 |
| `src/data/audiences.js` | 客户类型列表（MOQ 措辞规则写在这里） |
| `src/data/whySourden.js` | 差异化优势 |
| `src/data/caseStudies.js` | 客户案例（真实数据到位前字段为 `null`） |
| `src/data/insights.js` | 精选文章 + 列表 + 计划选题 |
| `src/data/media.js` | 图片清单 —— 组件和占位图生成器共用的唯一数据源 |
| `src/data/schema.js` | JSON-LD 构建器 |
| `src/data/routes.js` | 路由注册表 + 预留页文案 + 可索引性开关 |

### 修改某个版块

1. 在对应的 `src/data/*.js` 文件里改文案。
2. 如果是结构性修改（新增条目、新增字段），同步更新 `src/components/` 里消费它的组件。
3. 运行 `npm run verify`。

### 替换占位图

图片是**带明确标注的占位图**，由 `npm run placeholders` 依据 `src/data/media.js` 生成。它们故意做得很显眼 —— 不要直接上线。

把某张换成真实照片的步骤：

1. 把文件放进 `public/images/`（或 CDN），尺寸与 `src/data/media.js` 中声明的一致。
2. 把 `src/data/media.js` 里该条目的 `src` 指向新文件。
3. 把该条目的 `placeholder` 改为 `false`。
4. 重新运行 `npm run verify` —— 审计会确认引用可解析，且图片仍然声明了 width/height。

**请把主体放在画面中间 60% 区域内。** 图片以 `object-fit: cover` 渲染，即画面围绕中心对称裁切 —— 一张 4:3 的照片放进 4:5 的框里，只有约 60% 的宽度会保留。占位图遵循了这条规则（标签位于居中的 54% 安全带内，并按每张图单独计算字号以适配），因为放在角上的标记会被裁掉。生成的文件上还印着它建议的原始尺寸。

> **绝不编造可信度证据。** 不虚构数据、客户、证言或项目成果。在真实素材到位之前，客户案例和证言区块保持不填充状态。这是品牌规则，不是风格偏好。

---

## 路由

下面每个路由现在都存在。标注为*预留*的页面带有 `<meta name="robots" content="noindex">`，并在拥有真实内容之前被排除在 `sitemap.xml` 之外 —— `src/data/routes.js` 是唯一的开关。

| 路由 | 状态 |
| --- | --- |
| `/` | ✅ **已发布首页** —— 目前唯一可被索引的 URL |
| `/services` 及 `/services/{product-sourcing, supplier-verification, purchasing-order-management, quality-control, shipping-from-china}` | 预留 |
| `/industries` 及 `/industries/{6 个品类}` | 预留 |
| `/how-it-works` | 预留 |
| `/about` | 预留 |
| `/insights` 及 `/insights/{3 篇文章}` | 预留 |
| `/case-studies` 及 `/case-studies/{2 个条目}` | 预留 |
| `/faq` | 预留 |
| `/sourcing-request` | 预留（表单 UI 待开发） |
| `/privacy-policy`、`/terms-of-service` | 预留（法律文案待定） |
| `/404` | 已构建，`noindex` |

### 把预留页转为正式发布

1. 在 `src/pages/` 里写好真实页面。
2. 从 `src/data/routes.js` 的 `reservedTopLevel` 中删掉它的条目（或删除对应的预留页文件）。
3. 它会自动从 `noindexPaths` 中移除，并**重新出现在 `sitemap.xml`** —— 不需要改任何其他文件。

### URL 形态

`build.format: 'file'` + `trailingSlash: 'never'` 意味着每个页面输出为 `<路由>.html`，并以上面列出的干净、无尾斜杠 URL 提供访问。这与文档中的路由表完全一致，中间不发生任何重定向跳转。

---

## 浏览器兼容

站点的下限目标是 **Chrome 87 · Edge 88 · Firefox 78 · Safari 14**。

这通过 `astro.config.mjs` 中的 `vite.build.cssTarget` 强制保证，而且这不是无用功。CSS 压缩器（Lightning CSS）默认会把 `@media (min-width: 768px)` 改写成紧凑的 Media Queries Level 4 范围语法 `@media (width>=768px)`。该语法只存在于 Chrome 104+ / Firefox 102+ / Safari 16.4+，而**不认识它的浏览器会整块丢弃这条媒体查询** —— 于是在 Safari 15 / 16.0–16.3 上，整个响应式栅格会静默塌陷成移动端单列，且不报任何错。

> **不要把下限写到 `vite.css.lightningcss.targets` 里。** Vite 的 CSS 压缩器会用 `convertTargets(build.cssTarget)` 覆盖该字段，写在那里等于没写。`build.cssTarget` 是唯一可靠的开关。一旦范围语法再次出现，`npm run audit` 会让构建失败。

站点确实用到的现代特性 —— 容器查询、`text-wrap: pretty`、`:has()` —— 都被包在 `@supports` 里或本身就是纯渐进增强，所以降低下限没有任何额外代价。

JavaScript 只用于渐进增强。展现动画会设置一个内联的 `js-reveal` 标记；如果脚本不可用，内容会立即渲染，绝不会被隐藏。移动端菜单使用 `inert` 属性来正确处理焦点。

---

## 环境变量

本地开发时复制 `.env.example` → `.env`（`.env` 已被 git 忽略）。

| 变量 | 作用域 | 用途 |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | 公开 | `<link rel="canonical">`、Open Graph 和 `sitemap.xml` 使用的规范域名 |
| `PUBLIC_CONTACT_EMAIL` | 公开 | 页脚展示的联系邮箱 |

预留（V1 未使用 —— 见[后续后端](#后续后端)）：
`PUBLIC_TURNSTILE_SITE_KEY`、`TURNSTILE_SECRET_KEY`、`R2_UPLOAD_BUCKET`、`INQUIRY_NOTIFY_TO`。

> 抛开 `NEXT_PUBLIC_` 那类前缀不谈，这里的规则是 Astro 的规则：只有 `PUBLIC_` 前缀的变量会进入浏览器。**绝不**把密钥放在 `PUBLIC_` 名字下。密钥属于 Cloudflare Pages 后台的加密变量，永远不进本仓库。

---

## 部署

### 1. 推送到 GitHub

```bash
git init
git add .
git commit -m "SOURDEN Homepage V1"
git branch -M main
git remote add origin git@github.com:<账号>/<仓库>.git
git push -u origin main
```

首次推送前，确认没有敏感文件被暂存：

```bash
git status          # .env 不应出现（它已被 git 忽略）
```

`node_modules/`、`dist/`、`.astro/` 和 `.env*` 都已经在忽略规则里。

### 2. 连接 Cloudflare Pages

1. Cloudflare 控制台 → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**。
2. 授权 GitHub 并选择本仓库。
3. 构建设置 —— `wrangler.toml` 已声明输出目录，所以默认值就是对的：

   | 设置项 | 值 |
   | --- | --- |
   | Framework preset | Astro |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node version | `22`（与 `.nvmrc` 一致） |

4. **Settings → Environment variables** —— 为 Production 和 Preview 都添加
   `PUBLIC_SITE_URL`。要在首次生产构建**之前**就设成真实域名（结尾不带斜杠），
   否则 canonical 和 sitemap 会指向 `astro.config.mjs` 里的兜底域名。
5. 部署。之后每次推送到 `main` 都会重新部署生产环境；每个 Pull Request 都会得到独立的预览 URL。

### 3. 绑定自定义域名

Pages 项目 → **Custom domains** → 添加域名。如果 DNS 已经在 Cloudflare 上，CNAME 会自动创建；否则按 Cloudflare 提示添加 CNAME 记录。TLS 证书自动签发。HTTP 会重定向到 HTTPS，且 `public/_headers` 已经下发 HSTS。

### 4. 上线后检查

- `https://<域名>/robots.txt` → 包含正确的绝对 sitemap 地址。
- `https://<域名>/sitemap-index.xml` → **只**包含 `/`。
- `https://<域名>/services` → 返回 200 且带有 `noindex`。
- 首页：查看源代码，确认 canonical 和 `og:image` 使用的是真实域名。
- 移动端跑一次 Lighthouse —— 预期无布局偏移（所有图片都声明了尺寸）。

### 回滚

Cloudflare Pages 保留每一次部署。**Deployments → ⋯ → Rollback to this deployment** 可立即恢复到上一次构建，无需重新构建。

---

## 后续后端

站点目前是刻意保持静态的。当采购需求表单需要真正接收提交时（规范 §36），预期的 Cloudflare 形态是：

```text
Cloudflare
├── Pages Functions   → functions/api/{inquiry,upload,contact}
├── D1                → customers · inquiries · inquiry_files
├── R2                → 上传的采购参考文件
└── Turnstile         → 公开表单的防垃圾提交
```

已就位的基础工作：

- `functions/` —— Cloudflare Pages Functions 目录。放在
  `functions/api/inquiry.js` 的文件会自动成为路由 `/api/inquiry`。
- `wrangler.toml` —— D1 和 R2 绑定已注释掉，并写好了创建它们所需的
  `wrangler` 命令。只有在资源真实存在之后才取消注释，否则 Pages 构建会因未知绑定而失败。
- `.env.example` —— 预留的变量名，仅服务端使用的已标注。

要记住的一个前提：Turnstile 校验**必须**在 Function 里做服务端校验，因为站点是静态的，任何客户端校验都可以被绕过。

`/sourcing-request` 表单预期的字段是：Name、Email、Country、Product、Description。

---

## 质量检查清单

任何改动上线前：

- [ ] `npm run verify` 通过（构建 + 审计，零错误）
- [ ] 主 CTA 在全站都指向 `/sourcing-request`
- [ ] 每页有且仅有一个 `<h1>`；标题层级不跳级
- [ ] 键盘导航可用，包括移动端菜单
- [ ] 在 320 / 768 / 1024 / 1440 px 下无横向溢出
- [ ] 无编造的数据、客户或证言
- [ ] 品牌字标使用 `SOURDEN`，正文行文中使用 `Sourden`
- [ ] 预留页仍然带有 `noindex`
