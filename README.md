# 前端 Demos
存放写前端的 Demos。

## 目录结构
* demos 存放 demo 的源码。
* dist demo 的生成码。
* templates/normal.html demo的通用 HTML 模板。

其中每个 demo 中的目录结构是
* demo.html
* loader.js(必须) 用来加载 html，css 或 js
* style.css
* index.js

## 命令
* `npm run dev` 写 Demos 时使用，会启动一个静态服务器，支持 hot reload。
* `npm run publish` Demos 写好时使用。会构建生成目标代码，并发布到项目的 gh-pages 分支。
* 更多命令见 `package.json` 中的 `script`。

