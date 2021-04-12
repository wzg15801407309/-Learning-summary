function WZG(option){
    this.$options=option;
    var data=this._data=this.$options.data;
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
    // 编译模版
    new Compile(option.el,this);
};
// 数据劫持 实现方法
function observe(data){
    for(let key in data){
        let val =data[key];
        Observe(val);
        Object.defineProperty(data,key,{
            enumerable:true,
            get(){
                return val;
            },
            set(newvalue){
                if(val === newvalue){
                    return
                }
                val=newvalue;
                Observe(val);
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
    console.log(vm.$el);
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
            if(node.nodeType === 3 && reg.test(text)){
                console.log(RegExp.$1);
            }
            if(node.childNodes){
                replace(node);
            }
        })
    }
  
    vm.$el.appendChild(fragment);
}
