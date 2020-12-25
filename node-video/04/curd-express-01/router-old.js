const fs = require('fs');
const express = require('express');
const fileOperations = require('./fileoperations');

const router = express.Router();

router.get('/',(req,res)=>{
  fileOperations.find((err,students)=>{
    console.log('students: ', students);
    if(err){
      return res.status(500).send(" Server error.");
    }
    res.render('index.html',{
      students: students
    });
  });
});
router.get('/add',(req,res)=>{
  res.render('add.html');
});
router.post('/add',(req,res)=>{

});
module.exports=router;
// 这样也不好，express有路由
// module.exports = (app)=>{
//   app.get('/',(req,res)=>{
//     fs.readFile('./db.josn','utf8',function(err,data){
//       if(err){
//         return res.status(500).send(" Server error.");
//       }
//       res.render('index.html',{
//         students: JSON.parse(data).students
//       });
//     })
    
//   });
// }
