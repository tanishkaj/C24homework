var paper, paperObject, dustbinIMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinIMG=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);

	var x = 10;

	side1Sprite=createSprite(width/2+500, height-50, 200, 20);
	side1Sprite.shapeColor=color("black");

	side2Sprite=createSprite((width/2)+400, height-170, 20, 260);
	side2Sprite.shapeColor=color("black");

	side3Sprite=createSprite((width/2)+600, height-170, 20, 260);
	side3Sprite.shapeColor=color("black");

	trashSprite=createSprite(width/2+500, height-170,200, 20);
	trashSprite.addImage(dustbinIMG);
	trashSprite.scale=0.75;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	// create paper object here
	paper = new Paper();
	World.add(world, paper.paperObject);

	ground = new Ground();
 	World.add(world, ground.groundObject);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.draw();
  ground.draw();

  drawSprites();
 // keyPressed();

}

function keyPressed() {

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.paperObject, paper.paperObject.position, {x:2,y:-5});
	}

}


