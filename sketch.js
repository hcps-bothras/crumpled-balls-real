const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var dustbin, dustbinImage;

function preload(){
	dustbinImage = loadImage("dustbingreen.png");
}

function setup(){
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,600,40);

	ground = new Ground(400,680,800,20);
	
	leftSide = new Dustbin(450,590,20,155);
	bottom = new Dustbin(500,660,125,20);
	rightSide = new Dustbin(550,590,20,155);

	dustbin = createSprite(500,590,20,20) 
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.5

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(235);
  Engine.update(engine)
  
  bottom.display();
  ground.display();
  paper.display()
  leftSide.display();
  
  rightSide.display();

  drawSprites();	
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:210,y:-230})
  }
}