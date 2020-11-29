class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.Peter = new Player(this,30,350, 100, 150);
    this.ball =  [];
    this.backgroundImg = new Image();
    this.x = 0;
    this.y = 0;
    this.width = 1200;
    this.height = 800;
    this.score=0;
    this.lives=3;
    this.collisioncheck=false;
    //this.dx = 0;
    //this.dy = 0;
    this.backgroundSound=new Audio ("sound/Soccer_Crowd_Cheer.wav");
    this.catchBallSound=new Audio ("sound/Crowd Happy.mp3");
    this.winnerSound=new Audio ("sound/Queen-We Are The Champions_ Cut.m4a");
    this.looserSound =new Audio ("sound/Crowd Disappointed.mp3")
    this.looserSound.volume=0.03;
    
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.start();
    this.createBall();
  }

  start() {
    this.drawBackground();
    this.drawMainCharacter();
    setInterval(() => {
      this.clear();
      this.drawBackground();
      this.drawMainCharacter();
      this.Peter.move();
      this.drawScore();
      this.drawLives();
      this.drawGameOver();
      this.checkLives();
      this.backgroundSound.play();
      this.backgroundSound.volume=0.05;
      //this.checkCollisionPeterBall();
      //this.ctx.clearInterval();
      
      for (let i = 0; i < this.ball.length; i++) {
        this.ball[i].move();
        this.ball[i].draw();
        this.collision(this.ball[i]); // we remove it from
        }
      
        if (this.lifes <= 0) {
          this.gameOver();
          clearInterval(setInterval1);
        }
      
    }, 1000 / 60);
  }

  createBall() {
     
        let randomY=Math.random()* (this.height - 500)+ 250
        this.ball.push(new Ball(this, randomY));
        
      
      setTimeout(() => {
        this.createBall();
      }, Math.random()*3000+500);
  }

  
  drawBackground() {
    this.backgroundImg.src = "img/field_background.jpg";
    this.ctx.drawImage(
      this.backgroundImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
    console.log ("Background piintado")
  }

  drawMainCharacter() {
    this.Peter.drawComponent("img/Peterleft.png");
    console.log ("Peter esta en porteria")
  }

  drawScore() {
    this.ctx.font='20px Raleway';
    this.ctx.fillStyle = "white";
    this.ctx.fillText("SCORE: " + this.score, 475,30);
  }

  drawLives() {
    this.ctx.font='20px Raleway';
    this.ctx.fillStyle = "white";
    this.ctx.fillText("LIVES: " + this.lives, 625,30);
  }
  
  
  drawGameOver() {
    if (this.lives ==0) {
      this.ctx.clearRect(0, 0,canvas.width,canvas.height);
      this.backgroundSound.pause();
      this.looserSound.play();
      this.backgroundImg.src = "img/Game over screen.png";
          this.ctx.drawImage(
            this.backgroundImg,
            this.x,
            this.y,
            this.width,
            this.height
              );
        this.ctx.font='60px Raleway';
        this.ctx.fillStyle = "green";
        //this.ctx.fillText("GAME OVER", 125, 160);
        this.ctx.fillText( `SCORE: ${this.score}`, 410, 600);
        //this.ctx.fillText("Press SPACE to restart!", 70, 240);
        this.ctx.clearInterval();
  
        callGameOver();
    }
  }

  drawBackground() {
          this.backgroundImg.src = "img/field_background.jpg";
          this.ctx.drawImage(
            this.backgroundImg,
            this.x,
            this.y,
            this.width,
            this.height
              );
        
    console.log ("Background pintado")
  }

          
  checkLives() {
    for (let i = 0; i < this.ball.length; i++) {
      if (this.ball[i].x == 0) {
        this.ball.splice(i, 1);
        this.lives--;
      }
    }

  }

  collision(balls){
      let PeterRight =this.Peter.x +this.Peter.width;
      let PeterLeft = this.Peter.x;
      let PeterTop = this.Peter.y;
      let PeterBottom = this.Peter.y +this.Peter.height;

      let ballsRight = balls.x + balls.width;
      let ballsLeft = balls.x;
      let ballsTop =  balls.y;
      let ballsBottom =balls.y+ balls.height;
    
            let collisionLeft = (ballsLeft <= PeterRight) && (ballsLeft >= PeterLeft);
            let collisionRight = (ballsRight >= PeterLeft) && (ballsRight <= PeterRight);
            let collisionBottom = (ballsBottom >= PeterTop) && (ballsBottom <= PeterBottom);
            let collisionTop = (ballsTop <= PeterBottom) && (ballsTop >= PeterTop);

      if ( (collisionRight||collisionLeft) &&  (collisionTop || collisionBottom)) {  
          this.collisionche=true;
          this.score +=1;
          _.remove(this.ball, (ballEl)=>{
             return  ballEl.id===balls.id
          })
          console.log ("COLLISION FUNCTION");
           } 
    }


  

    clearInterval() {
      for (var i = 1; i < 99999; i++) {
        window.clearInterval(i);
      }
    }

    increaseDifficulty(object) {
      if (this.score >= 5 && this.score < 10) {
        this.difficulty = 3;
        object.dx = this.difficulty;
      } else if (this.score >= 10 && this.score < 20) {
        this.difficulty = 4;
        object.dx = this.difficulty;
      } else if (this.score >= 20) {
        this.difficulty = 5;
        object.dx = this.difficulty;
      }
    }
    clear() {
      this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }
}