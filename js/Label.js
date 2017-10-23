class Label {

  constructor(args) {
    // Destructure the paramter object onto the instance
    Object.assign(this, args);
  }

  draw() {
    this.ctx.font = '36px sans-serif';
    this.ctx.fillStyle = "#ffffff";  //<======= and here
    this.ctx.fillText(`${this.textContent}`, this.x, this.y);
  }

  setCtx(newCtx) {
    // Also consider replacing this with a super call (or just removing in favor of)
    this.ctx = newCtx;
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

  setTextContent(newText) {
    this.textContent = newText;
  }

  update() {
    this.ctx.fillText("10", 50, 50);
  }

}
