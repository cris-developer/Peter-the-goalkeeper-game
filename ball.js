class Ball extends Component {
    constructor(game) {
      super(game);
      this.x = 1200;
      this.y = 200;
      this.width = 30;
      this.height = 30;
      //this.dx= -0.01;
      this.img = new Image();
      //this.sound=
    }
    draw() {
      this.img.src = "img/ball.jpg";
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      console.log("This is ball")
    }
    move() {
      if (Math.floor(Math.random() * 20)); {
        this.x += -2;
      }
    }
  }
  