/**
 * HTTP服务器代码的模块
 */
let http = require('http');
let url = require('url');
function start(routte, handle) {
  function onResquest(resquest, response) {
    var pathname = url.parse(resquest.url).pathname;
    response.writeHead(200, { "Content-Type": "text/plain" });
    var content = routte(handle, pathname);
    response.write(content);
    response.end();
  }
  http.createServer(onResquest).listen(8888);
}
exports.start = start;