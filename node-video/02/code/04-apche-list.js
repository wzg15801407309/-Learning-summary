

//  使用模版引擎 渲染界面，不用自己写了
//  使用art-template模版
// 引用模版引擎
var template = require('art-template');
var http = require('http');
var fs = require('fs');
var server = http.createServer();
var wwwUrl = '/Users/zhuqin.wei/Documents/webGitHubProject/notebooks/www'
server.on('request', function (req, res) {

  fs.readFile('./templateDir.html', function (err, data) {
    if (err) {
      return res.end('404 Not Found.');
    }
    // 读取文件，目录
    fs.readdir(wwwUrl, function (err, files) {
      if (err) {
        return res.end('404 Not Found.')
      }
      var html = template.render(data.toString(), {
        files: files
      });
      res.end(html);
    });
  });
});


server.listen(3000, function () {
  console.log('Server is Running!');
})