class HumanActor extends Actor {

  constructor(args) {
    super(args);
    Object.assign(this, args);
  }

  update() {
    if (! this.controller.isEngaged()) {
      this.sprite.setVy(0);
    }

    if (this.controller.moveUp()) {
      this.sprite.changeVelocityY(1);
    }

    if (this.controller.moveDown()) {
      this.sprite.changeVelocityY(-1);
    }

    this.sprite.update();
    this.sprite.draw();
  }

}
