/**
 * db.json 的操作
 * 增、删、查、改
 */
const fs = require('fs');
const dbpath = './db.josn';

// 查
exports.find = (callback)=>{
  fs.readFile(dbpath,(err,data)=>{
    if(err){
      return callback(err);
    }
    callback(null,JSON.parse(data).students);
  })
};

// 增
exports.add = (obj,callback)=>{
  fs.readFile(dbpath,(err,data)=>{
    if(err){
      return callback(err);
    }
    const dataT=JSON.parse(data).students;
    obj.id=dataT[dataT.length-1].id+1
    const fileData=dataT.push(obj);

    fs.writeFile(dbpath,JSON.stringify({students: dataT}),(err)=>{
      if(err){
        return callback(err);
      }
      callback(null);
    });
  });
};

// 删
exports.delete = ()=>{};

// 改/更新
exports.update = ()=>{};





