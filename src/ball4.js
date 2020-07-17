class Ball4 extends Component {
    constructor(game) {
      super(game);
      this.x = 1200;
      this.y = 520;
      this.width = 30;
      this.height = 30;
      this.img = new Image();
      this.dx= -1.8;
  
    }
    draw() {
      this.img.src = "img/ball.jpg";
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      console.log("This is ball4")
    }
    move() {
      if (Math.floor(Math.random() * 20)) {
        this.x += -1.8;
      }
    }
  }
  