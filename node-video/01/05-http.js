// 构建web服务器  http模块
var http = require('http');
var server = http.createServer();
server.on('request', function () {
  console.log('收到客户端的请求了');
});
server.listen(3000, function () {
  console.log('服务器启动成功了');
});