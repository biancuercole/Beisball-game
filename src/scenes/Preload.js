export default class Preload extends Phaser.Scene {
    constructor() {
  
      super("preload");
    }
  
    preload() {
        this.load.image("ball", "./public/images/ball.png");
        this.load.image("platform", "./public/images/bat.png");
    }

    create() {
      this.scene.start("game");
    }
  }
  