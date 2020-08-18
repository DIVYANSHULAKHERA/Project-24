
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var log1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	paper = new Paper(200,300);
	ground = new Ground(600,height,1200,20);
	log1 = new Log(600,-200,20,20);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
	background(0);
	
	paper.display();
	ground.display();
	log1.display();

	drawSprites();

}



