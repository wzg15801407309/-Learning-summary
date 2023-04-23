
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import { log } from "console";

class GameControl{
  snake:Snake;
  food:Food;
  scorepanel:ScorePanel;
  // 按键的方向
  direction:string = '';
  constructor(){
    this.snake = new Snake();
    this.food = new Food();
    this.scorepanel = new ScorePanel();
    this.init();
  };
  init(){
    console.log("初始化");
    //  this.keydownHandler.bind(this) 这样写的目的是为了拿到按键本身
    document.addEventListener("keydown",this.keydownHandler.bind(this));
    this.run();
  };
  // 创建 键盘按下的响应函数
  keydownHandler(event:KeyboardEvent){
    // console.log(event.key);
    this.direction = event.key;
  };
  // 移动 
  run(){
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch(this.direction){
      case "Up":
      case "ArrowUp":
        Y -= 10;
        break;
      case "Down":
      case "ArrowDown":
        Y += 10;
        break;
      case "Left":
      case "ArrowLeft":
        X -= 10;
        break;
      case "Right":
      case "ArrowRight":
        X += 10;
        break;
    }
    this.snake.Y = Y;
    this.snake.X = X;
    setTimeout(this.run.bind(this), 300);
  }
}

export default GameControl;