# 个人学术主页模板

参考 [Liren Zhu 的 Teaching 页面](https://pku-zlr.github.io/teaching/)的布局：顶部导航、左侧圆形照片与个人资料、右侧正文、蓝色链接、浅灰页脚，并支持深浅主题和手机布局。

这是无需安装依赖、无需构建的静态 GitHub Pages 网站。姓名、照片、联系方式和首页介绍均已留空。Publications 与 Teaching 已预填参考网站的 **4 条论文和 2 条教学经历**，用于查看格式；请替换为自己的内容。课程简介按原意简要整理。页面中的浅灰线条只是空白位置标记，填写内容后会自动替换。

## 填写内容

编辑 **[`assets/js/content.js`](assets/js/content.js)**。所有页面共享这份配置。

| 配置 | 内容 |
| --- | --- |
| `profile.name` | 姓名，支持中英文 |
| `profile.bio` | 身份、职位等简短介绍 |
| `profile.avatar` | 照片路径 |
| `profile.location` / `affiliation` | 所在地、单位 |
| `profile.email` | 邮箱 |
| `profile.orcid` / `github` / `scholar` | 完整主页链接 |
| `profile.cv` | 简历路径或完整链接 |
| `about` / `research` | 个人介绍、研究方向，每个字符串是一段 |
| `service` | 学术服务，每个字符串是一项 |
| `publications` / `teaching` | 论文、教学经历 |
| `updated` | 最后更新日期，留空则隐藏 |

未填写的联系方式会自动隐藏。正文不需要写 HTML；`about`、`research` 和 `service` 可用 `[文字](URL)` 添加行内链接。保留配置中的引号、逗号、花括号和方括号。

### 介绍和研究方向

将空数组替换为自己的内容，例如：

```js
about: [
  "这里填写第一段个人介绍。",
  "这里填写第二段个人介绍。"
],
research: ["这里填写研究方向。"],
service: ["这里填写学术服务。"],
```

About 和 Research 当前已按 [Liren Zhu 的主页](https://pku-zlr.github.io/)整理为英文示例，保留学校、实验室与导师链接，邮件链接使用当前配置的个人邮箱。年级、入组时间和毕业年份沿用参考站，可在 `content.js` 中按自己的实际情况修改。

链接写法示例：`"I study at [Peking University](https://english.pku.edu.cn/)."`。邮件链接可写为 `[email me](mailto:你的邮箱)`。修改这些文字或链接后，保存并刷新浏览器即可，无需编译。

### 照片和简历

1. 将照片放入 `assets/images/`，例如 `avatar.jpg`。建议使用正方形照片。
2. 将 `profile.avatar` 改为 `"assets/images/avatar.jpg"`。
3. 如果需要简历，创建 `assets/files/` 并放入 `cv.pdf`，将 `profile.cv` 改为 `"assets/files/cv.pdf"`。

路径从仓库根目录计算，**不需要**为 Teaching 或 Publications 页面添加 `../`。照片为空或无法加载时仍显示空白圆形位置。

### 论文示例

以下内容只是填写格式，请替换为真实信息：

当前论文按「加粗标题 → 作者 → 会议／期刊 → paper、code、slides 链接」显示，无序号或项目符号。会议名称中已包含年份时，可以将 `year` 留空，避免重复显示。参考站未提供链接的论文使用 `links: []`。

每条论文的 `highlightAuthor` 指定需要加下划线的作者全名，需与 `authors` 中的姓名完全一致。当前示例突出显示 `Liren Zhu`；替换为自己的论文后，改为自己的姓名即可。该字段留空时不加下划线，无需在 `authors` 中写 HTML 标签。

```js
publications: [
  {
    title: "论文标题",
    authors: "作者列表",
    highlightAuthor: "需要加下划线的作者姓名",
    venue: "会议或期刊名称",
    year: "年份",
    description: "简要介绍，可留空",
    links: [
      { label: "Paper", url: "assets/files/paper.pdf" },
      { label: "Code", url: "https://github.com/你的用户名/项目名" }
    ]
  }
],
```

### 教学经历示例

当前教学按「可点击的课程标题 → 课程类型／教学身份、学校、年份 → 简介」显示。`role` 既可填写 `Graduate Course` 等课程类型，也可填写 `Teaching Assistant` 等身份。

```js
teaching: [
  {
    title: "课程名称",
    role: "Teaching Assistant",
    institution: "学校或院系",
    year: "年份或学期",
    description: "课程介绍，也可以用字符串数组填写多段正文",
    url: "" // 课程链接，可留空；留空时标题显示为普通文本
  }
],
```

## 本地预览

在仓库目录执行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

浏览器打开 <http://127.0.0.1:8000/>。修改配置或样式后刷新页面。按 `Ctrl+C` 停止服务。

## GitHub Pages 发布

将模板文件提交并推送到 GitHub 后，在仓库 **Settings → Pages** 中：

1. **Source** 选择 **Deploy from a branch**。
2. 选择文件所在分支（通常为 `main`），目录选择 **`/ (root)`**。
3. 点击 **Save**，等待 GitHub Pages 部署完成。

对于 `ArtistFish.github.io` 仓库，网站地址为 <https://artistfish.github.io/>。`.nojekyll` 让 GitHub Pages 直接提供静态文件。无需额外的 Actions 工作流。

发布设置可参阅 [GitHub 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 文件结构

```text
index.html                  首页
publications/index.html     论文页面
teaching/index.html         教学页面
assets/js/content.js        待填写的网站内容
assets/js/site.js           共享布局与交互
assets/css/style.css        样式、手机布局与主题
assets/images/              照片与图标
.nojekyll                   静态 GitHub Pages 标记
```

页面标题默认与参考站一致使用英文。可直接修改各 HTML 文件中的标题和 `site.js` 中的导航文字。配色在 `style.css` 顶部的 CSS 变量中调整。

## 中文简历模板

[`output/pdf/中文简历模板.pdf`](output/pdf/中文简历模板.pdf) 参考 `cv_example.jpg` 制作，采用单页 A4、宋体与 Times 字体，包含「教育背景」「项目经历」「实习经历」「科研论文」四个栏目。姓名、联系方式和经历均为待替换的占位内容。

排版源文件为 `tools/build_resume_template.py`；后续填写真实内容时可据此重新生成 PDF。字体已嵌入 PDF，文字可以选取复制。

图标的位置参考 [qianxi0410/cv.typ](https://github.com/qianxi0410/cv.typ)：四个栏目分别使用学位帽、项目文件夹、公文包和论文图标，顶部使用电话、信封、定位、目标和主页图标。图标由 Python 直接绘制为黑色矢量路径，无需图标字体或外部图片，放大与打印时保持清晰。
