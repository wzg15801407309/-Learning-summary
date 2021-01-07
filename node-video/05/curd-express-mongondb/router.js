const express = require('express');
const studentsDbs = require('./db');
const fileOperations = require('./fileoperations');

const router = express.Router();
// 查找所有的数据
router.get('/',(req,res)=>{
  studentsDbs.find((err,students)=>{
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
  new studentsDbs(req.body).save(err => {
    if(err){
      return res.status(500).send(" Server add error.");
    }
    res.redirect('/');
  });
});

router.get('/edit',(req,res)=>{
  studentsDbs.findById(req.query.id,(err,students)=>{
    if(err) return res.status(500).send(" Server error.");
    res.render('edit.html',{
      students:students
    })
  });
});
router.post('/edit',(req,res)=>{
  studentsDbs.findByIdAndUpdate(req.body.id,req.body,err => {
    if(err){
      return res.status(500).send(" Server add error.");
    }
    res.redirect('/');
  });
});

router.get('/delete',(req,res)=>{
  studentsDbs.findOneAndRemove(req.query.id,(err)=>{
    if(err) return res.status(500).send(" Server error.");
    res.redirect('/');
  });
})
module.exports=router;
