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
| 托管 | **Cloudflare Workers**（静态资源模式） | 全球边缘节点、免费 TLS、**静态资源请求免费且不限量**、每个分支独立预览 URL |
| 源码 | **GitHub** | Cloudflare Workers Builds 直接从仓库构建，每次推送自动部署 |
| 缓存 | Cloudflare 边缘缓存 | 静态资源自动缓存并逐层回源，命中不回源 |

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
npm run verify       # 构建 + 审计  ← 每次上传前都要跑
```

> `npm run verify` 只证明**本地**这棵树是完整的，它看不到**远端**缺了什么 ——
> 而 Cloudflare 构建的是远端。上传之后请再跑一次 `npm run check:remote`，
> 见[上传后核对](#上传后核对)。

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
11. **`wrangler.toml` 必须是一份合法的 Workers 配置** —— `name` 存在、`[assets] directory` 存在且指向真实产物、`_headers` 与 `_redirects` 已被复制进产物、且没有残留的 Pages 专用键。见[部署](#部署)。

---

## 项目结构

```text
.
├── README.md                 # 本文件
├── IMAGES.md                 # 摄影成片清单与裁切规则
├── .gitattributes            # 行尾归一（Windows 检出 / Linux 构建）
├── .nojekyll                 # 空的保险文件，禁用 GitHub Pages 的 Jekyll 构建
├── astro.config.mjs          # 构建、sitemap、浏览器下限  ← 请阅读里面的注释
├── wrangler.toml             # Cloudflare 部署配置 + 预留绑定  ← 部署失败先看这个文件
├── public/
│   ├── _headers              # Cloudflare 安全与缓存响应头
│   ├── _redirects            # Cloudflare 重定向规则
│   ├── favicon.svg
│   └── images/               # 占位图（见下文）
├── functions/
│   ├── README.md             # 预留后端接入说明（规范 §36）
│   └── api/                  # /api/inquiry · /api/upload · /api/contact
├── scripts/
│   ├── audit.mjs             # 构建后质量闸门（针对产物）
│   ├── remote-diff.mjs       # 远端一致性核对 ← 上传后跑，见「上传后核对」
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
| `src/data/industries.js` | 九个品类（+ 各断点的栅格跨度） |
| `src/data/process.js` | 能力条、"合作流程"时间轴 |
| `src/data/audiences.js` | 客户类型列表（含个人消费者；MOQ 措辞规则写在这里） |
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

### 首页版块顺序（与规范的一处有意偏差）

首页顺序遵循规范 §42，**但删掉了 §9「What We Do」板块**（眉标 `SOURCING, SIMPLIFIED`）。
它的五条列表（Supplier Research / Quotation / Purchasing / Quality Control / Shipping）
与下面的 OUR SERVICES 几乎逐条重复，而它上面的深色能力条本身已经是同一组词的第三份拷贝 ——
一页的上半部分出现三张重叠的列表，读起来像在凑篇幅。Services 板块保留了真正有差异的内容
（每项服务一段独立描述），能力条保留了概览。

**不要把它加回来。** 理由写在 `src/pages/index.astro` 的头部注释里，改动前请先读。

当前顺序：Hero → Capabilities → Services → How It Works → Industries → Sourcing Without the Barriers → Why Sourden → Case Studies → Insights → Final CTA。
底色节奏（象牙 → 深 → 白 → 象牙 → 白 → 象牙 → 深 → 白 → 象牙 → 深）由各组件自己的类承担，
不在 `index.astro` 里控制；增删板块时留意相邻两个板块不要同色。

### 两条交互约定（改动前请确认是有意为之）

1. **OUR SERVICES 的服务描述默认全部可见。** 早期版本做成 hover / 焦点才展开，
   结果是整页唯一解释「这项服务到底做什么」的文案被藏在了一个很多人根本不会做的手势后面。
   在一个以解释服务为目的的板块里，解释本身就是内容。现在 hover 只负责箭头位移，不承担信息披露。
