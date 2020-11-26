/**
 * HTTP服务器代码的模块
 */
let http = require('http');
function start() {
  function onResquest(resquest, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write('http服务作为模块导出');
    response.end();
  }
  http.createServer(onResquest).listen(8888);
}
exports.start = start;