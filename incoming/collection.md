# ============================================================================
# SOURDEN 新集合内容模板
# ----------------------------------------------------------------------------
# 用法：
#   1. 新建一个文件夹，比如 incoming/basketball-jerseys/
#   2. 把本文件复制进去，改名为 collection.md
#   3. 把产品图片也放进同一个文件夹（jpg / png / webp 都行）
#   4. 照着下面填——只改冒号「:」后面的内容，冒号前的标签一个都别动
#   5. 保存后运行：node scripts/add-collection.mjs incoming/basketball-jerseys
#
# 规则：
#   · 以 # 开头的行是注释，会被忽略
#   · paragraph: / product: 可以写多行（写几行就是几条）
#   · product 行里用「 | 」分隔（竖线两边有空格）
#   · 图片请让产品主体居中、完整，四周留一点边（脚本会裁成 4:5 竖图）
# ============================================================================

# —— 身份与路由（必填）——
slug: basketball-jerseys
industrySlug: apparel-footwear-bags
categoryName: Basketball Jerseys

# —— SEO（必填，写这一类的专属文案，别照抄别的类）——
seoTitle: Basketball Jerseys: Custom Sourcing from China | SOURDEN
metaDescription: Source custom basketball jerseys from China — sublimation, name and number printing, team crests, fit and size runs to your specifications.
cardDescription: Custom match, training and fan jerseys — sublimated artwork, name and number printing, and team identity to your specification.

# —— 页面开头（必填）——
eyebrow: PRODUCT COLLECTION
h1: Basketball Jerseys.

# —— 介绍段落（必填，写 2–3 段，每段一行 paragraph:）——
# 定制项不再单独列模块，直接写进介绍段落里（fabric / fit / 颜色 / 印花 / 尺码 / 包装等）
paragraph: Basketball jerseys are one of the apparel categories we source most often — for clubs, school and academy programmes, fan merchandise and promotional runs.
paragraph: Most orders are built around a short list of choices — fabric, fit, colourway, name and number printing, sizes and packaging. Each is confirmed against your artwork before production.
paragraph: The reference styles below show the construction details that matter — fabric weight, fit, and how a number or a name sits on the back.

# —— 目录区块（必填）——
catalogEyebrow: REFERENCE CATALOGUE
catalogTitle: Product catalogue
catalogNotice: The styles shown are a partial reference set. We can source additional designs, colours and constructions on request.

# —— 按钮文案（必填，跳转地址全站统一，不用填）——
ctaLabel: Request More Styles

# —— 产品清单（必填，code | 名称 | 一句话描述 | 图片描述alt | 图片文件名）——
# 图片文件名 = 你放进本文件夹的图片名，如 01.jpg
product: BJ-001 | Round-Neck Training Jersey | Plain breathable body with a taped round neck. | A player in a plain jersey holding a ball. | 01.jpg
product: BJ-002 | Match Jersey with Name & Number | Short-sleeve match jersey with a back print. | A jersey with a name and number hanging on a rack. | 02.jpg
product: BJ-003 | Full-Sublimation Jersey | All-over sublimated artwork dyed into the fabric. | Front view of a patterned jersey. | 03.jpg
