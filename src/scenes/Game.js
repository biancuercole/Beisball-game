export default class Game extends Phaser.Scene {
  constructor() {

    super("game");
  }

  init() {
    this.score = 0;
  }

  create() {
    console.log("prueba");

    this.ball = this.physics.add.sprite(400, 300, "ball").setScale(0.20)
    .setCollideWorldBounds(true)
    .setCircle(139)
    .setBounce(1, 1)
    .setVelocity(100, -200);

    this.bat = this.physics.add.sprite(600, 400, "platform").setScale(0.26)
    .setCollideWorldBounds(true)
    .setBounce(1, 1);

    this.physics.add.collider(this.ball, this.bat, this.points, null, this);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  nextLevel() {
  console.log("nivel");
  }

  update() {
    //mouse
    if(this.cursors.left.isDown) {
      this.bat.setVelocityX(-100)
    } else if (this.cursors.right.isDown) {
      this.bat.setVelocityX(100)
    } else {
      this.bat.setVelocityX(0)
      this.bat.body.allowGravity = false;
    }
    if(this.cursors.up.isDown) {
      this.bat.setVelocityY(-100)
    } else if (this.cursors.down.isDown) {
      this.bat.setVelocityY(100)
    } else {
      this.bat.setVelocityY(0)
      this.bat.body.allowGravity = false;
    }    

    if (this.score == 10) {
      this.newLevel();
    }
  }

  points (ball, bat) {
    this.score += 1;
    console.log(this.score);
    if (ball.body.velocity.x > 0) {
      ball.setVelocity(100, -200);
    } else {
      ball.setVelocity(-100, -200);
    }    
  }

  newLevel () {
    this.score = 0;
    console.log(this.score);
  }
}
