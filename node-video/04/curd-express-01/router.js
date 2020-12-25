const fs = require('fs');
const express = require('express');
const fileOperations = require('./fileoperations');

const router = express.Router();

router.get('/',(req,res)=>{
  fileOperations.find((err,students)=>{
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
  console.log('req.body: ', req.body);
  fileOperations.add(req.body,function(err){
    if(err){
      return res.status(500).send(" Server add error.");
    }
    res.redirect('/');
  })

});
module.exports=router;
