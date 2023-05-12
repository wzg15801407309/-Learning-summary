class Landmark{
  // pos 的集合
  landmarkDiv:HTMLCollection;
  constructor(){
    this.landmarkDiv = document.getElementById("main-content")!.getElementsByClassName("landmarks-pos");
  }
}

export default Landmark;