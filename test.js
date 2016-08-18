var fs = require('fs');
// console.log(fs.readdirSync('demos'));
fs.readdirSync('demos').forEach(function (foldName) {
  console.log(fs.statSync(`demos/${foldName}/style.css`))
  console.log(fs.statSync(`demos/${foldName}/style1.css`))
});