const { start } = require("repl");


// 导入自己的模块
var server = require('./server.js');
var router = require('./router.js');
server.start(router.route);