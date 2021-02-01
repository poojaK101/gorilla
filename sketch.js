var banana, monkey, obstacle, bananaImage, obstacleImage, obstaclesGroup, background, score = 0;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload()
{
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  
  backImage = loadImage("jungle.jpg");
  
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png",  "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png","Monkey_09.png","Monkey_10.png")
  
}
  
function setup() {
  createCanvas(600, 400);
  
  background = createSprite(200,200,400,400);
  background.addImage("jungle",backImage);
  background.x = 200;
  background.velocityX = -(6 + frameCount/3);

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  monkey = createSprite(150,300,20,20);
  monkey.scale = 0.15;
  monkey.addAnimation("running", player_running);
 
  obstaclesGroup = new Group();
  bananasGroup = new Group();
}



function draw() {
  
  if(bananasGroup.isTouching(monkey))
    {
      score = score + 2;
      bananasGroup.destroyEach();
    }
  
  switch(score)
    {
      case 10: monkey.scale=0.12;
        break;
      case 20: monkey.scale=0.14;
        break;
      case 30: monkey.scale=0.16;
        break;
      case 40: monkey.scale=0.18;
        break;
        default: break;
    }
  
  if(obstaclesGroup.isTouching(monkey))
    {
      monkey.scale = 0.2;
    }
  
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 300,50);
}



function spawnBananas() {
  if(frameCount % 40 === 0) {
    var bananas = createSprite(600,165,10,40);
    
    bananas.velocityX = -(6 + 3*frameCount/100);
    
   bananas.scale = 0.3;
    bananas.lifetime = 300;
    bananasGroup.add(bananas);
    }
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    
    obstacle.velocityX = -(6 + 3*frameCount/100);
    
   obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
    }
}