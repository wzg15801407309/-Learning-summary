var a = document.getElementById("a"),
  b = document.getElementById("b"),
  c = document.getElementById("c");
c.addEventListener("click", function (event) {
  console.log("c1");
  // 注意第三个参数没有传进 false , 因为默认传进来的是 false
  //，代表冒泡阶段调用，个人认为处于目标阶段也会调用的
});
c.addEventListener("click", function (event) {
  console.log("c2");
}, true);
b.addEventListener("click", function (event) {
  console.log("b");
}, true);
a.addEventListener("click", function (event) {
  console.log("a1");
}, true);
a.addEventListener("click", function (event) {
  console.log("a2")
});
a.addEventListener("click", function (event) {
  console.log("a3");
  event.stopImmediatePropagation();
}, true);
a.addEventListener("click", function (event) {
  console.log("a4");
}, true);
// var name = 'bnc';
// (
//   function () {
//     if (typeof name == 'undefined') {
//       console.log('undefined');
//     } else {
//       console.log(name);
//     }
//   }
// )()
