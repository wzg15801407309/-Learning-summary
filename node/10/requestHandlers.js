var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');
function start(response) {
  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" enctype="multipart/form-data" ' +
    'method="post">' +
    '<input type="file" name="upload" multiple="multiple">' +
    '<input type="submit" value="Upload file" />' +
    '</form>' +
    '</body>' +
    '</html>';
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(body);
  response.end();
};
function upload(response, resquest) {
  var form = new formidable.IncomingForm();
  form.parse(resquest, function (error, fields, files) {
    fs.renameSync(files.upload.path, '/Users/zhuqin.wei/Documents/webGitHubProject/notebooks/node/9/tmp/timg.jpeg');
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write('received image:<br/>');
    response.write("<img src='/show' />")
    response.end();
  });

};
function show(response, postData) {
  fs.readFile('/Users/zhuqin.wei/Documents/webGitHubProject/notebooks/node/9/tmp/timg.jpeg', 'binary', function (err, file) {
    if (err) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.write(err + "\n");
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "image/jpeg" });
      response.write(file, "binary");
      response.end();
    }
  });
}
exports.start = start;
exports.upload = upload;
exports.show = show;




// 要在文件目录下安装formidable  才算完成