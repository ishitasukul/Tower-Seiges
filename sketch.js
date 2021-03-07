const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, angle,bkgImg, polygon, slingShot;
function preload() {
    bkgImg= loadImage("popimg.jpg");
    polygonImg= loadImage("Al_HexArea.png");
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(600,height,1200,50);

    stand1= new Ground (450,300,200, 10);
    stand2= new Ground (760,220,290, 10);

    var options={
        restitution:0,
        density:5
    }
    polygon= Bodies.circle(50,200,20,options);
    World.add(world,polygon);

    slingShot= new Slingshot(this.polygon, {x:70, y:230});


   
    //bottom layer for left tower
    block1 = new Box (390, 275,30, 40);
    block2 = new Box (420, 275,30, 40);
    block3 = new Box (450, 275,30, 40);
    block4 = new Box (480, 275,30, 40);
    block5 = new Box (510, 275,30, 40);
     //middle layer for left tower
     block6 = new Box (420,235,30, 40);
     block7 = new Box (450,235,30, 40);
     block8 = new Box (480,235,30, 40);
     //top layer for left tower
     block9 = new Box (450, 195,30, 40);

     //bottom layer for right tower
    block10 = new Box (650, 195,30, 40);
    block11 = new Box (680, 195,30, 40);
    block12 = new Box (710, 195,30, 40);
    block13 = new Box (740, 195,30, 40);
    block14 = new Box (770, 195,30, 40);
    block15 = new Box (800, 195,30, 40);
    block16 = new Box (830,195,30, 40);
    block17 = new Box (860, 195,30, 40);
    //middle layer for right tower
    block18 = new Box (710,155,30, 40);
    block19 = new Box (740,155,30, 40);
    block20 = new Box (770,155,30, 40);
    block21= new Box (800,155,30, 40)
    //top layer for right tower
    block22= new Box (740,115,30,40);
    block23= new Box (770,115,30,40);
    block24= new Box (756,75,30,40);

   
}

function draw(){
    background(bkgImg);
    Engine.update(engine);
    textSize(20);
    stroke("black");
    fill("black");
    text("Drag and Hold the Hexagon, and Launch Towards the Blocks!", 350, 40);

    ground.display();
    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();



    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 30, 30);
}




 function mouseDragged(){
     Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


 function mouseReleased(){
  slingShot.fly();
}
