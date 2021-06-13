const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var MaxSnow = 100;
var snow = []

function preload() {
    backgroundImg = loadImage("snow1.jpg");
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

if(frameCount % 150 === 0){
  for(var i = 0; i < MaxSnow; i++){
snow.push(new Snow(random(0, 400), random(0,400)))
  }
}
  
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
   for(var i = 0; i < MaxSnow; i++ ){
snow[i].SnowShow()
   }
}

