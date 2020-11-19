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

/**  2020-11-19 学习创建对象的方法 */
// 构造函数方式创建对象
var wzgobj = new Object();
wzgobj.name = 'wzg';
wzgobj.age = '28';
wzgobj.setname = function (name) {
  this.name = name;
  console.log(this.name);
}
// 使用场景：开始确定内部的数据 我们可以使用
//  不好的方法就是语句太多
// 解决上面的方法  使用字面量的方式
var wzgobj1 = {
  name: 'wzg',
  age: '28',
  setname: function (name) {
    this.name = name;
  }
}
// 使用场景就是创建时被创建的属性方法时被确定的。 平时的使用中发现使用比较多的地方是：在调用接口的时候传入参数的组合。
// 问题：当我们想要创建多个具有相同属性的对象的时，重复的代码比较多。解决办法就是：
//工厂模式：使用工厂函数，动态的创建对象
function cratePerson(name, age) {
  var obj = {
    name: name,
    age: age,
    // 这里不能这样写 原因是箭头函数的指向问题
    // setname: (name) => {
    //   console.log(this, '*******')
    //   this.name = name
    // }
    setname: function (name) {
      this.name = name;
    }
  }
  return obj;
}
var p = cratePerson('wzg', '28');
// 问题：这样创建的对象都是object类型 没有办法区分。
// 解决办法：自定义构造函数类型
// 定义类型
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.setname = function (name) {
    this.name = name;
  }
}
// 创建对象
var p3 = new Person('wzg', 28);
var p4 = new Person('wzg', 28);
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.setname = function (name) {
    this.name = name;
  }
}
var p5 = new Student('wzg', 28);
// 问题所在：p3\p4和p5虽然区分了类型，但是 创建p3和p4他们具有哟个共同的方法setname，这样就浪费了内存
// 解决办法：使用构造函数+原型的方法创建
function PersonA(name, age) {
  this.name = name;
  this.age = age;

}
// 把方法放在了原型 __proto__ 上
PersonA.prototype.setname = function (name) {
  this.name = name;
}

var p6 = new PersonA('wzg', 28);
var p7 = new PersonA('wzg', 28);