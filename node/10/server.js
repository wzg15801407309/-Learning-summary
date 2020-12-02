/**
 * HTTP服务器代码的模块
 */
let http = require('http');
let url = require('url');
function start(route, handle) {
  function onResquest(resquest, response) {
    var pathname = url.parse(resquest.url).pathname;
    route(handle, pathname, response, resquest);

  }
  http.createServer(onResquest).listen(8888);
}
exports.start = start;