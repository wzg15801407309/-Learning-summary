/**
 * HTTP服务器代码的模块
 */
let http = require('http');
let url = require('url');
function start(routte, handle) {
  function onResquest(resquest, response) {
    var postData = '';
    resquest.setEncoding('utf8');
    var pathname = url.parse(resquest.url).pathname;
    resquest.addListener('data', function (postDataChunk) {
      postData += postDataChunk;
      console.log(postDataChunk + "'.'")
    })
    resquest.addListener('end', function () {
      routte(handle, pathname, response, postData);
    })

  }
  http.createServer(onResquest).listen(8888);
}
exports.start = start;