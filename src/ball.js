class Ball extends Component {
    constructor(game,y) {
      super(game);
      this.id = _.uniqueId('ball');
      this.x= 1200;
      this.y = y;
      this.width = 30;
      this.height = 30;
      //this.dx= -2;
      this.img = new Image();
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
  