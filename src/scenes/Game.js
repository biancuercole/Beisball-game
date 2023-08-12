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
    .setVelocity(200, -300);

    this.bat = this.physics.add.sprite(400, 400, "platform", {immovable: true}).setScale(0.26)
    .setCollideWorldBounds(true);
    this.bat.body.allowGravity = false;

    this.physics.add.collider(this.bat, this.ball, () => {
      this.bat.body.setGravityY(0);
     });
  
  }

  update() {

  }
}
