class Player extends Component {
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
  }
  move() {
    document.onkeydown = (event) => {
      const key = event.keyCode;
      const possibleKeysStrokes = [37, 38, 39, 40];
      if (possibleKeysStrokes.includes(key)) {
        switch (key) {
          case 37:
            if (this.x >= 10) this.x -= 20;
            break;
          case 38:
            if (this.y >= 10) this.y -= 20;
            break;
          case 39:
            if (this.x <= 490 - this.width) this.x += 20;
            break;
          case 40:
            if (this.y <= 690 - this.height) this.y += 20;
            break;
        }
      }
    };
  }
  /*
  collision(obstacle) {

    if (this.x < obstacle.x +obstacle.width &&
          this.x + this.width> obstacle.x &&
          this.y <= obstacle.y + obstacle.heigth &&
          this.y + this.height >= obstacle.y)  {
            setTimeout(() => {
              alert("What a safe Peter!");
            }, 5);
            window.location.reload();
          }
    }
  }

  */

  /*

 collision(element) {
  //y axis
  if (this.y + 10 <= element.y + element.height && this.y >= element.y) {
    //x axis
    //if (this.x >= element.x && this.x <= element.x + element.width) {
       setTimeout(() => {
         alert("crash");
       }, 5);
      window.location.reload();

      /*
      let PeterRight =this.x +this.obstacles.width;
      let PeterLeft = this.Peter.x;
      let PeterUp = this.Peter.y;
      let PeterDown = this.Peter.y +this.Peter.height;

      let ballsRight = this.balls.x + this.balls.width;
      let ballsLeft = this.balls.x;
      let ballsUp = this.balls.y;
      let ballsBottom =this.balls.y +this.balls.height;

      let colllisionCenter = ballsLeft <= PeterRight && ballsRight >= PeterLeft;//
      this.balls.x <= this.Peter.x +this.Peter.width && this.balls.x + this.balls.width >= this.Peter.x
      let colllisionTop    = ballsBottom > PeterUp; // this.balls.y +this.balls.height > this.Peter.y
      let colllisionBottom = ballsBottom < PeterDown; // this.balls.y +this.balls.height <  this.Peter.y +this.Peter.height
      //let collisionCorners = ballsBottom > PeterUp && ballsRight > PeterLeft && ballsLeft < PeterRight && ballsBottom > PeterUp
    
      if (colllisionCenter || collisionTop || collisionRight || collisionLeft){
        collision = true;

  }
    return true
  }
/*
/*
  collision(element){
    let PeterRight =this.x +this.x.width;
    let PeterLeft = this.x;
    let PeterUp = this.y;
    let PeterDown = this.y +this.y.height;

    let ballsRight = this.element.x +this.element.width;
    let ballsLeft = this.element.x;
    let ballsUp = this.element.y;
    let ballsBottom =this.element.y +this.element.height;

    let colllisionCenter = ballsLeft <= PeterRight && ballsRight >= PeterLeft;
    let colllisionTop    = ballsBottom > PeterUp;
    let colllisionBottom = ballsBottom < PeterDown;
    let collisionBorders = ballsBottom > PeterUp && ballsRight > PeterLeft && ballsLeft < PeterRight && ballsBottom > PeterUp

    if (colllisionCenter || collisionTop || collisionRight || collisionLeft){
      collision = true;
      setTimeout(() => {
        alert("crash");
      }, 5);
      window.location.reload();

    }
    return false;
*/

}

  



