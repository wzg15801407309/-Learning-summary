var http = require('http');
var fs = require('fs');

http.createServer(function (req,res){
  var url = req.url;
  if(url == '/' ){
    fs.readFile('./views/index.html',function(err,data) {
      if(err){
        return res.end('404 Not Found.');
      }
      res.end(data);
    });
  }else if(url.indexOf('/public/') === 0){
    fs.readFile('.'+'url',function(err,data){
      return res.end('404 Not Found.');
    });
    res.end(data);
  };
}).listen(3000,function() {
  console.log('Server is Running...');
});