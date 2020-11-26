/**
 * HTTP服务器代码的模块
 */
// 导入的是node自带的http的模块
let http = require('http');

http.createServer(function (resquest, response) {
  console.log('1');
  // 200 是http状态码
  response.writeHead(200, { "Content-Type": "text/plain" });
  // 在http主体中写内容
  response.write('Hello World!');
  // 响应完成
  response.end();
}).listen(8888);// 8888 是端口
console.log(2);
