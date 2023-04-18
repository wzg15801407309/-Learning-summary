class Snake{
  //表示蛇头元素
  head:HTMLElement;
  // 蛇的身体
  bodies:HTMLCollection;

  constructor(){
    this.head = document.querySelector("#snake>div")as HTMLElement;
    this.bodies = document.getElementById("snake")!.getElementsByTagName("div");
  }
  // 获取蛇头的位置
  get X(){
    return this.head.offsetLeft;
  }
  get Y(){
    return this.head.offsetTop;
  }
  set X(value:number){
     this.head.style.left = value+"px";
  }
  set Y(value:number){
    this.head.style.top = value+"px";
  }
}