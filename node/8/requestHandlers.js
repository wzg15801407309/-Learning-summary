/**
 * node的模块
 * 非阻塞操作进行请求响应  比较推荐的方式 函数传递
 */
var exec = require('child_process').exec
function start(response) {
  let content = 'empty';
  // 执行了命令：'ls -lah' 获取当前目录下的所有的文件的命令
  exec('ls -lah', { timeout: 100000, maxBuffer: 20000 * 1024 },
    function (err, stdout, stderr) {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write(stdout);
      response.end();
    });
};
function upload(response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write('hello upload');
  response.end();
};
exports.start = start;
exports.upload = upload;