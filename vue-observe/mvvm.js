function WZG(option){
    this.$options=option;
    var data=this._data=this.$options.data;
    // 数据劫持
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
    }
};
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
    return new observe(data);
}
