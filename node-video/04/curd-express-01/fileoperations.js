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
    if(err)return callback(err);
    const dataT=JSON.parse(data).students;
    obj.id=parseInt(dataT[dataT.length-1].id)+1
    dataT.push(obj);
    writeFile(dataT,callback);
  });
};


//查找某一个数据
exports.findById = (id,callback)=>{
  fs.readFile(dbpath,'utf8',(err,data)=>{
    if(err)return callback(err);
    const students=JSON.parse(data).students
    var stu= students.find((item)=>{
      return item.id == id
    });
    callback(null,stu);
  });
};
// 改/更新
exports.update = (obj,callback)=>{
  fs.readFile(dbpath,'utf8',(err,data)=>{
    if(err)return callback(err);
    const students = JSON.parse(data).students
    const stu = students.find((item)=>{
      return item.id == obj.id
    });
    for (var key in obj) {
      stu[key] = obj[key]
    }
    writeFile(students,callback);
  });
};
// 删
exports.delete = (id,callback)=>{
  fs.readFile(dbpath,'utf8',(err,data)=>{
    if(err)return callback(err);
    const students =JSON.parse(data).students
    const  index = students.findIndex((item)=>{
      return item.id == id
    });
    students.splice(index,1);
    writeFile(students,callback);
  });
};

// 写文件保存数据
const writeFile = (value,callback)=>{
  fs.writeFile(dbpath,JSON.stringify({students: value}),(err)=>{
    if(err){
      return callback(err);
    }
    callback(null);
  });
}





