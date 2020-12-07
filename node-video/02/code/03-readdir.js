// 读取文件目录

var fs = require('fs');


fs.readdir('/Users/zhuqin.wei/Documents/webGitHubProject/notebooks/www/apche-01', function (err, files) {
  if (err) {
    return console.log('文件目录不存在');
  }
  console.log(files);
})