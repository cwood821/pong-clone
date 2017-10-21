class NonHumanActor extends Actor {

  constructor(args) {
    super(args);
    Object.assign(this, args);
  }

  update() {
    this.sprite.update();
    this.sprite.draw();
  }

}
