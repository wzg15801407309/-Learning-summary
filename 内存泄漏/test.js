/**
 * 一、内存溢出：内存不够用
 * 二、内存溢出，下面时间内存溢出的情况
 *    1、意外的全局变量，如下A(),
 *    2、setInterval() 没有放，一直在执行
 *    3、闭包
 */
/*--start--*/
function A() {
  a = 3;
  console.log('3');
};
A();// 知识a是不会释放的
/*--end--*/
/*--start--*/
function B() {
  var c = 123;
  function f2() {
    console.log(c);
  }
  return f2();
}
var f = B();
f();
//  如果看不写闭包就不会被释放
f = null
/*--end--*/