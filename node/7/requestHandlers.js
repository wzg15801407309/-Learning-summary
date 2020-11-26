/**
 * node的模块
 * 可以实现：非阻塞操作 exec()
 * 不好的实现方式
 */
var exec = require('child_process').exec
function start() {
  let content = 'empty';
  // 执行了命令：'ls -lah' 获取当前目录下的所有的文件的命令
  exec('find/', function (err, stdout, stderr) {
    content = stdout;
  })
  return content;
};
function upload() {
  return 'hello upload';
};
exports.start = start;
exports.upload = upload;