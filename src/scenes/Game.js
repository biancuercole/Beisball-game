export default class Game extends Phaser.Scene {
  constructor() {

    super("game");
  }

  init() {
    this.score = 0;
    this.level = 1;
  }

  create() {
    //pelota
    this.ballSpeed = 150;
    this.batSpeed = 130;
    this.ball = this.physics.add.sprite(400, 300, "ball").setScale(0.20)
    .setCollideWorldBounds(true)
    .setCircle(139)
    .setBounce(1, 1)
    .setVelocity(this.ballSpeed, -this.ballSpeed)
    .refreshBody();
    //pala
    this.bat = this.physics.add.sprite(600, 400, "platform").setScale(0.26)
    .setCollideWorldBounds(true)
    .setVelocity(this.batSpeed, -this.batSpeed)
    .setBounce(1, 1);
    //obstaculos
    this.obstacle = this.physics.add.staticGroup();
    //fisicas
    this.physics.add.collider(this.ball, this.bat, this.points, null, this);
    this.physics.add.collider(this.ball, this.obstacle);
    this.physics.add.collider(this.bat, this.obstacle);
    //cursor
    this.cursors = this.input.keyboard.createCursorKeys();
    //color de fondo
      const randomColor = Phaser.Display.Color.RandomRGB();
      this.cameras.main.setBackgroundColor(randomColor);
    //texto
    this.scoreText = this.add.text(10, 7, "Score: " + this.score, {
      fontFamily: "Verdana",
    });
    this.levelText = this.add.text(700, 7, "Level: " + this.level, {
      fontFamily: "Verdana",
    });
  }

  update() {
    //mouse
    if(this.cursors.left.isDown) {
      this.bat.setVelocityX(-this.batSpeed)
    } else if (this.cursors.right.isDown) {
      this.bat.setVelocityX(this.batSpeed)
    } else {
      this.bat.setVelocityX(0)
      this.bat.body.allowGravity = false;
    }
    if(this.cursors.up.isDown) {
      this.bat.setVelocityY(-this.batSpeed)
    } else if (this.cursors.down.isDown) {
      this.bat.setVelocityY(this.batSpeed)
    } else {
      this.bat.setVelocityY(0)
      this.bat.body.allowGravity = false;
    }    

    if (this.score == 10) {
      this.newLevel();
    }

    if (this.ball.y >= 550) {
      this.defeat();
    }
  }

  points (ball, bat) {
    this.score += 1;
    //texto
    this.scoreText.setText("Score: " + this.score, {
      fontFamily:"Verdana",
    });
    if (ball.body.velocity.x > 0) {
      this.ball.body.setVelocity(this.ballSpeed, -this.ballSpeed);
    } else {
      this.ball.body.setVelocity(-this.ballSpeed, -this.ballSpeed);
    }    
  }

  newLevel () {
    //contadores
    this.level += 1;
    this.score = 0;
    //texto
    this.scoreText.setText("Score: " + this.score, {
      fontFamily: "Verdana",
    });
    this.levelText.setText("Level: " + this.level, {
      fontFamily: "Verdana",
    });
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
      this.ball.body.setVelocity(this.ballSpeed, -this.ballSpeed);
    } else {
      this.ball.body.setVelocity(-this.ballSpeed, -this.ballSpeed);
    }  
    this.batSpeed = this.batSpeed * 1.1;
    this.bat.body.setVelocity(this.batSpeed, -this.batSpeed);

    if (this.level == 20) {
      this.victory();
    }
  }   

  victory() {
    console.log("victory");
    this.victoryText = this.add.text(260, 220, "  ¡GANASTE!\nFelicitaciones :)",{
      fontSize: "40px",
      fill: "#FFFFFF",
      fontFamily: "verdana",
    });
    this.bat.disableBody(true, true);
  }

  defeat() {
    console.log("defeat");
    this.defeatText = this.add.text(190, 230, "           Perdiste :( \n apretá F5 para reintentar", {
      fontSize: "35px",
      fill: "#FFFFFF",
      fontFamily: "verdana",
    });
    this.bat.disableBody(true, true);
  }
}
