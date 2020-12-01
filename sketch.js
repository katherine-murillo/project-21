var car, wall;
var speed, weight;
var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200, thickness, height/2);
  speed=random(233,321)
  bullet.velocityX = speed;
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);  

 if(hasCollided(bullet, wall))
 {
   bullet.velocityX=0;
   var damage=0.5 * weight * speed/(thickness *thickness *thickness)
 if(damage>10)
  {
    wall.shapeColor="red"
  }
  if(damage<10)
  {
    wall.shapeColor="green"
  }
  }


  drawSprites();
}
 function hasCollided(lbullet, lwall)
 {
bulletRghtEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRghtEdge>=wallLeftEdge)
{
  return true
}
return false;
 }
