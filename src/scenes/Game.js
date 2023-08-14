export default class Game extends Phaser.Scene {
  constructor() {

    super("game");
  }

  init() {
    this.score = 0;
    this.level = 1;
  }

  create() {
    console.log("this.level");

    this.ballSpeed = 150;
    this.batSpeed = 100;
    this.ball = this.physics.add.sprite(400, 300, "ball").setScale(0.20)
    .setCollideWorldBounds(true)
    .setCircle(139)
    .setBounce(1, 1)
    .setVelocity(this.ballSpeed, -this.ballSpeed)
    .refreshBody();

    this.bat = this.physics.add.sprite(600, 400, "platform").setScale(0.26)
    .setCollideWorldBounds(true)
    .setVelocity(this.batSpeed, -this.batSpeed)
    .setBounce(1, 1);

    this.obstacle = this.physics.add.staticGroup();

    this.physics.add.collider(this.ball, this.bat, this.points, null, this);
    this.physics.add.collider(this.ball, this.obstacle);
    this.physics.add.collider(this.bat, this.obstacle);

    this.cursors = this.input.keyboard.createCursorKeys();

    //color de fondo
      const randomColor = Phaser.Display.Color.RandomRGB();
      this.cameras.main.setBackgroundColor(randomColor);
    
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

    if (this.score == 1) {
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
    //contadores
    this.level += 1;
    this.score = 0;

    console.log(this.score);
    console.log(this.level);
    //fondos
    const randomColor = Phaser.Display.Color.RandomRGB();
    this.cameras.main.setBackgroundColorrandomColor;
    //obstaculo
    this.obstacleX = Phaser.Math.FloatBetween( 20, 750);
    this.obstacleY = Phaser.Math.FloatBetween( 20, 550);
    const randomScale = Phaser.Math.FloatBetween(0.05, 0.15)
    this.obstacle.create(this.obstacleX, this.obstacleY, "obstacle")
    .setScale(randomScale)
    .refreshBody();
    //velocidad pelota
    this.ballSpeed = this.ballSpeed * 1.1;
    if (this.ball.body.velocity.x > 0) {
      this.ball.body.setVelocityX(this.ballSpeed);
    } else {
      this.ball.body.setVelocityX(-this.ballSpeed);
    }  
    console.log(this.ballSpeed);
  }   
}
