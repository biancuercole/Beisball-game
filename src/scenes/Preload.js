export default class Preload extends Phaser.Scene {
    constructor() {
  
      super("preload");
    }
  
    preload() {
        this.load.image("ball", "./public/images/ball.png");
        this.load.image("platform", "./public/images/bat.png");
        this.load.image("obstacle", "./public/images/obstacle.png");
    }

    create() {
      this.scene.start("game");
    }
  }
  