//出线下面的注释只需要 /** 就会自动出来

/**
 *
 * 创建对象方法一： 通过{}创建
 * 等价与  new objec()
 */
// //创建了一个空对像
// var o = {};
// //创建私有属性
// o.name = "jack";
// o.age = 20;
// //创建私有方法，
// o.sayName = function () {
//   return o.name + "-" + o.age;
// };
// console.log(o.sayName());
// //公共属性 在o的原型上创建了一个公共属性sex o的原型是Object
// o.__proto__.sex = "boy";
// console.log(o.sex);
// let p = new Object();
// console.log(p.sex);

/**
 * 创建对像的方法二：new Object()
 */
// let w = new Object();
// w.name = "wzg";
// w.age = "18";
// w.sayName = function () {
//   return w.name + w.age;
// };
// console.log(w instanceof Object);
// console.log(w.constructor);
// console.log(w.sayName1());

/**
 * 创建对象方法三：使用字面量创建对象
 * 完全等价与 let obj={}
 */
// let w = {
//   name: "wzg",
//   age: "18 ",
//   sayName: function () {
//     // return this.name + "_" + this.age;
//     //使用es6的字符串模版
//     return `${this.name}-${this.age}`;
//   },
//   //这经常用来考察this的指像问题  明白在箭头函数中this指向它执行上下文
//   sayName1: () => `${this.name}-${this.age}`,
// };
// console.log(w.name);
// console.log(w.sayName());
// //输出undefined
// console.log(w.sayName1());

/**
 * 创建对象方法四：使用工厂模式创建对象‘
 * 这种方式通过函数的方式创建对像
 */
// function createObject() {
//   let w = new Object();
//   w.name = "wzg";
//   w.age = "18";
//   w.sayName = function () {
//     return `${this.name}-${this.age}`;
//   };
//   return w;
// }
// let wzg = createObject();
// let wzg1 = createObject();
// console.log(wzg === wzg1); //false

/**
 * 创建对像的方法五：通过构造函数创建
 */
// function Person() {
//   this.name = "wzg";
//   this.age = "18";
//   this.sayName = function () {
//     return `${this.name}-${this.age}`;
//   };
//   console.log(this);
// }
// //this指像window
// Person();
// //this指向Person
// let wzg = new Person();
// let wzg1 = new Person();

// console.log(wzg.sayName());
// console.log(wzg1.sayName());

// console.log(wzg.constructor === wzg1.constructor); //true
// console.log(wzg.constructor === Person); //true

// console.log(typeof wzg); //object

// console.log(wzg instanceof Object); //true
// console.log(wzg1 instanceof Object); //trueb

// console.log(wzg1.sayName === wzg.sayName); //false

/**
 * 创建对象的方法6:使用原型创建对象
 */

// function Animal() {}
// Animal.prototype.name = "wzg";
// Animal.prototype.age = "18";
// Animal.prototype.seyName = function () {
//   console.log(this);
//   return `${this.name}-${this.age}`;
// };
// let ani1 = new Animal();
// let ani2 = new Animal();
// ani1.seyName();
// console.log(ani1.seyName === ani2.seyName); //true
// console.log(Animal.prototype.constructor); //function Animal(){}
// console.log(Animal.prototype.constructor == Animal); //true
// //修改a2.name，a1的name不会变
// ani2.name = 'dog';
// ani2.sayName();//dog
// ani1.sayName();//animal

/**
 * 创建对象7:通过原型+构造函数的方式创建对象
 */
function Animal(name) {
  this.name = name;
  this.friends = ["dog", "cat"];
}
Animal.prototype.sayName = function () {
  return this.name;
};
var a1 = new Animal("d");
var a2 = new Animal("c");
a1.friends.push("snake");
console.log(a1.friends); //[dog,cat,snake]
console.log(a2.friends); //[dog,cat]
