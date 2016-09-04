const DEMO_FOLD_NAME = 'signin'

var path = require('path')
var srcPrefix = './demos/'
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var fs = require('fs')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")

var webpackConfig = {
  devtool: 'source-map',
  entry: {
    vendors: ["jquery", "vue"]
  },
  output: {
    'path': 'dist',
    filename: '[name].js',
    trunkFilename: '[name].bundle.js',
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', include: new RegExp(`demos/${DEMO_FOLD_NAME}`) }
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
      exclude: /node_modules|create-demo\.js/,
      loader: 'babel-loader'
    }]
  },
  postcss: function () {
    return [autoprefixer, precss];
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new CommonsChunkPlugin("vendors", 'vendors.js'),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {}
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
  var hasCSS = false
  try {
    fs.statSync(`demos/${DEMO_FOLD_NAME}/style.css`)
    hasCSS = true
  } catch (e) {}
  var demoConfig = addConfig(DEMO_FOLD_NAME, hasCSS)
  Object.assign(webpackConfig.entry, demoConfig.entry)
  webpackConfig.plugins.push(demoConfig.html)
}

var addConfig = (demoFolderName, hasCSS) => {
  var entry = {}
  entry[demoFolderName] = `${srcPrefix}${demoFolderName}/loader.js`
  var jsArr = ['vendors.js']
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
