# Pong Clone!

## Play Pong Clone
[Play Pong Clone](http://christianwood.net/labs/pong/)

For an AI game, use the WASD keys for movement.
In local multiplayer, Player 1 uses the WASD keys, Player 2 the arrow keys.

## Architecture
This diagram illustrates the basic relationships between game classes. Not all class data are represented here.

![Screenshot of Diagram](https://raw.githubusercontent.com/cwood821/pong-clone/master/assets/model-v4.png)

In essence, the GameWorld is composed of Actors. Actors have sprite representations in the world. On each animation frame, the GameWorld class calls the update functionality of each Actor added to the world and handles collisions between actors.


## Credit
The live game uses sounds from [Free Sound](http://freesound.org/) under Creative Commons licensing:
- [Kick 2 by mickmon](http://freesound.org/people/mickmon/sounds/176833/)
- [Coins 1 by ProjectsU012](http://freesound.org/people/ProjectsU012/sounds/341695/)
Although referenced, these are not included in the repository.

The background space image is from [Kyle Devaras](https://unsplash.com/@kyledevaras) via Unsplash. 
