const { timingSafeEqual } = require('crypto');
const express = require('express');
const app = express();
const ports = 3000;

app.get('/',function(req,res){
  res.end('hello world!');
});
// 访问：/public/public下资源
app.use('/public/',express.static('./public/'));
// 访问：public下资源
app.use(express.static('./public/'));
// 访问：/static/public下资源
app.use('/static/',express.static('./public/'));
app.listen(ports,function(){
  console.log(`Example app listening at http://127.0.0.1:${ports}`);
});