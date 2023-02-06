(function(){
  class Animal{
    name:string;
    age:number;
    constructor(name:string,age:number){
      this.name = name;
      this.age = age;
    }
    seyHello(){
      console.log("动物叫声啊！");
    }
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