class AIActor extends Actor {

  constructor(args) {
    super(args);
    Object.assign(this, args);
  }

  update() {
    let diff = getRandomInt(0, 10);
    let ball = this.ball.sprite;
    let spriteCenter = this.sprite.y + this.sprite.height / 2;

    if (spriteCenter < ball.getY() + diff ) {
      this.sprite.changeVelocityY(-1);
    } else if (spriteCenter > ball.getY() + diff ) {
      this.sprite.changeVelocityY(1);
    } else {
      this.sprite.setVy(0);
    }

    this.sprite.update();
    this.sprite.draw();
  }

}
