
/**
 * 诉求：希望在读取了a文件在读文件，读完b文件在读c文件
 * 分析：回出现经典的回调地狱地狱的问题，因此使用promise解决问题
 * 注意：new promise(fun)会立即执行，它后面的then才是异步的,
 *      也可以说是在promise本身不是异步的，它里面的方法是异步的
 */ 
const fs = require('fs');

const createPromise= (filePath) =>{
    return new Promise((resolve,rejects)=>{
        fs.readFile(filePath,'utf8',(err,data)=>{
            if(err) {
                rejects(err);
            }else{
                resolve(data);
            }
        });
    })
}
createPromise('./data/a.txt').then(data=>{
    console.log('a=',data);
    return createPromise('./data/b.txt');
}).then(data=>{
    console.log('b=',data);
    return createPromise('./data/c.txt');
}).then(data=>{
    console.log('c=',data);
});