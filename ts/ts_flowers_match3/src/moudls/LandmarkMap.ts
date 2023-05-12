class LandmarkMap{
  // map点的容器
  mapElement:HTMLElement;
  // map点的个数
  mapCount:number = 24;
  constructor(){
    console.log("LandmarkMap constructor");
    this.mapElement = document.getElementById("main-content")!;
    this.createLandmarkMap();
  };
  createLandmarkMap(){
    for (let i = this.mapCount; i>0; i--) {
      this.mapElement.insertAdjacentHTML("beforeend",'<div class="landmarks-pos"><div></div></div>');
    }
  }
}

export default LandmarkMap;