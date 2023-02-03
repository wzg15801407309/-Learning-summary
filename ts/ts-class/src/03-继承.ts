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


  }
  class Cat extends Animal{

  }
  const dog = new Dog("旺财",12);
  const cat = new Cat('二筒',2);
  console.log(dog);
  console.log(cat);
})()