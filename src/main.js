"use strict";

  function build (htmlString) {
    let div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.children[0]
  }

let mainContainer = document.getElementById("screen-container")

function main () {
    let game
    let splashScreen
    let gameScreen
    let gameOverScreen
    //let victoryScreen

    function drawSplashScreen() {
        splashScreen = build(`
        <div id="game-splash-screen" class="container">
          <div class="title">
          "
          </div>
            <div class="btn-group">
                  <button id="start-button">StartGame</button>
                
            </div>
            <div class="images-group">
                <img class="splash-background" src="./img/splashscreen_background.jpg" alt="Background">
                <img class="Peter" src="./img/Peter_splashscreen.jpg" alt="Peter">
            </div>
        </div>
        `)
       
        mainContainer.appendChild(splashScreen)
        let startButton = document.getElementById("start-button")
        startButton.addEventListener('click', function() {
            startGame();
            });
        
    }
    function removeSplashScreen() {
    splashScreen.remove();

    }
   
    function drawGameScreen() {
        gameScreen = build(`
        <div id="game-screen">
          <canvas id="canvas" width="1200" height="800"></canvas>
        </div>`)

        mainContainer.appendChild(gameScreen)
        return gameScreen
    }
   
    function removeGameScreen() {
    gameScreen.remove();
    }
   
    function drawGameOverScreen() {


      
        gameOverScreen = build(``)
        
        mainContainer.appendChild(gameOverScreen)
        
        let tryAgaintBtn = gameOverScreen.querySelector('tryAgain-button');
        
        tryAgaintBtn.addEventListener('click', function(){
      startGame(gameOverScreen)
    });

    }
    function removeGameOverScreen() {
       if (gameOverScreen !== undefined) {
     gameOverScreen.remove();
   }
    }

   //  function drawVictoryScreen() {
   //      victoryScreen = build("<div id="win-screen">
   //         ")
        
   //      mainContainer.appendChild(victoryScreen)
       
   //      let restartBtn = gameOverScreen.querySelector('playAgain-button');
   //      restartBtn.addEventListener('click', function(){
  // 		startGame()
  // 	});
   //  }
   //  function removeVictoryScreen() {
  // 	 victoryScreen.remove();
   //  }

    function startGame() {
        removeSplashScreen();
        removeGameOverScreen();
        //removeVictoryScreen();

        game = new Game();
        game.gameScreen = drawGameScreen();
        game.init()
        game.gameOverCallback(gameOver); 
//         game.gameWinCallback(gameVictory);
    }

    function gameOver () {
        removeGameScreen();
        drawGameOverScreen();
    }

   //  function gamevictory () {
   //      removeGameScreen();
   //      drawVictoryScreen();
   //  }
   
   drawSplashScreen()
  

}

window.onload = function () {
   main()
}


// let splashBackgroundMusic = new Audio ("sound/Queen_We will rock you_cut.m4a");
// splashBackgroundMusic.play();