class Person{
  //实例属性 可修改
  name:string = "wzg";
  age:number = 30;
  // 类属性的定义（类属性==静态数据  使用static） 类属性只能通过类来调用
  static height:number = 189;
  seyhello(){
    console.log("函数");
  }
}
const newPerson = new Person();
console.log("class",newPerson);
console.log("class",newPerson.name,newPerson.age);
console.log('类属性：',Person.height)