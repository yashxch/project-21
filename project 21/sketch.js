var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
thickness = random(23,83)
weight = random(30,52)
speed = random(233,321)
bullet = createSprite(50, 200, 40,10);
wall =createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80);
bullet.velocityX = random(weight,speed)
}

function draw() {
  background(0);  
  drawSprites();
if(hasCollided(bullet,wall)){
  bullet.velocityX =0;
  var damage= 0.5 * weight * speed * speed/(thickness* thickness* thickness);
  
  if(damage>10)
  wall.shapeColor = color(255,0,0);
}
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}

function hasCollided(bullet,wall)
{
bulletRightEdge = bullet.x +bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}