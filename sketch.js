var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,zone1,zone2,zone3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.visible = false
	packageSprite.scale = 0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	zone1 = createSprite(400,650,200,20)
	zone1.shapeColor = "red"
	

     zone2 = createSprite(300,610,20,100)
	zone2.shapeColor = "red"
	
   zone3= createSprite(500,610,20,100)
   zone3.shapeColor = "red"
	engine = Engine.create();
	world = engine.world;
	var ops = {
		isStatic : true
	
	}
	zony1 = Bodies.rectangle(400,650,200,20,ops)
	World.add(world,zony1)
	console.log(zony1)
	
	var op =  {
		restitution : 0.5,
		isStatic :true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5,op );
   packageBody.visible = true
   
	World.add(world, packageBody);
	
	var options1 =  {

		isStatic:true
	}
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10,options1  );
 	World.add(world, ground);

    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  keyPressed()
  zone1.position.x = zony1.position.x
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to 
		//make the package body fall only on
Matter.Body.setStatic(packageBody,false)
		packageBody.setVelocityY = 5
		//packageBody.position.y = 300,100
	  packageSprite.visible = true
	  }
}



