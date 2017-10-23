class GameWorld {

  constructor(domTarget, width, height, ctx, animatables) {
    // Basic properties
    this.canvas =  document.querySelector(domTarget);
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext(ctx);

    // Game objects
    this.labels = [];
    this.actors = [];

    window.addEventListener("resize", this.onResize.bind(this));
  }

  getCtx() {
    return this.ctx;
  }

  getCanvas() {
    return this.canvas;
  }

  getWidth() {
    return this.canvas.width;
  }

  getHeight() {
    return this.canvas.height;
  }

  addLabel(label) {
    label.setCtx(this.ctx);
    return this.labels.push(label);
  }

  addActor(actor) {
    actor.setCtx(this.ctx);
    return this.actors.push(actor);
  }

  draw() {
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // Draw all the labels
    this.labels.forEach(function(label) {
      label.draw();
    });
    // Draw all the actors
    this.actors.forEach(function(actor) {
      actor.update();
    });
    // Handle collisions
    this.checkCollisions();
  }

  // Loop over all the actors on the game canvas and check for overlap
  checkCollisions() {
    for (let i = 0; i < this.actors.length; i++) {
      let curSprite = this.actors[i].sprite;
      for (let j = i + 1; j < this.actors.length; j++ ) {
        if (overlap(curSprite, this.actors[j].sprite)) {
          this.onCollision(curSprite, this.actors[j].sprite);
        }
      }
    }
  }

  onCollision(obj1, obj2) {
    // Reverse the Vx
    obj1.setVx( -obj1.getVx() );
    obj2.setVx( -obj2.getVx() );
    // Calculate Vy
    obj1.setVy(obj1.getVy() + (obj2.getVy() / 2));
    this.playAudio("#impact");
  }

  startAnimation() {
    this.draw();
    this.animation = requestAnimationFrame(this.startAnimation.bind(this));
  }

  playAudio(selector) {
    const audio = document.querySelector(selector);
    audio.currentTime = 0;
    audio.play();
  }

  // on resize, rescale the canvas
  onResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  stopAnimation() {
    cancelAnimationFrame(this.animation);
  }

}
