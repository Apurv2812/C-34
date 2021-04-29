//examples of different types of data in java script

//string
var string = "Apurv"
console.log(string);

//number
var num = 14
console.log(num);

//boolean
var bool = true;
console.log(bool);

//undefined
var object;
console.log(object);

//reassigning the same undefined object to null
//null
object = null;
console.log(object);

//examples on array

//an array holding same data type
var arr1 = [1,2,3,4,5];
console.log(arr1);

//array holding different data type
var arr2 = ["Apurv",14,true];
console.log(arr2);

//an array storing a list of arrays
var arr3 = [[1,2,3],["Apurv",true],[object,bool,5]]
console.log(arr3[2][2]);
arr3.push("My Name");
console.log(arr3);

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

  box1 = new Box(700,350,50,50);
  box2 = new Box(750,350,50,50);
  box3 = new Box(800,350,50,50);
  box4 = new Box(700,300,50,50);
  box5 = new Box(750,300,50,50);
  box6 = new Box(700,250,50,50);
  box7 = new Box(750,250,50,50);
  box8 = new Box(800,250,50,50);
  box9 = new Box(700,200,50,50);
  box10 = new Box(750,200,50,50);
  box11 = new Box(700,150,50,50);
  box12 = new Box(750,150,50,50);
  box13 = new Box(800,150,50,50);
  box14 = new Box(700,100,50,50);
  box15 = new Box(750,100,50,50);
  box16 = new Box(800,200,50,50);
  box17 = new Box(800,100,50,50);
  box18 = new Box(700,50,50,50);
  box19 = new Box(750,50,50,50);
  box20 = new Box(800,50,50,50);

  ball = new Ball(600,250,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:600, y:50});
}

function draw(){
    background(255);
    Engine.update(engine);
    //strokeWeight(4);
  
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box17.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box18.display();
    box19.display();
    box20.display();

    ball.display();
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
   
 Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}




