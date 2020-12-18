const express = require('express');
//等价与 http.createServer()
const app = express();
const port = 3000;
// 公开路径的处理（静态文件的处理）
// 这样做了就可以使用/public/xx访问public目录中的所有资源
app.use('/public/',express.static('./public'));
app.get('/',function(req,res){
  res.end('hello express!!!!');
});
app.get('/about',function(req,res){
  res.end('hello about!!!!');
});
app.listen(port,()=>{
  console.log(`Example app listening at http://127.0.0.1:${port}`);
});