var http = require('http');
var fs = require('fs');
var url=require('url');
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
  // 要注意true的重要性
  var parseObj=url.parse(req.url,true);
  var pathname = parseObj.pathname;
  if(pathname == '/' ){
    fs.readFile('./views/index.html',function(err,data) {
      if(err){
        return res.end('404 Not Found.');
      };
      var htmlData=artTemplate.render(data.toString(),{
        comments:comments
      });
      res.end(htmlData);
    });
  }else if(pathname == '/post'){
    fs.readFile('./views/post.html',function(err,data) {
      if(err){
        return res.end('404 Not Found.');
      };
      res.end(data);
    });
  }else if(pathname.indexOf('/public/') === 0){
    fs.readFile('.'+pathname,function(err,data){
      if(err){
        return res.end('404 Not Found.');
      }
      res.end(data.toString());
    });
  }else if(pathname === '/pinglun'){
    var comment=parseObj.query;
    comment.dateTime='2020-12-15 16:31:22';
    comments.unshift(comment);
    res.statusCode=302;
    res.setHeader('Location','/');
    res.end(JSON.stringify(parseObj.query));
    res.end();
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