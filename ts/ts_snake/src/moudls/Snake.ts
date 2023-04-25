import { error } from "console";

class Snake{
  //表示蛇头元素
  head:HTMLElement;
  // 蛇的身体
  bodies:HTMLCollection;
  // 蛇的容器
  element:HTMLElement;
  constructor(){
    this.head = document.querySelector("#snake>div")as HTMLElement;
    this.bodies = document.getElementById("snake")!.getElementsByTagName("div");
    this.element = document.getElementById("snake")!;
  }
  // 获取蛇头的位置
  get X(){
    return this.head.offsetLeft;
  }
  get Y(){
    return this.head.offsetTop;
  }
  set X(value:number){
    if(this.X === value){
      return;
    }
    if(value<0 || value >290){
      throw new Error("蛇撞墙了！");
    }

    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){// 想要调头
      if(value > this.X){//说明
        value = this.X-10;
      }else{
        value = this.X+10;
      }
    }
    this.moveBody();
    this.head.style.left = value+"px";
  }
  set Y(value:number){
    if(this.Y === value){
      return;
    }
    if(value<0 || value >290){
      throw new Error("蛇撞墙了！");
    }
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){// 想要调头
      if(value > this.Y){
        value = this.Y-10;
      }else{
        value = this.Y+10;
      }
    }
    this.moveBody();
    this.head.style.top = value+"px";
  }
  addBody(){
    this.element.insertAdjacentHTML("beforeend","<div></div>");
  };
  moveBody(){
    for (let i = this.bodies.length-1; i >0; i--) {
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = X +"px";
      (this.bodies[i] as HTMLElement).style.top = Y +"px";

    }
  };
  checkHeadBody(){
    for (let i = 0; i < this.bodies.length; i++) {
      let bd = this.bodies[1] as HTMLElement;
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){// 头和身体相撞了

        throw new Error("撞到了自己～～！游戏GAME OVER!");

      }
      
    }
  }
}

export default Snake;