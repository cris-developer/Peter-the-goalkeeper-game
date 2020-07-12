class Game {
  constructor() {
    this.canvas = undefined;
    this.ctx = undefined;
    this.Peter = new Player(this,30,350, 100, 150);
    this.ball =  [];
    this.ball2 = [];
    this.ball3 = [];
    this.ball4 = [];
    this.backgroundImg = new Image();
    this.x = 0;
    this.y = 0;
    this.width = 1200;
    this.height = 800;
    this.score=0;
    this.lives=3;
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
      //this.drawSplashscreen();
      //this.ctx.clearInterval();
      
      for (let i = 0; i < this.ball.length; i++) {
        this.ball[i].move();
        this.ball[i].draw();
        this.Peter.collision(this.ball[i]);
        if (this.ball[i].y > 800) {
          this.ball.splice(i, 1);
        }
      }
      for (let i = 0; i < this.ball2.length; i++) {
        this.ball2[i].move();
        this.ball2[i].draw();
        this.Peter.collision(this.ball2[i]);
        if (this.ball2[i].y > 800) {
          this.ball2.splice(i, 1);
        }
      }
      for (let i = 0; i < this.ball3.length; i++) {
        this.ball3[i].move();
        this.ball3[i].draw();
        this.Peter.collision(this.ball3[i]);
        if (this.ball3[i].y > 800) {
          this.ball3.splice(i, 1);
        }
      }
      for (let i = 0; i < this.ball4.length; i++) {
        this.ball4[i].move();
        this.ball4[i].draw();
        this.Peter.collision(this.ball4[i]);
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
    this.ctx.fillText("SCORE: " + this.score, 410,30);
  }

  drawLives() {
    this.ctx.font='20px Raleway';
    this.ctx.fillStyle = "white";
    this.ctx.fillText("LIVES: " + this.lives, 615,30);
  }
  
  drawGameOver() {
    if (this.lives ==0) {
      this.ctx.clearRect(0, 0,canvas.width,canvas.height);
      this. ctx.font='25px Raleway';
      this.ctx.fillStyle = "black";
      this.ctx.fillText("GAME OVER", 125, 160);
      this.ctx.fillText( `SCORE: ${this.score}`, 210, 200);
      //this.ctx.fillText("Press SPACE to restart!", 70, 240);
      //this.ctx.clearInterval();
    }
  }
  
 /*
  checkGameOver() {
    if (this.lives == 0) {
      this.drawGameOver();
    }
  }
*/
  checkCollisions() {
    this.ball.forEach((ball) => {
      if (ball.collidesWith(this.Peter)) {
        this.score++;
        this.remove(ball);
      } else if (ball.collidesWith(this.width)) {
        this.lives--;
        this.remove(ball);
      }
      this.increaseDifficulty(ball);
      ball.update(this.ctx);
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
  
  