2. **WHAT WE SOURCE 的品类不做成等高卡片。** 九个品类的栅格跨度是成组挑选的，
   每个断点每一行都必须正好填满列数（桌面 12 栏、平板 8 栏）—— 落单的跨度会在栅格里留出空洞。
   改跨度请连着算一遍每行的和，不要只改单个品类。

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
| `/industries` 及 `/industries/{9 个品类}` | 预留 |
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

> 抛开 `NEXT_PUBLIC_` 那类前缀不谈，这里的规则是 Astro 的规则：只有 `PUBLIC_` 前缀的变量会进入浏览器。**绝不**把密钥放在 `PUBLIC_` 名字下。密钥属于 Cloudflare 控制台的加密变量，永远不进本仓库。

### 构建期变量 vs 运行时变量（最容易搞错的一处）

Cloudflare 把这两套变量**分开存放**，而本站点目前只用到构建期那一套：

| 类型 | 何时被读取 | 在哪配 | 本站点是否用到 |
| --- | --- | --- | --- |
| **构建期** | `npm run build` 时由 Astro 内联进 HTML | Worker 项目 → **Settings → Build → Variables and secrets** | ✅ `PUBLIC_SITE_URL`、`PUBLIC_CONTACT_EMAIL` |
| **运行时**（Worker 的 `env`） | 请求到达时由 Worker 脚本读取 | Worker 项目 → **Settings → Variables and secrets**（运行时那组） | ❌ V1 没有任何脚本 |

`src/data/site.js` 里用的是 `import.meta.env.PUBLIC_SITE_URL`，也就是说它在**构建时就被写死进 HTML** 了。所以 `PUBLIC_SITE_URL` 必须配在 **Build** 那一组里 —— 配到运行时那组不会生效，canonical 和 sitemap 会继续指向 `src/data/site.js` 里的兜底域名。

---

## Cloudflare 配置说明（`wrangler.toml`）

部署出问题时，第一个要看的文件就是它。逐字段说明：

| 字段 | 值 | 作用 / 改动风险 |
| --- | --- | --- |
| `name` | `sourden-dp` | **必须与 Cloudflare 上的 Worker 项目名一致**，否则部署会推到另一个 Worker |
| `compatibility_date` | `2026-09-18` | Workers 运行时版本。新建项目按官方建议填当天日期；改动它会同时改变许多默认行为，非必要别动 |
| `workers_dev` | `true` | 允许用 `*.workers.dev` 域名访问 |
| `preview_urls` | `true` | 每个分支独立预览 URL（还需在 Build 设置里打开 non-production branch builds） |
| `[assets] directory` | `./dist` | **等价于 Pages 的「构建输出目录」**。改这里等于改部署内容 |
| `[assets] html_handling` | `auto-trailing-slash` | 决定 URL 形态，见下表。**不要**改成 `force-trailing-slash`，那样每个 URL 都会多一个斜杠，与规范 §33 的路由表冲突 |
| `[assets] not_found_handling` | `404-page` | 未匹配路径返回 `dist/404.html`，状态码是真实的 404 |
| `[assets] binding` | *（不存在，正确）* | 只有存在 `main`（Worker 脚本）时才合法。纯静态项目里加上它会让部署直接失败 |

`html_handling = "auto-trailing-slash"` 与 Astro `build.format: 'file'` 配合后的实际 URL 行为：

| 访问 | 结果 |
| --- | --- |
| `/` | 200 → `dist/index.html` |
| `/services` | 200 → `dist/services.html` |
| `/services/product-sourcing` | 200 → `dist/services/product-sourcing.html` |
| `/services.html` | 307 → `/services` |
| `/services/` | 307 → `/services` |
| `/不存在的路径` | 404 → `dist/404.html` |

即：**干净、无扩展名、无尾斜杠的 URL 是规范地址并直接返回 200**，其余写法一律 307 归一 —— 正是规范 §33 要求的路由表，而且顺带解决了重复内容问题。

### 本地复现 Cloudflare 的真实行为（排错用）

