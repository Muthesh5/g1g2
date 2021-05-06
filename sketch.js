
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  gameObject1=createSprite(200,100,50,80)
  gameObject1.shapeColor="yellow"
  gameObject2=createSprite(400,100,50,80)
  gameObject2.shapeColor="yellow"
  gameObject2.velocityX=-2
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor="purple";
    gameObject1.shapeColor="purple";
  text("we did it wow",200,200)
  }

  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green";
    gameObject1.shapeColor="yellow";
  }
 bounceOff(gameObject2,gameObject1)
console.log(gameObject2.velocityX)
console.log(gameObject2.x-gameObject1.x)
//bounceOff(movingRect,fixedRect)
  drawSprites();
}

