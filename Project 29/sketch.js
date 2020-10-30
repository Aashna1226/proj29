
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var GroundOb, ball, holder;
var stand1;
//var stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var slingshot;
var polygon;
var launchingForce=80;

function preload()
{
	polygon=loadImage("images/polygon.png")
}

function setup() {
	createCanvas(800, 300);
	engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  GroundOb = new Ground(width/2, 400, width, 25);
  stand1 = new Stand(390, 300, 250, 10);
  //stand2 = new Stand(600, 100, 200, 10);
  
  //level 1
  block1 = new Block(330, 235, 30, 40);
  block2 = new Block(360, 235, 30, 40);
  block3 = new Block(390, 235, 30, 40);
  block4 = new Block(420, 235, 30, 40);
  block5 = new Block(450, 235, 30, 40);

  //level 2
  block6 = new Block(360, 195, 30, 40);
  block7 = new Block(390, 195, 30, 40);
  block8 = new Block(420, 195, 30, 40);

  //level 3
  block9 = new Block(390, 155, 30, 40);


  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Launcher(this.polygon,{x:100,y:200});
   
}


function draw() {
  rectMode(CENTER);
  background(255,170,139);
  
  textSize(19);
  fill(blue);
  text("Drag the Hexagon Stone and Release it, to launch it towards the blocks", 100,30);
  //image(polygon, 100,450,200,300);


  GroundOb.display();
  stand1.display();
  strokeWeight(2);
  stroke(15);
  fill(56,252,4);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill(238,266,10);
  block6.display();
  block7.display();
  block8.display();
  fill(255,157,10);
  block9.display();
  fill(255,0,229);
  imageMode(CENTER)
  image(polygon,ball.position.x,ball.position.y,40,40);

  launcherOb.display()

}


function mouseDragged()
{
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}