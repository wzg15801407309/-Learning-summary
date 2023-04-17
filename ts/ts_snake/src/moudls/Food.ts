class Food{
  // 定义一个属性表示食物所对应的元素
  element:HTMLElement;
  constructor(){
    // 获取页面上的food 赋值给element !的意义就是忽略取不到的问题
    this.element = document.getElementById("food")!;
  };
  // 获取 食物位置的方法 自带的getter属性
  get X(){
    return this.element.offsetLeft;
  }
  get Y(){
    return this.element.offsetTop;
  }
  // 修改食物位置的方法
  change(){
    // 生成一个随机位置
    // 生成食物位置的 范围 0，290
    // 移动一次就是一格，一格就是10
    let top = Math.round(Math.random()*29)*10;
    let left = Math.round(Math.random()*29)*10;
    this.element.style.left = left+"px";
    this.element.style.top = top+"px";
  }
}
export default Food;