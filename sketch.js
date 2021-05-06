
var speed, weight;
var Damage;
var Bullet;
var Wall;
var Thickness;

var Zeina, Baleno, Awaken;
function setup() {
  createCanvas(1600,400);
  
  Thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  Bullet = createSprite(50,200,100,20);
  Bullet.shapeColor = color(255);
  Wall= createSprite(1200,200,Thickness,height/2);
  Wall.shapeColor = color(80,80,80);
  Bullet.velocityX = speed;

   
}

function draw() {
  background("black");
   
  if(Wall.x-Bullet.x < (Bullet.width + Wall.width)/2){
    Bullet.velocityX = 0
    Damage = (0.5 * weight * speed * speed)/ (Thickness * Thickness * Thickness);
    if(Damage > 10){
      Bullet.shapeColor = color(255,0,0);
    }

    if(Damage < 10){
      Bullet.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}