这一条很重要，因为**有些问题本地 `npm run verify` 根本看不到，只在 Cloudflare 构建时才会炸** ——
这个项目已经踩过一次（`wrangler.toml` 写成了 Pages 格式，本地全绿，部署直接失败）。

用 wrangler 在本地起一个和 Cloudflare 一模一样的环境：

```bash
npx wrangler@latest dev
# → http://127.0.0.1:8787
```

它会真实加载 `wrangler.toml`、`_headers`、`_redirects`，可以据此确认：

| 访问 | 期望 |
| --- | --- |
| `/` | 200 |
| `/services` | 200（不是 307 → `/services/`） |
| `/services.html`、`/services/` | 307 → `/services` |
| `/不存在的路径` | 404，且是我们自己的 404 页面 |
| `/images/*.svg` 的响应头 | `Cache-Control: public, max-age=604800, …` |

只想校验配置、不启动服务器：

```bash
npx wrangler@latest deploy --dry-run
```

配置有问题时它会在这一步就报错（比如缺少 `[assets] directory`），而不会等到线上才发现。

> wrangler **故意没有**写进 `package.json`：它自带约 80MB 的运行时，装进依赖会让 Cloudflare 每次构建都变慢。
> 按需 `npx` 调用即可，用完即弃。

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

#### 上传后核对

**本地 `verify` 通过 ≠ GitHub 上是完整的。** 两者之间的缝隙来自网页上传的三个固有行为：

| 网页上传的行为 | 后果 |
| --- | --- |
| **不会同步删除** | 本地删掉的文件，GitHub 上原样留着 |
| **默认忽略点开头的文件** | `.nojekyll` 这类必须手动勾选才会被带上 |
| **一次只能传一个目录** | 上传页的目标目录是固定的，跨目录得分几次传 |

所以每次上传完，跑一次：

```bash
npm run check:remote
```

它下载 `main` 分支的 tarball，与本地**逐文件按内容比对**（不比 blob SHA —— 网页上传会忽略
`.gitattributes` 而以 CRLF 存文件，SHA 必然不同但内容一致，拿 SHA 比会误报），分三类输出：

| 输出 | 含义 | 处理 |
| --- | --- | --- |
| ① ON DISK BUT NOT ON GITHUB | 本地有、远端没有 | **必须上传**。若被 import，这就是构建失败的根因 |
| ② ON GITHUB BUT NOT ON DISK | 远端有、本地已删 | 在 GitHub 上删掉，否则留下无人引用的死文件 |
| ③ CONTENT DIFFERS | 两边都有但内容不同 | 重新上传该文件 |

全部一致时输出 `✓ IN SYNC`；有差异时退出码为 1。仓库名可用环境变量覆盖：
`SOURDEN_REPO=owner/name npm run check:remote`。

#### 排错：Cloudflare 构建报 `UNRESOLVED_IMPORT / Could not resolve`

```text
[UNRESOLVED_IMPORT] Could not resolve '../components/ReservationPage.astro' in src/pages/about.astro
```

**这是 GitHub 上少了这个文件，不是代码写错了。** 同一个文件在本地能解析、在云端解析不了，
只有一种解释：云端那棵树里没有它。先跑 `npm run check:remote`，输出的第 ① 类会直接点名缺的是哪个。

最常见的成因是**删错了文件**。GitHub 网页上删一个文件只需要点一下图标加一次提交，
`src/components/` 下的文件名又长得很像，很容易点在相邻的一行上 —— 而删掉的往往是某个
被十几个页面共同引用的组件，于是全站构建同时失败。删除前核对文件名；删完立刻跑一次
`check:remote`，第 ② 类应当**只剩下你打算删的那一个**。

#### 排错：推送后 GitHub 报 “Build with Jekyll” 失败

现象：推送之后 Actions 里冒出一个 **Build with Jekyll** 工作流，日志报：

