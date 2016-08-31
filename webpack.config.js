var path = require('path')
var srcPrefix = './demos/'
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var fs = require('fs')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")

function isProduction() {
  return (process.env.NODE_ENV && process.env.NODE_ENV.trim()) === 'production'
}

var webpackPlugins = [
  new ExtractTextPlugin('[name].css'),
  new CommonsChunkPlugin("vendors", 'vendors.js')
]
if(!isProduction()){
  webpackPlugins.push(new webpack.HotModuleReplacementPlugin())// hotreload
}

var webpackConfig = {
  devtool: isProduction() ? null:'source-map',
  entry: {
    vendors: ["jquery", "vue"]
  },
  output: {
    'path': 'dist',
    filename: '[name].js',
    trunkFilename: '[name].bundle.js',
    // publicPath: isProduction() ? '' : 'http://localhost:5001', // 设置的不对会影响 开发和发布。。。
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules|dist/}
    ],
    loaders: [{
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', ['css', 'postcss'])
    }, {
      test: /\.js$/,
      exclude: /node_modules|dist|create-demo\.js/,
      loader: 'babel-loader'
    }]
  },
  postcss: function () {
    return [autoprefixer, precss];
  },
  plugins: webpackPlugins,
  resolve: {
    alias: {
    }
  },
  devServer: { // hotreload
    contentBase: './dist',
    hot: true
  },
  eslint: {
    configFile: '.eslintrc'
  }
}

/*
读 demos 下第一层目录
*/
var init = (webpackConfig) => {
  fs.readdirSync('demos').forEach(function (foldName) {
    var hasCSS = false
    try {
      fs.statSync(`demos/${foldName}/style.css`)
      hasCSS = true
    } catch(e) {}
    var eachDemoConfig = addConfig(foldName, hasCSS)
    Object.assign(webpackConfig.entry, eachDemoConfig.entry)
    webpackConfig.plugins.push(eachDemoConfig.html)
  })
// console.log(webpackConfig)
}

var addConfig = (demoFolderName, hasCSS) => {
  var entry = {}
  entry[demoFolderName] = `${srcPrefix}${demoFolderName}/loader.js`
  var jsArr = ['vendors.js'] // TODO
  jsArr.push(`${demoFolderName}.js`)
  var cssArr = [`${demoFolderName}.css`]
  return {
    entry: entry,
    html: new HtmlWebpackPlugin({
      filename: `${demoFolderName}.html`,
      title: `${demoFolderName}`,
      inject: false,
      cache: false,
      // For details on `!!` see https://webpack.github.io/docs/loaders.html#loader-order
      template: '!!ejs!templates/normal.html',
      js: jsArr,
      css: hasCSS ? cssArr : false
    })
  }
}

init(webpackConfig)

module.exports = webpackConfig
