import { clearScreenDown } from "readline"

function fn<T>(a:T):T{
  return a
}
console.log(fn(12))
console.log(fn("我是字符串"))
console.log(fn<string>("我是显示字符串"))
interface Inter{
  length:number
}
function fn2<T extends Inter>(a:T):T{
  console.log(a);
}
fn2("130cm");
class Myname<T>{
  name:T;
  constructor(name:T){
    this.name=name
  }
}

const myname = new Myname<string>("test");
console.log(myname);