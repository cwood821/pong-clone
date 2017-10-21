class Actor {

  update() {
    this.sprite.update();
    this.sprite.draw();
  }

  setCtx(ctx) {
    this.ctx = ctx;
    // pass the ctx down to the sprite
    this.sprite.setCtx(ctx);
  }

  getScore() {
    return this.score;
  }

  incrementScore(num) {
    this.score += num;
  }

  decrementScore(num) {
    this.score -= num;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    return this.name = name;
  }

}
