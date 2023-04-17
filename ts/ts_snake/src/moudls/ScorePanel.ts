class ScorePanel{
  score=0;
  level=1;
  scoreEle:HTMLElement;
  levelEle:HTMLElement;
  maxLevel:number;
  upScore:number;
  constructor(maxLevel:number = 10,upScore:number=10){
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  //设置分数
  addScore(){
    this.scoreEle.innerHTML = ++this.score + "";
    if(this.score%10 == 0){
      this.levelUp();
    }
  }
  //设置等级
  levelUp(){
    if(this.level<10){
      this.levelEle.innerHTML = ++this.level + "";
    }
  }
}

export default ScorePanel;