
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
//var FoodGroup, obstacleGroup

var ground
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}



function setup() {
  createCanvas(600, 500);  
   
  monkey = createSprite(80, 315, 15, 15);
  monkey.addAnimation("runningmonkey", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  console.log(ground.x);
  
}


function draw() {
  background(255);
  //console.log(ground.x);
  text("Survival Time: "+ survivalTime, 100,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  
 ground.x = ground.width /2;
    if(keyDown("space") && monkey.y>= 314.3) {
        monkey.velocityY = -18;
      }
 
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  //console.log(monkey.y);
  
  spawnObstacles();
  spawnFood();
  
  drawSprites();
  console.log(frameCount);
}

function spawnFood(){
  if (frameCount % 80 === 0) {
    var  banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    banana.scale = 0.1;
    
    //add each cloud to the group
    foodGroup.add(banana);
}
}

function spawnObstacles(){
   
  if (frameCount % 300 === 0) {
    var  obstacle = createSprite(600,120,40,10);
    obstacle.y = 325;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    obstacle.scale = 0.1;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
}
}

