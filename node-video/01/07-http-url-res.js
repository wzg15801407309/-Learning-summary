var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
  // console.log('客户端请求地址：', req.url);
  // // 可以直接使用end发送数据
  // res.end('hello node.js');
  // 获取请求服务器的客户端的端口号
  console.log('访问我的服务器的客户端的端口号：', req.socket.remotePort);
  var url = req.url;
  if (url === '/') {
    res.end('首页');
  } else if (url === '/login') {
    res.end('注册');
  } else {
    res.end('404 not found.');
  }
})

server.listen(8888, function () {
  console.log('服务器启动成功!');
});