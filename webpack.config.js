var path = require('path');
var srcPrefix = './demos/';
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
  // devtool: 'eval-source-map',
  entry: {
  },
  output: {
    'path': 'dist',
    filename: '[name].js',
    trunkFilename: '[name].bundle.js',
    // publicPath: './assets/js/' // 用异步加载模块一定要加这个
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "html-loader" }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]'
      },
      { test: /\.css$/, loader: "css-loader" }
    ]
  },
  plugins: [],
  resolve: {
    alias: {}
  }
}

/*
读 demos 下第一层目录
*/
var init = (webpackConfig) =>{
  // 
  var eachDemoConfig = addConfig();
  Object.assign(webpackConfig.entry, eachDemoConfig.entry);
  webpackConfig.plugins.push(eachDemoConfig.html);
};

var addConfig = (demoFolderName) =>{
  return {
    entry: {
      'just-test': srcPrefix + 'just-test/index',
    },
    html: new HtmlWebpackPlugin({
      filename: 'test.html',
      title: 'just test',
      // For details on `!!` see https://webpack.github.io/docs/loaders.html#loader-order
      template: '!!ejs!templates/normal.html',
      js: ['dist/just-test/index.js'],
      css: ['.css-loader!demo/just-test/style.css'],// TODO
      content: '<div>aaaa</div>'//TODO

    })
  }
}

init(webpackConfig);

module.exports = webpackConfig;
