var argv = require('optimist').argv
var fs = require('fs')

// --type html,css,js
init(argv.name, argv.type)

function init (name, typeArr) {
  if (!name) {
    throw 'name is needed'
    return
  }
  typeArr = typeArr || ['html', 'css', 'js'] // demo 有哪些文件
  if (typeof typeArr === 'string') {
    if (typeArr.indexOf(',') > -1) {
      typeArr = typeArr.split(',')
    } else {
      typeArr = [typeArr]
    }
  }
  var foldName = `demos/${name}`
  fs.mkdir(foldName, (err, folder) => {
    if (err) {
      console.error(err)
      return
    }

    fs.writeFile(`${foldName}/loader.js`, getLoaderContent(typeArr))
    typeArr.forEach((type) => {
      createFile(type, foldName)
    })
  })
}

function getLoaderContent(typeArr) {
  var res = []
  var contentMap = {
    'html': `document.querySelector('#main').innerHTML = require('./demo.html')`,
    'css': `require('./style.css')`,
    'js': `require('./index.js')`
  }
  if (typeArr.indexOf('css') > -1) {
    res.push(contentMap.css)
  }
  if (typeArr.indexOf('html') > -1) {
    res.push(contentMap.html)
  }
  if (typeArr.indexOf('js') > -1) {
    res.push(contentMap.js)
  }
  res.push('')// 空行
  return res.join('\n')
}

function createFile (type, foldName) {
  var fileName = {
    'html': 'demo.html',
    'js': 'index.js',
    'css': 'style.css'
  }[type]
  if (!fileName) {
    console.error('unknown file type')
    return
  }
  fs.writeFile(`${foldName}/${fileName}`, '')

}
