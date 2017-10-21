class ActorFactory {

  static build(gameType, playerNum, options) {
    if (gameType == "local-multiplayer") {
      if (playerNum == 1) {
        return new HumanActor({
          name: "Player 1",
          ctx: options.ctx,
          score: 0,
          controller: new KeyboardController("wasd"),
          sprite: options.sprite
        });
      } else {
        return new HumanActor({
          name: "Player 1",
          ctx: options.ctx,
          score: 0,
          controller: new KeyboardController("arrows"),
          sprite: options.sprite
        });
      }
    }

    if (gameType == "ai") {

      if (playerNum == 1) {
        return new HumanActor({
          name: "Player 1",
          ctx: options.ctx,
          score: 0,
          controller: new KeyboardController("wasd"),
          sprite: options.sprite
        });
      } else {
        return new AIActor({
          name: "Player 2",
          ctx: options.ctx,
          ball: options.ball,
          score: 0,
          sprite: options.sprite
        });
      }
    }


  }
}
