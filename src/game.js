class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.Peter = new Player(this,30,350, 100, 150);
    this.ball =  [];
    this.ball2 = [];
    this.ball3 = [];
    this.ball4 = [];
    this.balls = [];
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
    this.looserSound =new Audio ("sound/Crowd Disappointed.mp3");
    
  }

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.start();
    this.createBall();
    this.createBall2();
    this.createBall3();
    this.createBall4();
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
      this.gameOver();
      this.backgroundSound.play();
      this.backgroundSound.volume=0.1;
      //this.checkCollisionPeterBall();
      //this.ctx.clearInterval();
      
      for (let i = 0; i < this.ball.length; i++) {
        this.ball[i].move();
        this.ball[i].draw();
        this.collision(this.ball[i]);
        if (this.collisioncheck) {
          this.ball.splice(i,1);
        }
        // if (this.ball[i].x > 800) {
        //   this.ball.splice(i, 1);
        }
      
        if (this.lifes <= 0) {
          this.gameOver();
          clearInterval(setInterval1);
        }



      for (let i = 0; i < this.ball2.length; i++) {
        this.ball2[i].move();
        this.ball2[i].draw();
        this.collision(this.ball2[i]);
        if (this.ball2[i].y > 800) {
          this.ball2.splice(i, 1);
        }
      }
      for (let i = 0; i < this.ball3.length; i++) {
        this.ball3[i].move();
        this.ball3[i].draw();
        this.collision(this.ball3[i]);
        if (this.ball3[i].y > 800) {
          this.ball3.splice(i, 1);
        }
      }
      for (let i = 0; i < this.ball4.length; i++) {
        this.ball4[i].move();
        this.ball4[i].draw();
        this.collision(this.ball4[i]);
        if (this.ball4[i].y > 800) {
          this.ball4.splice(i, 1);
        }
      }
    }, 1000 / 60);
  }

  createBall() {
      if (Math.floor(Math.random() * 10) % 2 === 0) {
        this.ball.push(new Ball(this));
      }
      setTimeout(() => {
        this.createBall();
      }, 3000);
  }

  createBall2() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.ball2.push(new Ball2(this));
    }
    setTimeout(() => {
      this.createBall2();
    }, 5000);
  }

  createBall3() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.ball3.push(new Ball3(this));
    }
    setTimeout(() => {
      this.createBall3();
    }, 7000);
  }

  createBall4() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      this.ball4.push(new Ball4(this));
    }
    setTimeout(() => {
      this.createBall4;
    }, 9000);
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
      this.ctx.font='60px Raleway';
      this.ctx.fillStyle = "green";
      this.ctx.fillText("GAME    OVER   ", 125, 160);
      this.ctx.fillText( `SCORE: ${this.score}`, 210, 200);
      this.ctx.fillText("Press SPACE to restart!", 70, 240);
      this.ctx.clearInterval();
    }
  }
  
  gameOver() {
    if (this.lifes <= 0) {
      // this.gameOverImg.src = "images/gameover.png";
      // this.ctx.drawImage(
      //   this.gameOverImg,
      //   200,
      //   200,
      //   300,
      //   300
      // );
      // this.ctx.clear();
      // this.ctx.stop();
      // this.ctx.clearInterval(canvas);
      // this.backgroundMusic.pause();
      this.looserSound.volume = 0.2;
      this.looserSound.play();
      this.backgroundMusic.pause();
      callGameOver();
    }
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
          
          console.log ("COLLISION");
      } 
    }
  
      checkCollisionPeterBall() {
        for (let i = 0; i < this.ball.length; i++) {
          if (this.collision(this.ball,this.Peter)){
              this.score ++;
              this.catchBallSound.play();
              this.backgroundSound.volume=0.2;
              return this.ball.splice(i, 1);
              //console.log ("CHECK COLLISION BALL")
          }
        }
      }

      checkCollisionPeterBall() {
        for (let i = 0; i < this.ball2.length; i++) {
          if (this.collision(this.ball2,this.Peter)){
              this.score ++;
              this.catchBallSound.play();
              this.backgroundSound.volume=0.2;
              return this.ball2.splice(i, 1);
              alert("crash");
              window.location.reload();
          }
        }
      }


      checkCollisionPeterBall() {
        for (let i = 0; i < this.ball3.length; i++) {
          if (this.collision(this.ball3,this.Peter)){
              this.score ++;
              this.catchBallSound.play();
              this.backgroundSound.volume=0.2;
              return this.ball3.splice(i, 1);
              alert("crash");
              window.location.reload();
          }
        }
      }

      checkCollisionPeterBall() {
        for (let i = 0; i < this.ball4.length; i++) {
          if (this.collision(this.ball4,this.Peter)){
              this.score ++;
              this.catchBallSound.play();
              this.backgroundSound.volume=0.2;
              return this.ball4.splice(i, 1);
        
          }
        }
      }

  
    checkCollisions() {
      this.balls.forEach((balls) => {
        if (balls.collision(this.Peter)) {
          this.score++;
          this.remove(balls);
        } else if (balls.collision(this.width)) {
          this.lives--;
          this.remove(balls);
        }
        this.increaseDifficulty(balls);
        balls.update(this.ctx);
      });
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