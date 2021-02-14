
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var left
var right
var bottom
var ball
var dustbin


function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world; 

	//Create the Bodies Here.
    ground = new Ground(width/2, 650, width, 10);
    dustbin= new DustBin(width/2+200,height-65,200,20)
    bottom=new Box(width/2+200,height-65,200,20)
	right=new Box(width/2+100,height-105,20,100)
	left=new Box(width/2+300,height-105,20,100)
	ball=new Paper(width/2-300,height-105,25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  ground.display()
  bottom.display()
  left.display()
  right.display()
  ball.display()
  drawSprites() 
 
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:400,y:-400})
  }
}

