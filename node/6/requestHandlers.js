/**
 * 只在一个方法里添加了阻塞，但是会阻塞所有，这样是不对的
 */
function start() {
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }
  sleep(10000);
  return 'hello start';
};
function upload() {
  return 'hello upload';
};
exports.start = start;
exports.upload = upload;