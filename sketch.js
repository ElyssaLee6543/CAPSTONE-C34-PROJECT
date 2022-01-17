
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var backgroundImg;
var bottom_barrier;
var left_barrier;
var right_barrier;
var top_barrier;
var ball;
var button;
var sound;
var score = 0;


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
   

  button = createImg('push.png');
  button.position(40,60);
  button.size(100,100);
  button.mouseClicked(vForce);
  
  
  
  bottom_barrier =new Ground(400,810,810,10);
  right_barrier = new Ground(810,400,0,800);
  left_barrier = new Ground(0,400,10,810);
  //top_barrier = new Ground(400,0,810,10);


  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,20);
  text("Press Push to Bounce Ball!",300,50);
  text("Don't go too high, or your ball will leave the screen!",300,60);
  
  
  bottom_barrier.show();
  left_barrier.show();
  right_barrier.show();
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
