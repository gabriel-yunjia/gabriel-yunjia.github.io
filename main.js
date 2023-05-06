// Create the Phaser game configuration
const config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 600,
  scene: [Scene1, Scene2, Scene3, Scene4, Scene5],
};

// Create the Phaser game instance
const game = new Phaser.Game(config);
