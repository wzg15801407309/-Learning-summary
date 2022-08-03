class Test {
  sayHello() {
    console.log("123");
  }
}

let t: Test = new Test();
t.sayHello();
//  如果变量的声明和赋值是同事进行的，TS可以自动对变量进行类型检测
let a = true;
// string[]==Array<number> 字符串数组  
// 元祖 是固定长度的数组
let h:[string,number] = ['1',2];
// 类型别名
type mytype = string;
// 字面量
let c:10; // c是一个常量 为10 用的比较少
// 类型断言
let e:unknown;
e='123';
e=123;
let s:string;

if(typeof e == 'string'){
  s=e;
}
// 类型断言的方式
s = e as string;
s = <string> e ;
// 在属性名后面加上？标识属性可选
let b:{name:string,age?:number}
b = {name:"孙吾空"}
b = {name:"孙吾空",age:1200000}
// [propName:string]:any 多个任意类型的属性
// [propName:string]:string 多个string类型的属性
let c1:{name:string,[propName:string]:any}

c1 = {name:"猪八戒",age:18,gende:'男'}
// 希望d是一个有2个类型为number 参数 返回值为number 的函数 （利用尖头函数设置函数的结构）
let d : (a:number,b:number) => number;
