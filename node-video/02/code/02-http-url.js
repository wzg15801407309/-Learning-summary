
var http = require('http');
var fs = require('fs');
var server = http.createServer();

var defaultUrl = '/Users/zhuqin.wei/Documents/webGitHubProject/notebooks/www/apche-01'

server.on('request', function (req, res) {
  var url = req.url;
  var filePath = '/index.html';
  if (url !== '/') {
    filePath = url;
  };
  fs.readFile(defaultUrl + filePath, function (err, data) {
    if (err) {
      return res.end('404 Not Found.');
    }
    res.end(data);
  });
});


server.listen(3000, function () {
  console.log('Server is Running!');
})