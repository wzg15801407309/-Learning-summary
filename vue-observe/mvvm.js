function WZG(option){
    this.$options = option;
    // 下面这个代码和这样写是等价的
    /**
     *  var data = this.$options.data
     *  this._data = this.$options.data
     */
    var data = this._data = this.$options.data;
    // 数据劫持 设置get和set
    Observe(data);
    for (let key in data) {
        Object.defineProperty(this,key,{
            enumerable:true,
            get(){
                return this._data[key];
            },
            set(newvalue){
                this._data[key] = newvalue;
            }
        })
    };
    // 实现 computed  
    initComuted.call(this);
    // 编译模版
    new Compile(option.el,this);

};
function initComuted(){
    let vm = this;
    let computed = this.$options.computed;
    Object.keys(computed).forEach(function(key){
        Object.defineProperty(vm,key,{
            get: typeof computed[key] == 'function'?computed[key] : computed[key].get,
            set()
        });
        console.log(key);
    });
};
// 数据劫持 实现方法
function observe(data){
    // 数据的监听的所有的watcher
    let dep =new Dup();
    for(let key in data){
        let val =data[key];
        Observe(val);
        Object.defineProperty(data,key,{
            enumerable:true,
            get(){
                Dup.target && dep.addSub(Dup.target);
                return val;
            },
            set(newvalue){
                if(val === newvalue){
                    return
                }
                val=newvalue;
                Observe(val);
                // 让所有方法update 方法执行
                dep.notify();
            }
        });
    }
};
function Observe(data){
    if(typeof data != 'object') return;
    return new observe(data);
}
// 编译模版
function Compile(el,vm){
    // el 是替换的范围 
    vm.$el=document.querySelector(el);
    // 获取到需要到内存 为了减少dom的操作
    let fragment=document.createDocumentFragment();
    while(child = vm.$el.firstChild){
        fragment.appendChild(child);
    }
    replace(fragment);
    function replace(fragment){
        Array.from(fragment.childNodes).forEach(function(node){
            let text=node.textContent;
            let reg=/\{\{(.*)\}\}/;
            // 知道 3为文本
            if(node.nodeType === 3 && reg.test(text)){
                let arrays = RegExp.$1.split('.');
                let  val = vm;
                arrays.forEach( key =>{
                    val = val[key];
                })
                new Watcher (vm,RegExp.$1,function (newval){ // 获取到新的值
                    node.textContent = text.replace(reg,newval);
                });
                node.textContent = text.replace(reg,val);
            }
            // 知道 1为 属性？ 实现的是数据的双向绑定
            if(node.nodeType === 1){
                let nodeAttrs = node.attributes; // 获取当前dom节点的所有属性
                Array.from(nodeAttrs).forEach(function(attr){
                        let name = attr.name;
                        let exp  = attr.value;
                        if(name.indexOf("v-") == 0 ){
                            node.value = vm[exp];
                        }
                        new Watcher(vm,exp,function(newvalue){
                            node.value = newvalue
                        });
                        // 监听input的时间
                        node.addEventListener("input",function(e){
                            let newvalue = e.target.value;
                            vm[exp] = newvalue;
                        })
    
                })
            }
            if(node.childNodes){
                replace(node);
            }
        })
    }
  
    vm.$el.appendChild(fragment);
}

// 明白是先订阅--在发布  
function Dup(){
    this.subs = [];
}
Dup.prototype.addSub = function (sub){ // 订阅
    this.subs.push(sub);
};
Dup.prototype.notify = function (){
    this.subs.forEach(item => {
        item.update();
    })
}
function Watcher (vm,exp,fn){ // watcher 是一个类 通过watcher可以给每个实例 附上updata方法
    this.fn = fn;
    this.vm = vm;
    this.exp = exp;
    // 怎样把watcher订阅中呢，使用以下的方式
    Dup.target = this; // target 是没有的东西 相当创建了一个变量
    let arrays = exp.split('.');
    let  val = vm;
    arrays.forEach( key =>{ // this.a.a 调用我门的属性，就会调用我们的set的方法
        val = val[key];
    });
    Dup.target = null;

}
Watcher.prototype.update = function (){
    let  val =  this.vm;
    let arrays = this.exp.split('.');
    arrays.forEach( key =>{ 
        val = val[key];
    });
    this.fn(val);
}