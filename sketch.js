var monkey, monkeyRunning, backImage, bananaImage,stoneImage, ground, invisibleGround, bananaGroup, stoneGroup, score;

function preload(){
  monkeyRunning  = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

backImage = loadImage("jungle.jpg");

bananaImage = loadImage("banana.png");
stoneImage = loadImage("stone.png");
}

function setup() {
  createCanvas(600, 400);
  
  ground = createSprite(200,200);
  ground.addImage(backImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
      
  bananaGroup = new Group();
  stoneGroup = new Group();
  
  monkey = createSprite(100,350,10,10)
  monkey.addAnimation("monkey",monkeyRunning);
  monkey.scale = 0.2;
  
  invisibleGround = createSprite(0,400,400,10);
  invisibleGround.visible = false;
   score=0;

}

function draw() {
   background(220);
   Banana();
   Stone();

   if(ground.x < 400){
  ground.x = ground.width/2;
  }
  drawSprites();
  if(keyDown("space") && monkey.y >= 300)
  {
    monkey.velocityY = -20;
  }
    monkey.velocityY = monkey.velocityY + 0.8;
  
   monkey.collide(invisibleGround);  
  
      stroke("white");
    textSize(20);
    fill("white");
    text("score:" + score, 370,50);
 
 if(stoneGroup.isTouching(monkey))
 {
   monkey.scale = monkey.scale - 0.01;
 }  
 if(bananaGroup.isTouching(monkey))
 {
   score = score + 1;
   bananaGroup.destroyEach();
   monkey.scale = monkey.scale + 0.01;
 }
  
  switch(score){
      
    case 10: monkey.scale = 0.12;
            
      break;
    case 20: monkey.scale = 0.14;
      break;
    case 30: monkey.scale = 0.16;
      break;
    case 40: monkey.scale = 0.18;
      break;
    case 50: monkey.scale = 0.20;
      break;
      
  }
}

function Banana()
{
  if(frameCount % 80 === 0)
  {
    var banana = createSprite(600,250,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -5;
    banana.y = 200
    banana.lifeTime = 300;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    bananaGroup.add(banana);
  }
}  
function Stone()
{
  if(frameCount%100=== 0)
  {
    var stone = createSprite(800,350,10,40);
    stone.velocityX = -6;
    stone.addImage(stoneImage);    
    stone.scale = 0.2;
    stone.lifetime = 300;
    stoneGroup.add(stone);
    stone.setCollider("circle",0,0,30);
  } 
}