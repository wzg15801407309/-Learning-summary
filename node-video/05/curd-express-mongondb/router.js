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
  fileOperations.add(req.body,function(err){
    if(err){
      return res.status(500).send(" Server add error.");
    }
    res.redirect('/');
  })

});
router.get('/edit',(req,res)=>{
  fileOperations.findById(parseInt(req.query.id),(err,students)=>{
    if(err) return res.status(500).send(" Server error.");
    res.render('edit.html',{
      students:students
    })
  });
});
router.post('/edit',(req,res)=>{
  fileOperations.update(req.body,function(err){
    if(err){
      return res.status(500).send(" Server add error.");
    }
    res.redirect('/');
  })
});

router.get('/delete',(req,res)=>{
  fileOperations.delete(parseInt(req.query.id),(err)=>{
    if(err) return res.status(500).send(" Server error.");
    res.redirect('/');
  });
})
module.exports=router;
