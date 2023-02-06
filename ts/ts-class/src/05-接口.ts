(function(){
  // 定义一个类似对象的类型
  type myInfo = {
    name:string,
    age:number
  }
  /**
   * 定义一个接口
   * 接口就是定义一个类接口 用来定义类中应该有哪些属性
   * 接口可以当成类型申明去使用，切可以同时定义相同的两个接口 最后的结果就是他们的并集
   * 
   * 接口中的属性不能有实际的值 接口中定义的方法不能有实现的方法 相当于抽像的方法
   * 接口只定义类的结构不关心实现
   */
  interface myInterface{
    name:string;
    age:number;
    seyhello():void;
  }
  interface myInterface{
    genger:string
  }
  const newobj:myInterface = {
    name:"tom",
    age:12,
    genger:"男",
    seyhello(){
      console.log("大家好，上面就是我的个人信息哦！！哈哈");
    }
  }

})()