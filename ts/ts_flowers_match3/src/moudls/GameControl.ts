
import LandmarkMap from './LandmarkMap'

class GameControl{
  LandmarkMap:LandmarkMap;
  constructor(){
    console.log("GameControl constructor");
    this.LandmarkMap = new LandmarkMap();
    this.init();
  }
  init(){
    console.log("初始化");
  }
}

export default GameControl;