// const express = require('express');
const express = require('express');

const app = express();
const port=3000;

app.use('/public/',express.static('./public'));

app.get('/',function(req,res){
  res.send('page index');
});
app.get('/post',function(req,res){
  res.send('post page');
});

app.listen(port,function(){
  console.log(`Example app listening at http://127.0.0.1:${port}`);
})