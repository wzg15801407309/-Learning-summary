
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
  snake:Snake;
  food:Food;
  scorepanel:ScorePanel;
  // 按键的方向
  direction:string = '';
  // 记录游戏是否结束
  isLive = true;
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
    this.checkEat(X,Y);
    try{
      this.snake.Y = Y;
      this.snake.X = X;
    }catch(e:any){
      alert(e.message+"GAME OVER!");
      this.isLive = false;
    }


    this.isLive&&setTimeout(this.run.bind(this), 300-(this.scorepanel.level-1)*30);
  };
  // 检查是否吃到食物
  checkEat(x:number,y:number){
    console.log("吃到了食物！");
    if( x === this.food.X && y ===  this.food.Y){
      this.food.change();
      this.scorepanel.addScore();
      this.snake.addBody();
    }
  }
}

export default GameControl;