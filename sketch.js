const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;

var myworld,myengine,ground,ball; 

function setup() {
  createCanvas(400,400);

  myengine=Engine.create(); //.world
  myworld=myengine.world;
  
  var ops = {
    isStatic:true
  }

  ground=Bodies.rectangle(200,380,400,40,ops);
  World.add(myworld,ground);
  
  var bmt={
    restitution:1
  }

  ball=Bodies.circle(200,60,20,bmt);
  World.add(myworld,ball);
  
}

function draw() {
  background("cyan");  

  Engine.update(myengine);

  fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);
  
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
}










