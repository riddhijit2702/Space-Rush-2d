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
var hearts=10,heartGrp;
var gameOver,gameOverImg,award,awardImg;
var travel=0;
var restartButton;
var explosionSound;
var shotsLeft=1000;

var touches=[];
function preload(){
   spaceImg=loadImage("space.jpg") 
   alienship1Img=loadImage("Alien Spaceship 1.png")
   spaceShuttleImg=loadImage("spavceshuttle.png")
   explosion = loadAnimation("1.png","2.png","3.png","4.png","5.png");
  heartImg=loadImage("heart.png")
  
 
  laserImg=loadImage("imageedit_0_3926599966.png")
gameOverImg=loadImage("gameOver.png")
awardImg=loadImage("awardTrophy.png")
backSound=loadSound("yt1s.com - 20 second Royalty free intro music upbeat.mp4")
  explosionSound=loadSound("explosion sound effects.mp4")


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



    spaceShuttle=createSprite(190,550)
    spaceShuttle.addImage(spaceShuttleImg)
    spaceShuttle.scale=0.4;
    spaceShuttle.visible = false;
    spaceShuttle.setVelocity(0,0)
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



    edges = createEdgeSprites();
   bulletGrpEnemy= new Group();
    alienship1Grp = new Group();
    bulletGrp = new Group();
    heartGrp= new Group();
    
}

function draw (){
    background("white");
    button.mousePressed(function(){
        gameState =1;
        backSound.loop();
    })
 
  

   
    if(gameState===1){
     
        button.hide();
        spaceShuttle.visible = true;
        spaceShuttle.bounceOff(edges);
        spaceship1();


        if(bulletGrpEnemy.isTouching(spaceShuttle)){
            explosionSound.play();
            hearts=hearts-1;
            heartGrp.add(heart1);
            heartGrp.add(heart2);
            heartGrp.add(heart3);
            heartGrp.add(heart4);
            heartGrp.add(heart5);
            ignition= createSprite(spaceShuttle.x,spaceShuttle.y+20)
    ignition.addAnimation("burning",explosion)
    ignition.scale=0.8;
    ignition.lifetime=20;
            bulletGrpEnemy.destroyEach();
            switch (hearts){
                case 8: heart5.visible = false;
                break ;
                case 6: heart4.visible = false;
                break;
                case 4: heart3.visible = false;
                break ;
                case 1: heart2.visible = false;
                break ;
                
            }
           
        } 
        if (hearts === 0){
            gameState = 2;
        }
        if(score===500){
            award=createSprite(560,350)
            award.addImage(awardImg)
            award.scale=0.5;
            }
        
        if(bulletGrp.isTouching(alienship1Grp)){
            explosionSound.play();
            alienship1Grp.destroyEach();
            ignition= createSprite(alienship1.x,alienship1.y)
            ignition.addAnimation("burning",explosion)
            ignition.lifetime=50;
            bullet_enemy.destroy();
            bullet.destroy();

            score=score+10;
        }
         
     
    }
   
    
    if(gameState === 2){
   gameOver=createSprite(width/2,height/2);
   gameOver.addImage(gameOverImg);
   gameOver.scale=1.5
   spaceShuttle.destroy();
   alienship1Grp.destroyEach();
   bulletGrpEnemy.destroyEach();
   heartGrp.destroyEach();
   travel=0;


    }
    
if(score===500){
    ignition= createSprite(random(130,1100),random(130,520))
    ignition.addAnimation("burning",explosion)
    ignition.scale=0.2;
    ignition.lifetime=10;
    spaceShuttle.destroy();
    alienship1Grp.destroyEach();
    bulletGrpEnemy.destroyEach();
    heartGrp.destroyEach();
    travel=0;
   
}
     
 
    
    if(space.y<0){
        space.y=300
       }
   
       if (touches.length > 0 ) {
            bullet=createSprite(spaceShuttle.x,spaceShuttle.y-30,5,100)
            bullet.velocityY= -10;
            bullet.shapeColor="red"
            bullet.lifetime=500;
            bulletGrp.add(bullet);
            shotsLeft=shotsLeft-1;
            console.log(shotsLeft)
            touches = [];
      }

    
    drawSprites();
    if(gameState==1&&gameState!=2){
        textFont('Algerian')
        textSize(20)
        fill('red')
        text("Lasers left to Smash!! : "+shotsLeft,65,190)
    }
    
    if(score===500){
        textFont("Algerian");
        fill("red")
        textSize(20);
           text("Award of Excellence In Our Game!!😀😀",640,280)
        textFont("Times New Roman");
        fill("red")
        textSize(17);
        text("Congrats on scoring 500!! I always knew you could do this, Well Done!! Now the aliens are no more to be seen and Earth is once again safe. 21 Space Fighter Gun Salute!!😀😀",10,560)
       }
     if(gameState===0){
         fill("red")
         textFont("Algerian")
         textSize(17)
        text("Welcome player, since 2130, we are at war with Kepler 348b's citizens,now they have attacked us and we are in grave danger",20,180)
        text("Please help us through this game, The controls are very easy: Right and Left Arrow keys to move and space to shoot",20,470)
    }
  
    if(gameState===2){
        textFont("Algerian")
        fill("red")
       
        if(score==0){
            textSize(17)
            text("Nothing to say, you failed the mission, but still it was a tough one so scoring zero doesn't matter to us, better luck next time :) !!",10,480)
        }
        else {
            textSize(20)
            text("Nothing to say, you failed the mission but I highly appreciate that you have scored  "+score+"  Good Job !!",50,480)
        }
        
    }
    if(gameState===1&&gameState!=2){
        textFont("Algerian")
        fill("blue")
        textSize(20)
        travel=Math.ceil(frameCount/frameRate())
     text("Km Travelled= "+travel,60,105) 
     }
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
        bullet_enemy.velocityX = random(-20,-5);
        bullet_enemy.velocityY = 20;
        bullet_enemy.addImage(laserImg);
        bullet_enemy.scale=1.5
        bullet_enemy.lifetime=200;
        bulletGrpEnemy.add(bullet_enemy);
        }

       
        

}
 
function keyPressed(){
    if(keyCode===32&&gameState===1&&score!=500&&shotsLeft>=0&&shotsLeft<=1000){
        bullet=createSprite(spaceShuttle.x,spaceShuttle.y-30,5,100)
        bullet.velocityY= -10;
        bullet.shapeColor="red"
        bullet.lifetime=500;
        bulletGrp.add(bullet);
        shotsLeft=shotsLeft-1;
        console.log(shotsLeft)
    }
    
    if(spaceShuttle.x>100){
    if(keyCode===LEFT_ARROW&&gameState===1){
        spaceShuttle.velocityX=-5;
    }
    }   
     
    if(spaceShuttle.x<1100){
    if(keyCode===RIGHT_ARROW&&gameState===1){
        spaceShuttle.velocityX= 5;
    }
    }
  
    }

