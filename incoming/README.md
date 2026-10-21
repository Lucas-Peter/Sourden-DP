# 加一个新产品集合：完整流程

页面模板已经通用化。加一个集合 = **填表 + 放图 + 跑命令 + 传 GitHub**，全程不用写代码。

> 命令都在项目根目录运行（`E:\Sourcing work\网站开发\SOURDEN`）。你自己在终端跑，或者直接把命令发给 WorkBuddy 让它帮你跑都可以。

---

## 全流程一览

| 步骤 | 做什么 | 命令 / 操作 |
|---|---|---|
| ① 一次性 | 把工具文件传上 GitHub（只做一次） | GitHub 网页上传 |
| ② 准备原料 | 建文件夹、放图、填表 | 本地文件操作 |
| ③ 预览 | dry-run 看结果，不真写 | `node scripts/add-collection.mjs incoming/<集合名> --dry-run` |
| ④ 正式生成 | 生成页面文件 | `node scripts/add-collection.mjs incoming/<集合名>` |
| ⑤ 本地验证 | 确认构建+审计全绿 | `CODEBUDDY_SAFE_DELETE_ENABLED=0 npm run verify` |
| ⑥ 上传 | 把生成的文件传到 GitHub | GitHub 网页上传（清单见下） |
| ⑦ 上线确认 | 等 Cloudflare 构建变绿 | 看 Cloudflare Deployments |

---

## ① 一次性：先传工具文件（只做第一次）

只有第一次用这个工具才需要。把下面 4 个「工具文件」传到 GitHub 对应位置：

- `scripts/add-collection.mjs`（生成脚本：新建集合）
- `scripts/update-collection.mjs`（维护脚本：改图/增图）
- `incoming/_TEMPLATE/collection.md`（内容模板）
- `incoming/README.md`（本文档）
- `.gitignore`（更新版，让原料目录不进仓库）

**GitHub 网页操作**：打开仓库 → 进入对应目录 → 点「Add file → Upload files」→ 拖入文件 → 提交（Commit）。

> 注意：`incoming/_TEMPLATE/` 和 `incoming/README.md` 要传；`incoming/` 里你自己填的原料**不要传**。

---

## ② 准备原料（每次加集合）

1. 在项目里新建文件夹 `incoming/<集合英文名>/`（英文小写、连字符，如 `basketball-jerseys`）
2. 把产品图片放进去（一张图一个产品，命名随意，如 `01.jpg`、`02.png`）
3. 复制 `incoming/_TEMPLATE/collection.md` 到该文件夹，改名为 `collection.md`，照着填

```
incoming/
├─ _TEMPLATE/collection.md        ← 模板（别动，复制用）
└─ basketball-jerseys/            ← 你的新集合（这一步你建）
   ├─ collection.md               ← 你填的内容
   ├─ 01.jpg
   ├─ 02.jpg
   └─ 03.jpg
```

---

## ③ 预览（dry-run，不真写文件）

```
node scripts/add-collection.mjs incoming/basketball-jerseys --dry-run
```

会输出：图片处理结果、生成的数据文件内容、以及「会在 media.js / 注册表插入什么」。**这一步只写进临时目录，不动正式文件**，放心跑，确认内容没问题再进下一步。

---

## ④ 正式生成

```
node scripts/add-collection.mjs incoming/basketball-jerseys
```

（和上一步的区别就是**去掉 `--dry-run`**）脚本会：

1. 把图裁成 4:5、转 webp，写进 `public/images/`
2. 生成 `src/data/collection-basketball-jerseys.js`
3. 往 `src/data/media.js`、`src/data/product-collections.js` 登记

跑完后它会**自动打印一份「要上传到 GitHub 的文件清单」**，第 ⑥ 步照它传。

---

## ⑤ 本地验证

```
CODEBUDDY_SAFE_DELETE_ENABLED=0 npm run verify
```

看到 **`✓ AUDIT PASSED`** 才算通过，且 sitemap 里出现了 `/products/.../<集合名>`。**验证全绿之前，不要上传 GitHub**（否则部署可能失败）。

---

## ⑥ 上传 GitHub（重点：传哪些文件）

