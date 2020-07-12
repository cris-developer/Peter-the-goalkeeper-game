class Ball2 extends Component {
    constructor(game) {
      super(game);
      this.x = 1200;
      this.y = 300;
      this.width = 30;
      this.height = 30;
      this.img = new Image();
    }
    draw() {
      this.img.src = "img/ball.jpg";
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      console.log("This is ball2")
    }
    move() {
      if (Math.floor(Math.random() * 20)) {
        this.x += -1.;
      }
    }
  }
  

  