/**
 * Created by zhm on 17.1.15.
 */
  /*
  *知识点：
  *  this使用
  *  DOM事件
  *  定时器
  *
  *  思路：
  *  （1）设置它左右移动
  *    问题：传入数字为NAN??
  *    解决：在页面中增加属性style：left:0
  *  （2）平滑移动（移动时间固定，每次移动的距离不一样）
  *    问题：连续点击出现晃动？---设置标志位
  *       出现空白页？？--- 第一张图片前加上最后一张，最后一张图片前加上第一张
  *               在类list的标签中增加属性style：left:-520px;
  *               设置无限滚动判断
  *
  *  （3）设置小圆点
  *    首先将所有的类置为空，当前类置为on
  *    绑定小圆点和图片
  *    绑定小圆点和左右箭头
  *    设置定时器，鼠标划上去停止，移开自动轮播
  *
  * */
  //1.获取元素
  var container = document.getElementById("container");
  var list = document.getElementById("list");
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var buttons = document.getElementById('buttons').getElementsByTagName('span');
  var timer = null;
  var timer2 = null;
  var flag = true;
  var index =0;
  //2.设置函数
  function moveImg(dis) {
    var time = 400;//运动的总时间
    var eachTime = 10;//每次小移动的时间
    var eachDis = dis/(time/eachTime);//每次小移动的距离
    var newWeizhi = parseInt(list.style.left) + dis;//新位置
    flag = false;
    function eachMove(){
      if(dis > 0 && parseInt(list.style.left)< newWeizhi || dis < 0 && parseInt(list.style.left)>newWeizhi){
        list.style.left = parseInt(list.style.left) + eachDis + 'px';
      }else {
        flag = true;
        clearInterval(timer);
        list.style.left = newWeizhi + 'px';
        //无限滚动判断
        if (newWeizhi == 0) {
          list.style.left = -2600 + 'px';
        }
        if (newWeizhi == -3120) {
          list.style.left = -520 + 'px';
        }
      }
    }
    timer = setInterval(eachMove, 10);
  }
  //3.设置点击切换图片
  next.onclick = function () {
    if(!flag) return;
    moveImg(-520);
    //绑定箭头和小圆点
    if (index == 4) {
      index = 0;
    } else {
      index++;
    }
    buttonsShow();
  };
  prev.onclick = function () {
    if(!flag) return;
    moveImg(520);
  //绑定箭头和小圆点
    if (index == 0) {
      index = 4;
    } else {
      index--;
    }
    buttonsShow();
  };
  //4.设置小圆点的绑定
  function buttonsShow() {
    //将之前的小圆点的样式清除
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].className == "on") {
        buttons[i].className = "";
        break;
      }
    }
    buttons[index].className = "on";
  }
  for(var i = 0 ;i<buttons.length;i++){
    buttons[i].value = i;
    //使用自执行函数解决i的赋值问题
    (function(){
      buttons[i].onclick = function(){
        if(this.value == index) return;
        var offset = (this.value - index)* -520;
        moveImg(offset);
        index = this.value;
        buttonsShow();
      }
    })();
  }
  //5.设置自动轮播
  timer2 = setInterval(next.onclick,1500);
  container.onmouseover = function(){
    clearInterval(timer2);
  };
  container.onmouseout = function(){
    timer2 = setInterval(next.onclick,1000);
  };