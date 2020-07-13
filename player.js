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

