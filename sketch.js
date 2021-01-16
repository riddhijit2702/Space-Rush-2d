// Declare variables here
var input
var button
var spaceImg,space
var hr,sc,mn;
var gameState=0
var edges;
var title,alienship1,alienship1Img
var barrier,bullet,spaceShuttle,spaceShuttleImg;
function preload(){
   spaceImg=loadImage("space.jpg") 
   alienship1Img=loadImage("Alien Spaceship 1.png")
   spaceShuttleImg=loadImage("spavceshuttle.png")

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
    button.position(175,200)

    edges = createEdgeSprites();

}

function draw (){
    background("white");
  
    
    if(gameState===0){
        
        button.mousePressed(function(){
            
             spaceShuttle=createSprite(190,460)
             spaceShuttle.addImage(spaceShuttleImg)
             spaceShuttle.scale=0.4;
            
             spaceship1()
         
            button.hide()
        })
    }
    
    if(space.y<0){
        space.y=300
       }


    
    drawSprites();

    text(mouseX+","+mouseY,mouseX,mouseY)
    
}


function spaceship1(){
    
        alienship1=createSprite(445,-100)
        alienship1.velocityY=2
        alienship1.addImage(alienship1Img)
        alienship1.depth=space.depth+1
        alienship1.scale=0.2
  
     bullet=createSprite(alienship1.x,alienship1.y,200,200)
 
   if(alienship1.y==50){
      alienship1.velocityY = 0;
}

}
function mousePressed(){
    if(keyCode===32){
        bullet=createSprite(spaceShuttle.x,spaceShuttle.y,20,20)
        bullet.velocityY=-2
    }
    
}
