const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var box1;
var box2;
var pig1;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(700,300,70,70);
  box2 = new Box(900,300,70,70);

  pig1 = new Pig(800,350,50,50);
 
  ground = new Ground(600,399,1200,2);

}                     

function draw() {     

  background(0); 

  Engine.update(engine);  
  
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
}                                                                           