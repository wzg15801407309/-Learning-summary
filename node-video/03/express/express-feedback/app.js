// const express = require('express');
const express = require('express');

const app = express();
const port=3000;
const comments=[
  {name:'姓名',message:'留言板的留言数据',dateTime:'2020-12-14'},
  {name:'姓名',message:'留言板的留言数据',dateTime:'2020-12-14'},
  {name:'姓名',message:'留言板的留言数据',dateTime:'2020-12-14'},
  {name:'姓名',message:'留言板的留言数据',dateTime:'2020-12-14'},
  {name:'姓名',message:'留言板的留言数据',dateTime:'2020-12-14'},
  {name:'姓名',message:'留言板的留言数据',dateTime:'2020-12-14'},
]
// 配置使用 art-template 模版引擎
// 参数-：渲染.art结尾的文件时，使用art-tempalte模板引擎
// 参数二：把art-template 整合到express中，不加载art-template，但是依赖art-template
// 第一个参数的‘art可改为html’
app.engine('html', require('express-art-template'));

app.use('/public/',express.static('./public'));

app.get('/',function(req,res){
  res.render('index.html',{
    comments: comments
  });
});
app.get('/post',function(req,res){
  res.render('post.html');
});
app.get('/pinglun',function(req,res){
  const comment=req.query;
  comment.dateTime='2020-12-23 11:25:23';
  comments.unshift(comment);
  // res.sendStatus=302;
  // res.redirect(302, '/')
  res.redirect('/')
});
app.listen(port,function(){
  console.log(`Example app listening at http://127.0.0.1:${port}`);
})