var path = require('path')
var srcPrefix = './demos/'
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var fs = require('fs')

var webpackConfig = {
  devtool: 'eval-source-map',
  entry: {
  },
  output: {
    'path': 'dist',
    filename: '[name].js',
    trunkFilename: '[name].bundle.js'
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
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.js$/,
      exclude: /node_modules|dist/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin() // hotreload
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
  return {
    entry: entry,
    html: new HtmlWebpackPlugin({
      filename: `${demoFolderName}.html`,
      title: `${demoFolderName}`,
      inject: false,
      cache: false,
      // For details on `!!` see https://webpack.github.io/docs/loaders.html#loader-order
      template: '!!ejs!templates/normal.html',
      js: [`${demoFolderName}.js`],
      css: hasCSS ? [`${demoFolderName}.css`] : false
    })
  }
}

init(webpackConfig)

module.exports = webpackConfig
