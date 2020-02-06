const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,200);
    box2 = new Box(100,300,50,200);
    box3 = new Box(300,300,50,200);
    box4 = new Box(200,70,300,50);
    box5 = new Box(200,0,50,100);
    ground = new Ground(width / 2, height, width, 20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
   
}