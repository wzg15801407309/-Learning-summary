// 内存、数据、变量
var obj1 = { name: 'a' };
var obj2 = obj1;
obj1.name = 'b';
console.log(obj2.name)//'b'
function fn (obj) {
  obj.name = 'c';
}
fn(obj2);
console.log(obj2.name)//'c'




var obj3 = { age: 12 };
var obj4 = obj3;
obj3 = { name: 'v' };
obj3.age = 19;
console.log(obj3.age, obj4.age) //19 12 