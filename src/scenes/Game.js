export default class Game extends Phaser.Scene {
  constructor() {

    super("game");
  }

  init() {

  }

  create() {
    console.log("hola");

    this.ball = this.physics.add.sprite(400, 300, "ball").setScale(0.20)
    .setCollideWorldBounds(true)
    .setCircle(139)
    .setBounce(1, 1)
    .setVelocity(100, -200);

    this.bat = this.physics.add.sprite(600, 400, "platform").setScale(0.26)
    .setCollideWorldBounds(true);

    this.physics.add.collider(this.bat, this.ball);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if(this.cursors.left.isDown) {
      this.bat.setVelocityX(-100)
    } else if (this.cursors.right.isDown) {
      this.bat.setVelocityX(100)
    } else {
      this.bat.setVelocityX(0)
    }
    if(this.cursors.up.isDown) {
      this.bat.setVelocityY(-100)
    } else if (this.cursors.down.isDown) {
      this.bat.setVelocityY(100)
    } else {
      this.bat.setVelocityY(0)
    }
  }
}
