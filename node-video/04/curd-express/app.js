const { json } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();

app.engine('html', require('express-art-template'));
app.use('/node_modules/',express.static('../node_modules'));
app.use('/public/',express.static('./public'));

app.get('/',(req,res)=>{
  fs.readFile('./db.josn','utf8',function(err,data){
    if(err){
      return res.status(500).send(" Server error.");
    }
    res.render('index.html',{
      students: JSON.parse(data).students
    });
  })
  
});

app.listen(3000,()=>{
  console.log(`Example app listening at http://127.0.0.1:3000`);
})