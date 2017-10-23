class Paddle extends Sprite {

  constructor(args) {
    super();
    Object.assign(this, args);
  }

  draw() {
    this.offCanvas();
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  offCanvas() {
    // Off top
    if ( this.y < 0 ) {
      this.y = 0;
      this.vy = 0;
    }

    // Off bottom
    if ( (this.y + this.height) > this.ctx.canvas.height ) {
      this.y = this.ctx.canvas.height - this.height;
    }
  }

  update () {
    this.vx = 0;
    this.y += this.vy;
  }


}
