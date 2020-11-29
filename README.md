# PETER THE GOALKEEPER!

## Description

Peter has always dreamt of being a Football World Word Champion. This is the world final match but the rival team has the faster football players per second. If he stops all the balls, he wins the game. 

If he misses more than 3 balls, his team loses, as they had an advantage of 3 goals.


[Live Demo](https://cris-developer.github.io/Peter-the-goalkeeper-game)


## MVP (DOM - CANVAS)
- Peter moves from left to the right at the left part of the screen, where his goal is.
- Balls come from the right side, which is the rival team’s midfield. 
- Player wins if he stops all the balls and losses if he misses just one


## Backlog

- Add score
- Lives (goals scored). He has 3 lives, and can win if he misses 3 balls
- Sound
- Timer
- Add more levels
- Other soccer fan’s rivals visit him and throw him stones. He must avoid them
- Add winScreen
- Increase speed


## Data structure
Classes and methods definition.

# main.js

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}
- buildWinScreen

# game.js

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

# components.js

component{
 this.game
 this.x
 this.y
 this.width,
 this.height,
 this.img
}
Draw

# player.js

extends Component(){
  this.x;
  this.y;
  this.width;
  this.height;
  
}
draw()
move ()
update position ()
collision ()

# ball.js

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

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- winScreen


## Task

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


## Links


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
### Trello
[Link url](https://trello.com/b/wJrCDEut/peter-the-goalkeeper)



### Git
URLs for the project repo and deploy

- [Link Repo](http://github.com/cris-developer/Peter-the-goalkeeper-game)

- [Link Deploy](https://cris-developer.github.io/Peter-the-goalkeeper-game)

