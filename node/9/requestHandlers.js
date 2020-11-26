var querystring = require('querystring');
var fs = require('fs');
function start(response, postData) {
  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>';
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(body);
  response.end();
};
function upload(response, postData) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write('you are sent:' + querystring.parse(postData).text);
  response.end();
};
function show(response, postData) {
  fs.readFile('/Users/zhuqin.wei/Documents/webGitHubProject/notebooks/node/9/tmp/timg.jpeg', 'binary', function (err, file) {
    if (err) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.write(err + "\n");
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write(file, "binary");
      response.end();
    }
  });
}
exports.start = start;
exports.upload = upload;
exports.show = show;




// 要在文件目录下安装formidable  才算完成