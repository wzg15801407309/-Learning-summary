var http = require('http');
var fs = require('fs');
var artTemplate=require('art-template');
var comments=[
  {name:'姓名',message:'留言板的留言数据',dateTime:'2020-12-14'},
  {name:'姓名',message:'留言板的留言数据',dateTime:'2020-12-14'},
  {name:'姓名',message:'留言板的留言数据',dateTime:'2020-12-14'},
  {name:'姓名',message:'留言板的留言数据',dateTime:'2020-12-14'},
  {name:'姓名',message:'留言板的留言数据',dateTime:'2020-12-14'},
  {name:'姓名',message:'留言板的留言数据',dateTime:'2020-12-14'},
]
http.createServer(function (req,res){
  var url = req.url;
  if(url == '/' ){
    fs.readFile('./views/index.html',function(err,data) {
      if(err){
        return res.end('404 Not Found.');
      };
      var htmlData=artTemplate.render(data.toString(),{
        comments:comments
      });
      res.end(htmlData);
    });
  }else if(url == '/post'){
    fs.readFile('./views/post.html',function(err,data) {
      if(err){
        return res.end('404 Not Found.');
      };
      res.end(data);
    });
  }else if(url.indexOf('/public/') === 0){
    fs.readFile('.'+url,function(err,data){
      if(err){
        return res.end('404 Not Found.');
      }
      res.end(data.toString());
    });
  }else{
    fs.readFile('./views/404.html',function(err,data) {
      if(err){
        return res.end('404 Not Found.');
      };
      res.end(data);
  })};
}).listen(3000,function() {
  console.log('Server is Running...');
});