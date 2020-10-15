const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObj,dustbinObj,groundObj,world;

/*function preload(){
	paperObj = loadImage("sprites/paper.png");
	dustbinObj = loadImage("sprites/dustbingreen.png");
}*/

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	 paperObj = new Paper(210,420,20);
	 dustbinObj = new dustbin(1150,640);
	 groundObj = new Ground(width/2,650,width,20);
	 
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  paperObj.display();
  groundObj.display();
  dustbinObj.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:20,y:-20});
	}
}




