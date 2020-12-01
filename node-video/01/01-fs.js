
// 在node中 读取文件是通过fs模块来完成的
// 通过 fs.readFile()函数来看读取文件
var fs = require('fs');
fs.readFile('./data/hello.txt', function (error, data) {
  // error 不成功就是错误的对象，成功为null
  // data：成工后返回的数据 不成功为undefined
  // data返回的是16进制的编码，想要我们写的数据使用tostring()方法就可以
  console.log(data.toString());
})
