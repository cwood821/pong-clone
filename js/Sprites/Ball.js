class Ball extends Sprite {

  draw() {
    this.__proto__.offCanvas.call(this);
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  offCanvas() {
    // Off right side
    if ( this.x + this.buffer > (this.ctx.canvas.width - this.buffer) ) {
      // callback for off canvas
      this.callbacks.offRight("right");
      this.reset();
    }

    // Off left side
    if ( (this.x + this.width - this.buffer ) < this.buffer ) {
      this.callbacks.offLeft("left");
      this.reset();
    }

    // Off top
    if ( this.y < 0 ) {
      this.callbacks.offTop();
      this.vy = -this.vy;
    }

    // Off bottom
    if ( (this.y + this.height) > this.ctx.canvas.height ) {
      this.callbacks.offBottom();
      this.vy = -this.vy;
    }
  }

  reset() {
    this.x = Math.floor(this.ctx.canvas.width / 2);
    this.y = Math.floor(this.ctx.canvas.height / 2);
    this.vx = -this.vx;
    this.vy = getRandomInt(-6, 6);
  }

}
