var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
//w

var plinkos = [];
var divisions = [];
var score = 0;
var particle = null;
var turn = 0;
var gameState = "play";

var divisionHeight = 300;
var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);
  l = new Line(width / 2, height / 2 + 100, width, 10);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }




}



function draw() {
  background("black");
  textSize(20);
  text("Score : " + score, 20, 30);
  Engine.update(engine);
  l.display();

  if (particle != null) {

    particle.display();


    if (particle.body.position.y > 760) {

      if (particle.body.position.x > 0 && particle.body.position.x <= 300) {
        score = score + 500;
        particle = null;


      }

      else if (particle.body.position.x > 300 && particle.body.position.x <= 600) {
        score = score + 100;
        particle = null;


      }

      else if (particle.body.position.x > 600 && particle.body.position.x <= 900) {
        score = score + 200;
        particle = null;


      }


    }

  }


  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }


  //for (var j = 0; j < particles.length; j++) {

  //   
  // }
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
}

function mousePressed() {
  if (turn >= 5) {
    gameState = "end";

  }

  if (gameState != "end") {
    particle = new Particle(mouseX, 10, 10);
    turn++;


  }

  //else if (gameState === "end" ){
  //}

}