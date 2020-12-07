
var http = require('http');

var server = http.createServer();



server.on('request', function (req, res) {
  var url = req.url;
  if (url === '/') {
    res.end('hello word! I am firstpage');
  } else {
    res.end('404 Not Found.');
  }
});


server.listen(3000, function () {
  console.log('Server is Runing!');
})