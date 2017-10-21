// depending on options, the appropriate ControllerBuilder
// e.g. on touch devices, return a touch controller, etc

class ControllerBuilder {

  /*
    Required options object properties
    - isTouch: boolean
    - playerNum: integer
  */
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
