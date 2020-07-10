class Obstacle extends Component {
    constructor(game) {
      super(game);
      this.x = 1200;
      this.y = 150;
      this.width = 100;
      this.height = 100;
      this.img = new Image();
    }
    draw() {
      this.img.src = "img/ball.jpg";
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    move() {
      if (Math.floor(Math.random() * 20) % 3 === 0) {
        this.x += -20;
      }
    }
  }
  