```text
YAML Exception reading /github/workspace/src/layouts/BaseLayout.astro: mapping values are not allowed in this context
ERROR: YOUR SITE COULD NOT BE BUILT:
  Invalid YAML front matter in /github/workspace/src/pages/services/index.astro
```

这**不是代码缺陷**，是仓库设置问题。GitHub Pages 被打开了，而它的默认构建器是 Jekyll。
Astro 页面文件以 `---` 开头，Jekyll 会把它当成 YAML front matter 去解析，
而 `.astro` 里写的是 `const x: string = …` 这类 TypeScript 语法，自然解析不了，于是整个构建中止。
（那些 “Invalid YAML front matter” 的报错信息具有误导性 —— 真正的 `.astro` 文件语法完全正确。）

本项目的托管在 Cloudflare，GitHub 只是源码仓库，所以**正解是把 GitHub Pages 关掉**：

1. 仓库主页右侧 **GitHub Pages** 卡片 → 点 `⋯` → **Unpublish site**；
   或者 **Settings → Pages → Build and deployment** → Source 选 **Deploy from a branch**
   → 把**分支下拉框选成 `None`** → **Save**。
2. 回到 **Actions**，那条失败记录直接忽略或删掉即可。此后推送不会再触发它。

关掉之后，Cloudflare 的部署完全不受影响 —— 两套系统互不相干，这个红色 ✗ 只是噪音。

仓库根目录已放了一个**空的 `.nojekyll`** 作为保险：万一以后又把 Pages 打开，
它会跳过 Jekyll 处理，不会再吐上面那串看不懂的报错（`npm run verify` 会检查它是否存在）。
但要说清楚：**`.nojekyll` 是防呆，不是修复**。只要 Pages 是开着的，
GitHub 就会去发布仓库根目录，而根目录没有 `index.html`，那并不是一个可用的站点。

#### GitHub 与 Cloudflare 的分工

| 平台 | 角色 | 会不会构建这个站点 |
| --- | --- | --- |
| GitHub | 源码仓库 | **不会**（关掉 Pages 之后） |
| Cloudflare | 托管 | 会。每次推送 `main` 自动 `npm run build` + `wrangler deploy` |

所以 GitHub 上出现红色 ✗ 不等于站点有问题 —— 看 Cloudflare 的 **Deployments** 才准。

### 2. 连接 Cloudflare（Worker + 静态资源）

本项目部署为 **Worker（静态资源模式）** —— 也就是 Cloudflare 现在连接 Git 仓库时创建的形态，
功能上等同于以前的 Pages 项目。

> **⚠ 最容易踩的坑（本项目实际踩过一次）**
> Cloudflare 有 **Pages** 和 **Workers** 两套东西，它们的配置文件**不通用**。
> Worker 用 `[assets] directory`；Pages 用 `pages_build_output_dir`。
> Workers Builds 执行的是 `wrangler deploy`，它不认识 `pages_build_output_dir`，
> 于是会报「找不到入口点、也找不到资源目录」并让整个构建失败：
> `Failed: error occurred while running deploy command`。
> **本项目用 Worker，`wrangler.toml` 里绝不能再出现 `pages_build_output_dir`。**
> `npm run verify` 现在会检查这一点。

连接步骤：

1. Cloudflare 控制台 → **Workers & Pages** → **Create** → 选择 **Worker**（不是 Pages）→
   **Connect to Git** / **Import a repository**。
2. 授权 GitHub 并选择本仓库。
3. 构建设置：

   | 设置项 | 值 |
   | --- | --- |
   | Framework preset | Astro（或 None，不影响结果） |
   | Build command | `npm run build` |
   | Deploy command | `npx wrangler deploy`（默认值，不要改） |
   | Node version | `22`（与 `.nvmrc` 一致） |

   输出目录**不需要**在控制台填 —— 它在 `wrangler.toml` 的 `[assets] directory` 里。
4. **Worker 名称必须与 `wrangler.toml` 里的 `name` 一致**（当前是 `sourden-dp`）。
   不一致时 `wrangler deploy` 会推到另一个 Worker 上，而不是你打开的这个项目。
   改名的话两处一起改。
