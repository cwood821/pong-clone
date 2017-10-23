// Depending on options, return the appropriate Controller
// e.g. on touch devices, return a touch controller, etc

/*
  Required options object properties
  - isTouch: boolean
  - playerNum: integer
*/

class ControllerBuilder {
  static build(options) {
    if (options.isTouch) {
      const touchScreenPortion = options.playerNum == 1 ? "left" : "right";
      return new TouchController(touchScreenPortion);
    } else {
      const keyboardSetup = options.playerNum == 1 ? "arrows" : "wasd";
      return new KeyboardController(keyboardSetup);
    }
  }

}
