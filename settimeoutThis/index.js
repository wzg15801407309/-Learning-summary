//https://www.jianshu.com/p/5b20bc2d1a32(解决settimeout的指向问题)
function later () {
  this.count = Math.ceil(Math.random(0, 1) * 100);
}
later.prototype.bloom = function () {
  // 1、window.setTimeout(() => this.dec(), 1000)
  console.log(this);
  window.setTimeout(this.dec.bind(this), 1000)

}
later.prototype.dec = function () {
  console.log(this.count + '=dec');
}
var c = new later();
c.bloom();
console.log(c.count);