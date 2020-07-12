//"use strict";

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    const myGame = new Game();
    myGame.init();
  }
};
/*
drawSplashscreen (){
  this.backgroundImg.src = "img/field_background.jpg";
  this.ctx.drawImage(
    this.backgroundImg,
    this.x,
    this.y,
    this.width,
    this.height
  );*/