5. **Settings → Build → Variables and secrets** —— 添加 `PUBLIC_SITE_URL`
   （真实域名，结尾不带斜杠），并且**生产环境和非生产环境都要加**。
   它必须在首次生产构建**之前**就存在，否则 canonical 和 sitemap 会指向
   `src/data/site.js` 里的兜底域名。
   注意这是 **Build** 那一组，不是运行时那组 —— 原因见[构建期变量 vs 运行时变量](#构建期变量-vs-运行时变量最容易搞错的一处)。
6. 部署。之后每次推送到 `main` 都会重新部署；在 Build 设置里打开
   non-production branch builds 后，每个分支都会有独立预览 URL
   （`wrangler.toml` 里的 `preview_urls = true` 已就位）。

### 3. 绑定自定义域名

Worker 项目 → **Settings → Domains & Routes** → **Add** → **Custom domain**。
如果域名的 DNS 已经在 Cloudflare 上，CNAME 会自动创建；否则按提示添加。
TLS 证书自动签发，HTTP 自动重定向到 HTTPS，`public/_headers` 已经下发 HSTS。

> 与 Pages 的一点差异：Workers 只支持 **DNS 托管在 Cloudflare 上**的域名。
> 如果域名解析在别处，要么先把 NS 迁到 Cloudflare，要么改用 Pages。

### 4. 上线后检查

按顺序验这五条，`html_handling` 的 URL 行为就全部覆盖到了：

| 检查 | 期望结果 |
| --- | --- |
| `/robots.txt` | 200，且 sitemap 地址是绝对路径的真实域名 |
| `/sitemap-index.xml` | 只包含 `/` 一条 |
| `/services` | **200**，页面里带 `noindex` |
| `/services.html` | **307** 跳转到 `/services`（说明 `html_handling` 生效） |
| `/this-does-not-exist` | **404**，且显示的是我们自己的 404 页面（说明 `not_found_handling` 生效） |

再补两条：

- 首页查看源代码，确认 canonical 与 `og:image` 用的是真实域名。
- 移动端跑一次 Lighthouse —— 预期无布局偏移（所有图片都声明了尺寸）。
- 响应头检查：访问 `/images/hero-sourcing.svg`，应能看到
  `Cache-Control: public, max-age=604800, stale-while-revalidate=86400`
  —— 出现即说明 `_headers` 已被 Cloudflare 读取。

### 回滚

Worker 项目 → **Deployments** → 选中历史版本 → **Rollback**。
Cloudflare 保留每一次部署，回滚是即时的，不需要重新构建。

---

## 后续后端

站点目前是刻意保持静态的。当采购需求表单需要真正接收提交时（规范 §36），预期的 Cloudflare 形态是：

```text
Cloudflare Worker "sourden-dp"
├── [assets]      → dist/（静态站点，请求免费且不限量）
├── main（待添加） → Worker 脚本，处理 /api/*
├── D1            → customers · inquiries · inquiry_files
├── R2            → 上传的采购参考文件
└── Turnstile     → 公开表单的防垃圾提交
```

已就位的基础工作：

- `functions/` —— 预留目录，**但 Workers 不会像 Pages 那样自动路由它**。
  实现时的两条可选路线（以及推荐做法）写在 `functions/README.md` 里。
- `wrangler.toml` —— D1 和 R2 绑定已注释掉，并写好了创建它们所需的
  `wrangler` 命令。只有在资源真实存在之后才取消注释，否则构建会因未知绑定而失败。
  加绑定时必须同时添加 `main`，因为绑定需要有脚本去消费它。
- `.env.example` —— 预留的变量名，仅服务端使用的已标注。

要记住的一个前提：Turnstile 校验**必须**在服务端做，因为站点是静态的，任何客户端校验都可以被绕过。

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
- [ ] GitHub Pages 保持关闭状态（GitHub 只做源码仓库，构建交给 Cloudflare）
