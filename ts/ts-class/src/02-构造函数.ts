class Person{
  age:number;
  name:string;
  // 构造函数 定义属性
  constructor(age:number,name:string){
    this.name = name;
    this.age = age

  }
  // 类属性的定义（类属性==静态数据  使用static） 类属性只能通过类来调用
  static height:number = 189;
  seyhello(){
    console.log("函数");
  }
}
const per = new Person();
console.log('类属性：',Person.height)