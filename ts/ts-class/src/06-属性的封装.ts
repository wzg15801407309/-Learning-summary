 (function(){
  class Person{
    //private 私有属性  只有在类中使用  默认是public
    private _name:string;
    private _age:number;
    constructor(name:string,age:number){
      this._name = name;
      this._age = age;
    }
    // 一般我们要获取和修改值可以通过暴露方法的方式 修改和获取值 如下：
    getName(){
      return this._name;
    }
    getAge(){
      return this._age;
    }
    setName(val:string){
       this._name = val;
    }
    setAge(val:number){
      if(val>=0){
        this._age = val;
      }
    }
    // ts中的get 和set 方法的定义  可以实现 对象.属性 的方式
    get name (){
      return this._name;
    }
    set name(val:string){
        this._name = val;
    }
    get age(){
      return this._age;
    }
    set age(val:number){

      if(val>=0){
        this._age = val;
      }
    }
  }
  const per = new Person('小满',12);
  console.log(per);
  per.setName("小曼");
  console.log(per);
  per.name = "猪八戒";
  per.age = 9999;
  console.log("猪八戒是老妖怪了",per);
})()