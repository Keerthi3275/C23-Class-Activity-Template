const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//Declare variables for box2,box3 & box4
var box1;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,height,400,20)
    box1 = new Box(200,300,50,50);
    //Create box2 object using Box class

    //Create box3 object using Box class

    //Create box4 object using Box class

    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    //Write code to display box2,box3 & box4

    
    
}