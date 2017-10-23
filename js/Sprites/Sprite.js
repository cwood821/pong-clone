/*

  Sprite Class
  ---------------------------------------------------------
  Takes a arguments object, with the following requirements:
  {
    ctx: the context of a canvas or CanvasWrapper
    x: starting X position
    y: starting Y position
    vx: starting x-axis velocity
    vy: starting y-axis velocity
    width: width
    height: height
    img: image object for sprite
  }

*/

class Sprite {

  constructor(args) {
    // Destructure the args object onto the instance
    Object.assign(this, args);
    this.buffer = this.buffer || 0;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  setCtx(newCtx) {
    this.ctx = newCtx;
  }

  setImg(img) {
    this.img = img;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  setX(newX) {
    this.x = newX;
  }

  setY(newY) {
    this.y = newY;
  }

  changeVelocityX(newVel) {
    this.vx = this.vx + newVel;
  }

  changeVelocityY(newVel) {
    this.vy = this.vy - newVel;
  }

  getVx() {
    return this.vx;
  }

  getVy() {
    return this.vy;
  }

  setVx(newVx) {
    this.vx = newVx;
  }

  setVy(newVy) {
    this.vy = newVy;
  }

  update () {
    this.y += this.vy;
    this.x += this.vx;
  }


}
