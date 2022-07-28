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