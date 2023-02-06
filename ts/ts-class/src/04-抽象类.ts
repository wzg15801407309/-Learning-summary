(function(){
  /**
   * abstract 抽象类
   * 抽象类不能实例化对象  只能用来继承
   * 抽象类中可以定义抽象类方法 且抽象方法只能在抽象类中定义 
   * 【抽象方法没有具体的实现,且子类必须实现抽象类方法】
   */
   abstract class Animal{
    name:string;
    age:number;
    constructor(name:string,age:number){
      this.name = name;
      this.age = age;
    }
    abstract seyHello():void;
  }
  class Dog extends Animal{
    height:string;
    constructor(name:string,age:number,height:string){
      // 当子类要写 构造函数（constructor）时这离需要使用super来继承父类的属性
      super(name,age);
      this.height = height;
    }
    // 重新父类中的方法
    seyHello(): void {
      console.log("汪汪汪的叫");
    }

  }
  class Cat extends Animal{
      height:string;
      constructor(name:string,age:number,height:string){
        super(name,age);
        this.height = height
      }
      seyHello(): void {
        console.log("喵喵喵的叫");
      }
  }
  const dog = new Dog("旺财",12,"45cm");
  const cat = new Cat('二筒',2,"12cm");
  console.log(dog);
  console.log(cat);
})()