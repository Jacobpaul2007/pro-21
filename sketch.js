var car;
var wall;
var speed,weight;




function setup() {
  createCanvas(400,400);

  speed = random(55,90);
  weight = random(400,400);

  car = createSprite(30,200,20,20);
  car.velocityX = speed;

  wall = createSprite(380,200,20,height/2);
  wall.shapeColor=color(80,80,80);
  

}

function draw() {
  background("black");  

  if (car.isTouching(wall)){
    car.collide(wall);
  }

  if (wall.x-car.x < (car.width)){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/225;
    
    if (deformation>180){
      car.shapeColor=color(255,0,0);
    }

    if (deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }

    if (deformation>100){
      car.shapeColor=color(0,255,0);
    }

  }

  drawSprites();
}