/**
 * HTTP服务器代码的模块
 */
let http = require('http');
let url = require('url');
function start(routte, handle) {
  function onResquest(resquest, response) {
    var pathname = url.parse(resquest.url).pathname;
    routte(handle, pathname);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write('http');
    response.end();
  }
  http.createServer(onResquest).listen(8888);
}
exports.start = start;