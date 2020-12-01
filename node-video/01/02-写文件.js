// 写文件的方法：fs.writeFile()
var fs = require('fs');
fs.writeFile('./data/text.md', '测试写入文件方法', function (error, data) {
  if (!error) {
    console.log('文件写入成功');
  }
})