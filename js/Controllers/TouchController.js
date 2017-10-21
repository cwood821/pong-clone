class TouchController {

  constructor(type) {
    this.type = type;

    // Handle keypresses
    window.addEventListener("touchstart", (event) => {
        console.log(event);
    });

  }

  onKeyDown(event) {
    if ( event.touches && event.touches[0].clientX ) {
      return true;
    }

    if (this.type == "wasd" && this.wasdKeys.includes(event.keyCode)) {
      this.keysDown[event.keyCode] = true;
    }

    // otherwise, get outta here
    return;
  }

  onKeyUp(event) {
    if (this.type == "arrows" && this.arrowKeys.includes(event.keyCode)) {
      delete this.keysDown[event.keyCode];
    }

    if (this.type == "wasd" && this.wasdKeys.includes(event.keyCode)) {
      delete this.keysDown[event.keyCode];
    }

    // otherwise, ignore it
    return;
  }

  getType() {
    return this.type;
  }

  getKeysDown() {
    return this.keysDown;
  }

  isEngaged() {
    return Object.getOwnPropertyNames(this.keysDown).length > 0;
  }

  moveDown() {
    if (this.type == "arrows" && this.getKeysDown()[40]) {
      return true;
    }
    if (this.type == "wasd" && this.getKeysDown()[83]) {
      return true;
    }
    return false;
  }

  moveUp() {
    if (this.type == "arrows" && this.getKeysDown()[38]) {
      return true;
    }
    if (this.type == "wasd" && this.getKeysDown()[87]) {
      return true;
    }
    return false;
  }

}
