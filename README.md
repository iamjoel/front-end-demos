# Web 前端 Demos
[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

存放 Web 前端的 Demos。

本项目支持
* 只需写必要的代码。具体见[这里](#not-needed-code)。
* 支持 ES6。
* CMD 模块加载规范。
* 在 CSS 中不用写浏览器前缀。前缀由 [Autoprefixer](https://github.com/postcss/autoprefixer)。
* 在 CSS 中可以用类似 Sass 的写法。具体见 [precss](https://github.com/jonathantneal/precss)。
* hot reload：在开发过程中，只要 HTML，CSS 或 JS 文件发生变化时，浏览器自动刷新。

## <a name="not-needed-code">只需写必要的代码</a>
得益于 webpack 及 HtmlWebpackPlugin 等插件，在本项目中写 Demo，可避免写一些重复的代码。如以前这么写 Demo
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Demo</title>
  <!-- 加载 CSS -->
  <link rel="stylesheet" href="demo.css">
</head>
<body>
  Demo的 HTML 内容
  <!-- 加载 JS -->
  <script src="index.js"></script>
</body>
</html>
```

现在，在本项目中只需这么写:  
loader.js
```
require('./style.css') // 加载 CSS
document.querySelector('#main').innerHTML = require('./demo.html') // 加载 HTML
require('./index.js') // 加载 JS
```

demo.html
```
Demo的 HTML 内容
```

由 webpack 将这些内容拼成一个完整的 HTML。

## 目录结构
* `demos`: 存放 demo 的源码。
* `dist`: demo 的生成码。
* `templates/normal.html`: demo的通用 HTML 模板。

其中每个 demo 中的目录结构是
* `loader.js`: 用来加载 html，css 或 js。**必须有**。
* `demo.html`
* `style.css`
* `index.js`

## 命令
* `npm i`: 安装依赖。
* `npm run dev` 写 Demos 时使用：会启动静态服务器，支持 hot reload。执行完该命令后，在浏览器中打开 `127.0.0.1:5001` 访问。
* `npm run publish` Demos 写好时使用。会构建生成目标代码，并发布到项目的 gh-pages 分支。
* `npm run create -- --name demo名称`。创建一个 demo。

* 更多命令见 `package.json` 中定义的 `scripts`。

## 代码风格
本项目的 JavaScript 的代码风格是在 [JavaScript Standard Style](http://standardjs.com/index.html) 的基础上做的小修改。

Sublime 上有对应的格式化插件 [Standard Format](https://packagecontrol.io/packages/StandardFormat)。