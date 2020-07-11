class Ball3 extends Component {
    constructor(game) {
      super(game);
      this.x = 1200;
      this.y = 350;
      this.width = 40;
      this.height = 40;
      this.img = new Image();
    }
    draw() {
      this.img.src = "img/ball.jpg";
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      console.log("This is ball3")
    }
    move() {
      if (Math.floor(Math.random() * 20) % 3 === 0) {
        this.x += -40;
      }
    }
  }
  