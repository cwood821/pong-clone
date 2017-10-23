/*
  The TouchController class has not been implemented yet.
  It currently duplicates the KeyboardController
*/

class TouchController {

  constructor(type) {
    this.keysDown = {};
    this.type = type;

    // arrays to represent allowable keys
    this.arrowKeys = [38, 40];
    this.wasdKeys = [83, 87];

    // Handle keypresses
    window.addEventListener("keydown", (event) => {
        this.keysDown[event.keyCode] = true;
    });

    window.addEventListener("keyup", (event) => {
       delete this.keysDown[event.keyCode];
    });

  }

  onKeyDown(event) {
    if (this.type == "arrows" && this.arrowKeys.includes(event.keyCode)) {
      this.keysDown[event.keyCode] = true;
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
