# PETER THE GOALKEEPER!

## Description

Peter has always dreamt of being a Football World Word Champion. This is the world final match but the rival team has the faster football players per second. If he stops all the balls, he win the game. 

If he misses more than 3 balls, his team loses, as they had an advantage of 3 goals.


## MVP (DOM - CANVAS)
- Peter moves from left to the right at the left part of the screen, where his goal is.
- Balls come from the right side, which is the rival team’s midfield. 
- Player wins if he stops all the balls and losses if he miss just one

--------

## Backlog

- Add score, 
- Lives (goals scored). He has 3 lives, and can win if he misses 3 balls
- Sound
- Timer
- Add more levels
- Other soccer fan’s rivals visit him and throw him stones. He must avoid them
- Add winner screen
- Increase speed


## Data structure

### main.js
```
drawSplashScreen(){}
drawGameScreen(){}
drawGameOverScreen(){}
drawWinScreen(){}

Init start

start Game

### game.js
```
Game()
Constructor {

  this.canvas
  this.player
  this.score;
  this.balls;

}

 init ()

 start ()
 

checkCollisions()

setGameOver()



### Components.js

component{

 this.game
 this.x
 this.y
 this.width,
 this.height,
 this.img
}
draw

### Player.js
```
extends Component(){
  this.x;
  this.y;
  this.width;
  this.height;
  
}

draw()

move()

update position ()

collision ()
```

### Balls.js
```
extends Component(){
  {
  this.x;
  this.y;
  this.direction;
  this.speed;
  this.width;
  this.height;
}

draw ()

move ()

update ()



## Tasks

- main – buildDom
- main - buildSplahsScreen
- main - buildGameScreen
- main – buildGameOverScreen
- main – buildWinScreen
- game - init
- game – start
- game - createObstacles
- game – drawBackground
- game - clearCanvas
- player –  draw  
- player-   move
- player  - update position
- player-  colision
- obstacles – draw
- obstacles -move
- obstacles – update position



## States and States Transitions
```
- splashScreen()
  - buildSplash()
  - addEventListener(startGame)
  
  
- startGame()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - buildGameOver()
  - addEventListener(startGame) 
```


## Links


### Trello
[Link url] https://trello.com/b/wJrCDEut/peter-the-goalkeeper




### Git
URLs for the project repo and deploy
- [Link Repo](https://github.com) https://github.com/cris-developer/Peter-the-goalkeeper-game

- [Link Deploy](https://githb.com)


### Slides
URLs for the project presentation 
- [Link Slides](https://docs.google.com)


