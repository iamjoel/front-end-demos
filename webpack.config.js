var path = require('path');
var srcPrefix = './demos/';
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
  // devtool: 'eval-source-map',
  entry: {},
  output: {
    'path': 'dist',
    filename: '[name].js',
    trunkFilename: '[name].bundle.js',
    // publicPath: '/dist' // 用异步加载模块一定要加这个
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: "html-loader"
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  },
  plugins: [new ExtractTextPlugin("[name].css")],
  resolve: {
    alias: {}
  }
}

/*
读 demos 下第一层目录
*/
var init = (webpackConfig) => {
  var eachDemoConfig = addConfig();
  Object.assign(webpackConfig.entry, eachDemoConfig.entry);
  webpackConfig.plugins.push(eachDemoConfig.html);
  // console.log(webpackConfig.plugins);
};

var addConfig = (demoFolderName) => {
  var name = 'just-test';
  var entry = {};
  entry[name] = `${srcPrefix}${name}/index.js`;
  return {
    entry: entry,
    html: new HtmlWebpackPlugin({
      filename: `${name}.html`,
      title: `${name}`,
      inject: false,
      // For details on `!!` see https://webpack.github.io/docs/loaders.html#loader-order
      template: '!!ejs!templates/normal.html',
      js: [`${name}.js`],
      css: [`${name}.css`]
    })
  }
}

init(webpackConfig);

module.exports = webpackConfig;
