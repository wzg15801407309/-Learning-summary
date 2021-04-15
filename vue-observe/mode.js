// 明白是先订阅--在发布  
function Dup(){
    this.subs = [];
}
Dup.prototype.addSub = function (sub){ // 订阅
    this.sub.push(sub);
};
Dup.prototype.notify = function (){
    this.subs.forEach(item => {
        item.update();
    })
}
// 发布
function Watcher (fn){ // watcher 是一个类 通过watcher可以给每个实例 附上updata方法
    this.fn = fn
}
Watcher.prototype.update = function (){
    this.fn();
}
let watcher =new watcher(function (){ // 监听函数
    // uodate 方法的具体实现
    alert(1);
});
let dep = new Dup();
dep.addSub(watcher);// 把带有watcher的实例放在类this.sub中