每次加一个集合，脚本正式生成后要传的文件就三类——**新增文件 + 修改文件**。第 ④ 步跑完脚本会打印清单，照它传：

**新增文件（每个都要传）：**
- `src/data/collection-<集合名>.js`
- `public/images/<集合名>-01.webp`、`-02.webp`、…（有多少张传多少张）

**修改文件（传新版覆盖旧的）：**
- `src/data/media.js`
- `src/data/product-collections.js`

**不要传（容易误传）：**
- `public/images/<集合名>-*@640w.webp` 这类带 `@` 的——响应式变体，Cloudflare 构建时自动生成
- `incoming/<集合名>/`——你的原始图和填好的表，是本地原料
- `dist/`、`.srcset-manifest.json`——构建产物

**GitHub 网页操作**（因为新文件分散在两个目录，分两次传）：

1. 进 `src/data/` → 「Add file → Upload files」→ 拖入 `collection-<集合名>.js`、`media.js`、`product-collections.js` → 提交
2. 进 `public/images/` → 「Add file → Upload files」→ 拖入所有 `<集合名>-NN.webp` → 提交

---

## ⑦ 确认部署上线

上传（commit）后 Cloudflare Pages 会自动构建部署。等它跑完后：

1. 到 Cloudflare 后台 **Deployments** 页面，确认最新一次构建是**绿色 ✓**（不是 GitHub 上的红✗，以 Cloudflare 为准）
2. 打开站点，硬刷新看新页面 `/products/<大类>/<集合名>` 是否正常

---

## 改图 / 增图：维护已有集合

上面是「新建一个集合」。如果某个集合**已经存在**（比如 `soccer-jerseys`），要**换某张产品图**或**新增一个产品**，用 `scripts/update-collection.mjs`——不用重建集合，也不用改代码。

### 换图（替换某一张产品图）

```
node scripts/update-collection.mjs <集合名> <新图路径> --replace <第几张|产品编号> [--alt "新说明"]
```

- `<第几张>` 是序号（1、2、3…）或产品编号（如 `SJ-005`）
- 新图会被自动裁成 4:5、转 webp，**同名覆盖**旧图（站点未上线，同名替换即可，响应式变体下次构建自动重生成）
- `--alt` 可选：同时更新这张图的 alt 说明（media.js 槽 + 数据文件 altText）

示例（把 soccer jerseys 第 5 张图换掉）：

```
node scripts/update-collection.mjs soccer-jerseys 新图.jpg --replace 5
```

### 增图（在集合末尾新增一个产品）

```
node scripts/update-collection.mjs <集合名> <新图路径> --add \
  --code "SJ-013" --name "产品名" --desc "一句话描述" --alt "图说明"
```

示例：

```
node scripts/update-collection.mjs soccer-jerseys 新图.jpg --add --code "SJ-013" --name "New Jersey" --desc "A new style." --alt "A soccer jersey."
```

脚本会自动：取下一个序号、生成图、在 `media.js` 加图槽、在数据文件追加产品记录。

### 两条都先 dry-run 预览

在命令末尾加 `--dry-run`（如 `... --replace 5 --dry-run`）可先看「会怎么改」再真写，不碰正式文件。

### 改图/增图后要上传的文件

脚本跑完会打印清单。换图通常只传覆盖的那张图；增图要传新图 + `media.js` + `collection-<集合名>.js`。先 `npm run verify` 全绿再上传，然后确认 Cloudflare 变绿。

---

## 命令速查

```
# —— 新建集合 ——
node scripts/add-collection.mjs incoming/<集合名> --dry-run   # 预览（不真写）
node scripts/add-collection.mjs incoming/<集合名>             # 正式生成

# —— 维护已有集合（改图 / 增图）——
node scripts/update-collection.mjs <集合名> <新图> --replace <第几张|编号> [--alt "..."]                    # 换图
node scripts/update-collection.mjs <集合名> <新图> --add --code ".." --name ".." --desc ".." --alt ".."    # 增图

# —— 本地验证 ——
CODEBUDDY_SAFE_DELETE_ENABLED=0 npm run verify
```
