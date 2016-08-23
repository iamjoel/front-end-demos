# 前端 Demos
[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

存放前端的 Demos。

得益于 webpack 及 HtmlWebpackPlugin 等插件，在本项目中写 Demo，可避免写一些重复的代码。如以前这么写 Demo
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Demo</title>
  <link rel="stylesheet" href="demo.css">
</head>
<body>
  主体内容
  <script src="index.js"></script>
</body>
</html>
```

现在，在本项目中只需这么写:  
demo.html
```
主体内容
```

loader.js
```
require('./style.css');
document.querySelector('#main').innerHTML = require('./demo.html');
require('./index.js');
```

由 webpack 将这些内容拼成一个完整的 HTML。


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
* `npm i && gem install sass`: 安装依赖。本项目用的是基于 ruby 的 Sass。
* `npm run dev` 写 Demos 时使用：会启动静态服务器，支持 hot reload。执行完该命令后，在浏览器中打开 `127.0.0.1:5001` 访问。
* `npm run publish` Demos 写好时使用。会构建生成目标代码，并发布到项目的 gh-pages 分支。
* 更多命令见 `package.json` 中的 `script`。

## 代码风格
本项目的 JavaScript 的代码风格用的是 [JavaScript Standard Style](http://standardjs.com/index.html)。

Sublime 上有对应的格式化插件 [Standard Format](https://packagecontrol.io/packages/StandardFormat)。