// Declare variables here
var input
var button,score=0;
var spaceImg,space
var hr,sc,mn;
var gameState=0
var edges;
var title,alienship1,alienship1Img
var barrier,bullet,spaceShuttle,spaceShuttleImg;
var bullet_enemy;
var alienship1Grp, bulletGrp;
var heart1,heart2,heart3;
var heartImg;
var laser,laserImg;
var boss,bossImg;
var bulletGrpEnemy;
var backSound;
var hearts=5;
function preload(){
   spaceImg=loadImage("space.jpg") 
   alienship1Img=loadImage("Alien Spaceship 1.png")
   spaceShuttleImg=loadImage("spavceshuttle.png")
   explosion = loadAnimation("1.png","2.png","3.png","4.png","5.png");
  heartImg=loadImage("heart.png")
  laserImg=loadImage("laser.png")
  bossImg=loadImage("boss.png")
  laserImg=loadImage("imageedit_0_3926599966.png")
backSound=loadSound("Among Us Airship - New Map Trailer Music.mp4")
  
}
function setup(){
    background('red')
    createCanvas(1200,700);
    space=createSprite(200,200)
            space.addImage(spaceImg)
            space.scale=8
            space.velocityY=-2
            
 
    button=createButton("Play Space Rush 2 D")
  button.style('background','black')
  button.style('color','red')
  button.style('height','20%')
  button.style('fontSize','x-large')
    button.position(500,250)

    spaceShuttle=createSprite(190,460)
    spaceShuttle.addImage(spaceShuttleImg)
    spaceShuttle.scale=0.4;
    spaceShuttle.visible = false;

    edges = createEdgeSprites();
   bulletGrpEnemy= new Group();
    alienship1Grp = new Group();
    bulletGrp = new Group();
}

function draw (){
    background("white");
    button.mousePressed(function(){
        gameState =1;
    })
    
    if(gameState===1){
       backSound.loop();
        button.hide();
        spaceShuttle.visible = true;
        spaceship1();
        heart1=createSprite(40,125);
        heart1.addImage(heartImg);
        heart1.scale=0.1;


        heart2=createSprite(90,125);
        heart2.addImage(heartImg);
        heart2.scale=0.1;

        heart3=createSprite(140,125);
        heart3.addImage(heartImg);
        heart3.scale=0.1;

        heart4=createSprite(190,125);
        heart4.addImage(heartImg);
        heart4.scale=0.1;
       
        heart5=createSprite(240,125);
        heart5.addImage(heartImg);
        heart5.scale=0.1;
     
    }
   
       
     
    
 
    
    if(space.y<0){
        space.y=300
       }
if(score===500){
  boss=createSprite(random(40,1130),114)
}
    if(bulletGrp.isTouching(alienship1Grp)){
        alienship1Grp.destroyEach();
        ignition= createSprite(alienship1.x,alienship1.y)
        ignition.addAnimation("burning",explosion)
        ignition.lifetime=50;
        bulletGrpEnemy.destroyEach();
        bulletGrp.destroyEach();
      
        score+10;
    }

    
    drawSprites();
textSize(20);
fill('red')
    text(mouseX+","+mouseY,mouseX,mouseY)
   text("Your Score :- "+score,60,70) 
}


function spaceship1(){
    
        if(gameState===1 && frameCount %100 === 0){
        alienship1=createSprite(random(spaceShuttle.x,1000),random(20,spaceShuttle.y -200));
        alienship1.addImage(alienship1Img)
        alienship1.depth=space.depth+1
        alienship1.scale=0.2;
        alienship1.lifetime = 200;
        alienship1Grp.add(alienship1);
        bullet_enemy=createSprite(alienship1.x,alienship1.y,10,10);
        bullet_enemy.velocityX = -20;
        bullet_enemy.velocityY = 20;
        bullet_enemy.addImage(laserImg);
        bullet_enemy.scale=1.5
        bullet_enemy.lifetime=200;
        bulletGrpEnemy.add(bullet_enemy);
        
         }

        if(bulletGrpEnemy.isTouching(spaceShuttle)){
        hearts-1;
        switch (hearts){
            case 5: heart5.destroy();
            break ;
            case 4: heart4.destroy()
            break;
            case 3: heart3.destroy();
            break ;
            case 2: heart2.destroy();
            break ;
            case 1: heart1.destroy();
            break ;
        }
        console.log(hearts);
    } 
        

}
function keyPressed(){
    if(keyCode===32){
        bullet=createSprite(spaceShuttle.x,spaceShuttle.y-30,5,100)
        bullet.velocityY= -10;
        bullet.shapeColor="red"
        bulletGrp.add(bullet);
    }
    if(spaceShuttle.x>100){
    if(keyCode===LEFT_ARROW){
        spaceShuttle.velocityX=-5;
    }
    }   
    if(spaceShuttle.x<1100){
    if(keyCode===RIGHT_ARROW){
        spaceShuttle.velocityX= 5;
    }
    }
  
    }

