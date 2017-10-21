function play(gameType) {

  // Audio for sound effects
  const impactNoise = document.querySelector("#impact");
  const scoreNoise = document.querySelector("#score");
  const buffer = 20;
  const ballVx = 10;
  const paddleHeight = 110;

  // Create the gameWorld and start the animation cycle
  const gameWorld = new GameWorld("#gameCanvas", window.innerWidth, window.innerHeight, "2d", []);
  gameWorld.startAnimation();

  // Create image objects to hold sprites
  let paddleImg = new Image();
  let ballImg = new Image();

  // Create the sprite for the ball
  const ballSprite = new Ball({
    x: Math.floor(gameWorld.getWidth() / 2),
    y: Math.floor(gameWorld.getHeight() / 2),
    vx: ballVx,
    vy: getRandomInt(-3, 3),
    width: 20,
    height: 20,
    img: ballImg,
    buffer: buffer,
    callbacks: {
      offLeft: ballOffScreen,
      offRight: ballOffScreen,
      offTop: ballOffScreen,
      offBottom: ballOffScreen
    }
  });

  // Handle image loading for sprite
  ballImg.onload = () => {
    ballSprite.setImg(ballImg);
  };

  ballImg.src = "assets/ball.png";

  // Create the ball actor for the gameworld
  const ball = new NonHumanActor({
    ctx: gameWorld.getCtx(),
    sprite: ballSprite
  });

  gameWorld.addActor(ball);


  // Create sprites for the paddle
  const paddle1 = new Paddle({
    ctx: gameWorld.getCtx(),
    x: 20,
    y: Math.floor(gameWorld.getHeight() / 2) - 60,
    vx: 0,
    vy: 0,
    width: 15,
    height: paddleHeight,
    img: paddleImg,
    buffer: buffer
  });

  const paddle2 = new Paddle({
    ctx: gameWorld.getCtx(),
    x: gameWorld.getWidth() - 30,
    y: Math.floor(gameWorld.getHeight() / 2) - 60,
    vx: 0,
    vy: 0,
    width: 15,
    height: paddleHeight,
    img: paddleImg,
    buffer: buffer
  });

  // Handle image loading for paddle sprites
  paddleImg.onload = () => {
    paddle1.setImg(paddleImg);
    paddle2.setImg(paddleImg);
  };

  paddleImg.src = "assets/paddle.png";


  //Create both player actors
  const player1 = ActorFactory.build(gameType, 1, {
    sprite: paddle1,
    ctx: gameWorld.getCtx(),
    ball: ball
  });

  const player2 = ActorFactory.build(gameType, 2, {
    sprite: paddle2,
    ctx: gameWorld.getCtx(),
    ball: ball
  });

  gameWorld.addActor(player1);
  gameWorld.addActor(player2);


  // Create Score labels for both players score
  const p1ScoreText = new Label({
    ctx: gameWorld.getCtx(),
    x: Math.floor(gameWorld.getWidth() / 2) - 76,
    y: 50,
    textContent: 0
  });

  const p2ScoreText = new Label({
    ctx: gameWorld.getCtx(),
    x: Math.floor(gameWorld.getWidth() / 2) + 56,
    y: 50,
    textContent: 0
  });

  gameWorld.addLabel(p1ScoreText);
  gameWorld.addLabel(p2ScoreText);

  // Handle scoring
  function ballOffScreen(direction) {
    direction == "left" && player2.incrementScore(1);
    direction == "right" && player1.incrementScore(1);
    (direction == "left" || direction == "right") ? playScoreNoise() : playImpactNoise();
    renderScore();
  }

  function renderScore() {
    p2ScoreText.setTextContent(player2.getScore());
    p1ScoreText.setTextContent(player1.getScore());
    // end the game if someone is greater than 10
    player2.getScore() >= 10 && endGame(player2);
    player1.getScore() >= 10 && endGame(player1);
  }


  function endGame(winnerPlayer) {
    gameWorld.stopAnimation();
    document.querySelector(".overlay-message").innerHTML = `
      ${winnerPlayer.getName()} wins!
    `;
    document.querySelector(".overlay").classList.add("show-overlay");
    ball.sprite.setVx(0);
    ball.sprite.setVy(0);
    player1.score = 0;
    player2.score = 0;
    gameWorld.stopAnimation();
    return;
  }

  // Play sounds effects
  function playImpactNoise() {
    impactNoise.currentTime = 0;
    impactNoise.play();
  }

  function playScoreNoise() {
    scoreNoise.currentTime = 0;
    scoreNoise.play();
  }

}
