//creating variables
var edges;
var rand1,rand2,rand3,rand4,rand5,rand6,rand7,rand8,rand9,rand10,rand11,rand12,rand13,rand14,rand15,rand16,rand17;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block12;
var Oblock1,Oblock2,Oblock3,Oblock4,Oblock5,Oblock6,Oblock7,Oblock8,Oblock9,Oblock10,Oblock11,Oblock12,Oblock13,Oblock14,Oblock15,Oblock16,Oblock17,Oblock18,Oblock19,Oblock20,Oblock12;

var visibility,visibilityI;

var key;
var ballGroup;

var ball1,ball2,ball3,ball4,vball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15,ball16,ball17,ball18,ball19,ball20,ball21,ball22,ball23,ball24,ball25,ball26,ball27;
var gate1,gate2,mainGate;
var bg;

var heart;
var lives = 3;
var player,enemy;
var playerLeftI,playerRightI,playerUpI,playerDownI,enemyRightI,heartI;

var keyI,ballI,logoI,mLogo2;
var gameS,runS;

var ballNum = 27;


function preload(){

    //loading images for sprites

    bg = loadImage("images/bg.jpg")

    keyI = loadImage("images/key.png");
    ballI = loadImage("images/ball.png")
    logoI = loadImage("images/logo.png")

    playerI = loadImage("images/player1.png")

    enemyRightI = loadImage("images/enemyC.png")

    visibilityI = loadImage("images/visibility.png")

    heartI = loadImage("images/heart.png")

    gameS = loadSound("sound/game.wav")

}

function setup(){
    createCanvas(displayWidth - 10,displayHeight - 150)
    //width = 1536
    //height = 864

    console.log("width = " + displayWidth)
    console.log("height = " + displayHeight)

    edges = createEdgeSprites();

    ballGroup = new Group();

    //creating blocks to make path

    Oblock1 = createSprite(1200,500,20,155);
    Oblock1.shapeColor = "red";
   
    block1 = createSprite(1200,500,15,150);
    block1.shapeColor = "black";

    Oblock2 = createSprite(1450,500,200,20);
    Oblock2.shapeColor = rgb(86, 255, 8);
   
    block2 = createSprite(1450,500,195,15);
    block2.shapeColor = "black";

    Oblock3 = createSprite(1350,280,20,150);
    Oblock3.shapeColor = rgb(255, 230, 3);
   
    block3 = createSprite(1350,280,15,145);
    block3.shapeColor = "black";

    Oblock4 = createSprite(1125,280,160,20);
    Oblock4.shapeColor = rgb(0, 255, 255);
   
    block4 = createSprite(1125,280,155,15);
    block4.shapeColor = "black";

    Oblock5 = createSprite(1200,70,20,150)
    Oblock5.shapeColor = rgb(177, 3, 252);
   
    block5 = createSprite(1200,70,15,145);
    block5.shapeColor = "black";

    Oblock6 = createSprite(1000,600,20,210);
    Oblock6.shapeColor = rgb(252, 111, 3);

    block6 = createSprite(1000,600,15,205);
    block6.shapeColor = "black";

    Oblock7 = createSprite(770,400,210,20);
    Oblock7.shapeColor = rgb(255, 0, 247);

    block7 = createSprite(770,400,205,15);
    block7.shapeColor = "black";

    Oblock8 = createSprite(870,200,20,110);
    Oblock8.shapeColor = rgb(86, 255, 8);

    block8 = createSprite(870,200,15,105);
    block8.shapeColor = "black";

    Oblock9 = createSprite(1030,130,110,20);
    Oblock9.shapeColor = "red";

    block9 = createSprite(1030,130,105,15);
    block9.shapeColor = "black";

    Oblock10 = createSprite(730,130,20,240);
    Oblock10.shapeColor = rgb(255, 230, 3);

    block10 = createSprite(730,130,15,235);
    block10.shapeColor = "black";

    Oblock11 = createSprite(1020,390,20,20);
    Oblock11.shapeColor = "white";

    block11 = createSprite(1020,390,15,15);
    block11.shapeColor = "black";

    Oblock12 = createSprite(770,550,220,20);
    Oblock12.shapeColor = rgb(177, 3, 252);

    block12 = createSprite(770,550,215,15);
    block12.shapeColor = "black";

    Oblock13 = createSprite(540,480,20,220);
    Oblock13.shapeColor = "cyan";

    block13 = createSprite(540,480,15,215);
    block13.shapeColor = "black";

    Oblock14 = createSprite(480,250,220,20);
    Oblock14.shapeColor = rgb(252, 111, 3);

    block14 = createSprite(480,250,215,15);
    block14.shapeColor = "black";

    Oblock15 = createSprite(580,120,20,60);
    Oblock15.shapeColor = rgb(255, 0, 247);

    block15 = createSprite(580,120,15,55);
    block15.shapeColor = "black";

    Oblock16 = createSprite(450,80,20,140);
    Oblock16.shapeColor = "red";

    block16 = createSprite(450,80,15,135);
    block16.shapeColor = "black";

    Oblock17 = createSprite(400,620,20,240);
    Oblock17.shapeColor = rgb(86, 255, 8);

    block17 = createSprite(400,620,15,235);
    block17.shapeColor = "black";

    Oblock18 = createSprite(300,370,240,20);
    Oblock18.shapeColor = rgb(255, 230, 3);

    block18 = createSprite(300,370,235,15);
    block18.shapeColor = "black";

    Oblock19 = createSprite(250,70,20,240);
    Oblock19.shapeColor = "cyan";

    block19 = createSprite(250,70,15,235);
    block19.shapeColor = "black";
    
    //making the gate in which main key will be hidden

    gate1 = createSprite(1466,150,200,10)
    gate1.shapeColor = "red";

    gate2 = createSprite(1366,70,10,170)
    gate2.shapeColor = "red";

    //making the escape gate

    mainGate = createSprite(70,640);
    mainGate.addImage(logoI);
    mainGate.scale = 1.1;

    //creating STACY the player

    player = createSprite(1420,640)
    player.addImage(playerI) 
    player.scale = 0.4;
    player.setCollider("circle",0,0,100)

    //creating ANGELINA the enemy

    enemy = createSprite(50,50)
    enemy.addImage("right",enemyRightI)
    enemy.scale = 0.25;
    enemy.setCollider("rectangle",0,30,300,250)
    enemy.visible = false;

    //creating player's visibility
    push();

    visibility = createSprite(1420,640)
    visibility.addImage(visibilityI);
    visibility.scale = 0.3;
    visibility.debug = true
    visibility.setCollider("circle",0,0,800)
    visibility.depth = player.depth - 10;
    visibility.visible = false;

    pop();

    //creating the key

    key = createSprite(1450,80)
    key.addImage(keyI)
    key.scale = 0.5;
    key.setCollider("circle",0,-20,130)

    //creating the props

    ball1 = createSprite(1100,670)
    ball1.addImage(ballI)
    ball1.scale = 0.05;
    ball1.setCollider("circle",0,0,250)

    ball2 = createSprite(1300,670)
    ball2.addImage(ballI)
    ball2.scale = 0.05;
    ball2.setCollider("circle",0,0,250)

    ball3 = createSprite(1300,470)
    ball3.addImage(ballI)
    ball3.scale = 0.05;
    ball3.setCollider("circle",0,0,250)

    ball4 = createSprite(1450,270)
    ball4.addImage(ballI)
    ball4.scale = 0.05;
    ball4.setCollider("circle",0,0,250)

    ball5 = createSprite(1300,270)
    ball5.addImage(ballI)
    ball5.scale = 0.05;
    ball5.setCollider("circle",0,0,250)

    ball6 = createSprite(1300,70)
    ball6.addImage(ballI)
    ball6.scale = 0.05;
    ball6.setCollider("circle",0,0,250)

    ball7 = createSprite(1100,70)
    ball7.addImage(ballI)
    ball7.scale = 0.05;
    ball7.setCollider("circle",0,0,250)

    ball8 = createSprite(900,70)
    ball8.addImage(ballI)
    ball8.scale = 0.05;
    ball8.setCollider("circle",0,0,250)

    ball9 = createSprite(700,70)
    ball9.addImage(ballI)
    ball9.scale = 0.05;
    ball9.setCollider("circle",0,0,250)

    ball10 = createSprite(500,70)
    ball10.addImage(ballI)
    ball10.scale = 0.05;
    ball10.setCollider("circle",0,0,250)

    ball11 = createSprite(300,70)
    ball11.addImage(ballI)
    ball11.scale = 0.05;
    ball11.setCollider("circle",0,0,250)

    ball12 = createSprite(100,70)
    ball12.addImage(ballI)
    ball12.scale = 0.05;
    ball12.setCollider("circle",0,0,250)

    ball13 = createSprite(900,670)
    ball13.addImage(ballI)
    ball13.scale = 0.05;
    ball13.setCollider("circle",0,0,250)

    ball14 = createSprite(700,670)
    ball14.addImage(ballI)
    ball14.scale = 0.05;
    ball14.setCollider("circle",0,0,250)

    ball15 = createSprite(500,670)
    ball15.addImage(ballI)
    ball15.scale = 0.05;
    ball15.setCollider("circle",0,0,250)

    ball16 = createSprite(300,670)
    ball16.addImage(ballI)
    ball16.scale = 0.05;
    ball16.setCollider("circle",0,0,250)

    ball17 = createSprite(1100,470)
    ball17.addImage(ballI)
    ball17.scale = 0.05;
    ball17.setCollider("circle",0,0,250)

    ball18 = createSprite(900,470)
    ball18.addImage(ballI)
    ball18.scale = 0.05;
    ball18.setCollider("circle",0,0,250)

    ball19 = createSprite(700,470)
    ball19.addImage(ballI)
    ball19.scale = 0.05;
    ball19.setCollider("circle",0,0,250)

    ball20 = createSprite(500,470)
    ball20.addImage(ballI)
    ball20.scale = 0.05;
    ball20.setCollider("circle",0,0,250)

    ball21 = createSprite(300,470)
    ball21.addImage(ballI)
    ball21.scale = 0.05;
    ball21.setCollider("circle",0,0,250)

    ball22 = createSprite(50,500)
    ball22.addImage(ballI)
    ball22.scale = 0.05;
    ball22.setCollider("circle",0,0,250)


    ball23 = createSprite(1000,300)
    ball23.addImage(ballI)
    ball23.scale = 0.05;
    ball23.setCollider("circle",0,0,250)

    ball24 = createSprite(800,300)
    ball24.addImage(ballI)
    ball24.scale = 0.05;
    ball24.setCollider("circle",0,0,250)

    ball25 = createSprite(600,300)
    ball25.addImage(ballI)
    ball25.scale = 0.05;
    ball25.setCollider("circle",0,0,250)

    ball26 = createSprite(400,300)
    ball26.addImage(ballI)
    ball26.scale = 0.05;
    ball26.setCollider("circle",0,0,250)

    ball27 = createSprite(200,300)
    ball27.addImage(ballI)
    ball27.scale = 0.05;
    ball27.setCollider("circle",0,0,250)

    heart = createSprite(1380,570)
    heart.addImage(heartI)
    heart.scale = 0.05;
  
}

function draw(){
    background(bg)

    drawSprites();

    fill(255)
    textSize(20)
    text("Balls Remaining = "+ ballNum,1330,540)
    fill("red")
    textSize(24)
    text(" = "+ lives,1400,575)

    console.log("x = " + enemy.x);
    console.log("y = "+ enemy.y);

    visibility.x = player.x;
    visibility.y = player.y;

    player.collide(gate1);
    player.collide(gate2);

    player.collide(Oblock1);
    player.collide(Oblock2);
    player.collide(Oblock3);
    player.collide(Oblock4);
    player.collide(Oblock5);
    player.collide(Oblock6);
    player.collide(Oblock7);
    player.collide(Oblock8);
    player.collide(Oblock9);
    player.collide(Oblock10);
    player.collide(Oblock11);
    player.collide(Oblock12);
    player.collide(Oblock13);
    player.collide(Oblock14);
    player.collide(Oblock15);
    player.collide(Oblock16);
    player.collide(Oblock17);
    player.collide(Oblock18);
    player.collide(Oblock19);

    player.collide(edges);
    player.collide(mainGate);

    enemy.collide(gate1);
    enemy.collide(gate2);

    enemy.collide(Oblock1);
    enemy.collide(Oblock2);
    enemy.collide(Oblock3);
    enemy.collide(Oblock4);
    enemy.collide(Oblock5);
    enemy.collide(Oblock6);
    enemy.collide(Oblock7);
    enemy.collide(Oblock8);
    enemy.collide(Oblock9);
    enemy.collide(Oblock10);
    enemy.collide(Oblock11);
    enemy.collide(Oblock12);
    enemy.collide(Oblock13);
    enemy.collide(Oblock14);
    enemy.collide(Oblock15);
    enemy.collide(Oblock16);
    enemy.collide(Oblock17);
    enemy.collide(Oblock18);
    enemy.collide(Oblock19);

    enemy.collide(edges);

    enemy.collide(mainGate);

    ballGroup.add(ball1);
    ballGroup.add(ball2); 
    ballGroup.add(ball3); 
    ballGroup.add(ball4); 
    ballGroup.add(ball5); 
    ballGroup.add(ball6); 
    ballGroup.add(ball7); 
    ballGroup.add(ball8); 
    ballGroup.add(ball9); 
    ballGroup.add(ball10); 
    ballGroup.add(ball11); 
    ballGroup.add(ball12); 
    ballGroup.add(ball13); 
    ballGroup.add(ball14); 
    ballGroup.add(ball15); 
    ballGroup.add(ball16); 
    ballGroup.add(ball17); 
    ballGroup.add(ball18); 
    ballGroup.add(ball19); 
    ballGroup.add(ball20); 
    ballGroup.add(ball21); 
    ballGroup.add(ball22); 
    ballGroup.add(ball23); 
    ballGroup.add(ball24); 
    ballGroup.add(ball25); 
    ballGroup.add(ball26); 
    ballGroup.add(ball27);   

    if(frameCount % 1200 === 0){
        gameS.play();
    }

    if(frameCount === 50){
        gameS.play();
    }

    if(keyDown(32)){
        player.velocityX = 0;
        player.velocityY = 0;
    }

    if(keyDown(LEFT_ARROW)){
        player.velocityX -= 7;
        player.velocityY = 0;
       
    }

    if(keyDown(RIGHT_ARROW)){
        player.velocityX += 7;
        player.velocityY = 0;
       
    }

    if(player.velocityX > 7){
        player.velocityX = 7;
    }

    if(player.velocityX < -7){
        player.velocityX = -7;
    }

    if(keyDown(UP_ARROW)){
        player.velocityY -= 7;
        player.velocityX = 0;
       
    }

    if(keyDown(DOWN_ARROW)){
        player.velocityY += 7;
        player.velocityX = 0;
        
    }

    if(player.velocityY > 7){
        player.velocityY = 7;
    }

    if(player.velocityY < -7){
        player.velocityY = -7;
    }

    if(enemy.isTouching(visibility)){
        enemy.visible = true;
    }else{
        enemy.visible = false;
    }

    if(enemy.x === 50 && enemy.y === 50){
        enemy.velocityY = 10;
    }

    if(enemy.velocityX === 0 && enemy.velocityY === 0 && frameCount % 100 === 0){

        rand17 = Math.round(random(1,2))

        switch(rand17){
         
            case 1 : enemy.x = 50;
                     enemy.y = 50;
                     break;

            case 2 : enemy.x = 1300;
                     enemy.y = 50;
                     break;


        }
        
    }

    if(enemy.x === 50 && enemy.y === 410){

        rand1 = Math.round(random(1,3));

        console.log(rand1)

        switch(rand1){

            case 1 : enemy.velocityX = 10;
                     enemy.velocityY = 0;
                     break;

            case 2 : enemy.velocityX = 0;
                     enemy.velocityY = -10;
                     break;

            case 3 : enemy.velocityX = 0;
                     enemy.velocityY = 10;
                     break;
        }
    }

    if(enemy.x === 930 && enemy.y === 300){

        rand2 = Math.round(random(1,2));

        console.log(rand2)

        switch(rand2){

            case 1 : enemy.velocityX = 0;
                     enemy.velocityY = -10;
                     break;
                    
            case 2 : enemy.velocityX = 0;
                     enemy.velocityY = 10;
                     break;
        }
    }

    if(enemy.x === 50 && enemy.y === 300){

        rand3 = Math.round(random(1,3));

        console.log(rand3)

        switch(rand3){

            case 1 : enemy.velocityX = 0;
                     enemy.velocityY = -10;
                     break;
                    
            case 2 : enemy.velocityX = 10;
                     enemy.velocityY = 0;
                     break;

            case 3 : enemy.velocityX = 0;
                     enemy.velocityY = 10;
                     break;
        }
    }

    if(enemy.x === 50 && enemy.y === 300){

        rand4 = Math.round(random(1,3));

        console.log(rand4)

        switch(rand4){

            case 1 : enemy.velocityX = 0;
                     enemy.velocityY = -10;
                     break;
                    
            case 2 : enemy.velocityX = 10;
                     enemy.velocityY = 0;
                     break;

            case 3 : enemy.velocityX = 0;
                     enemy.velocityY = 10;
                     break;
        }
    }

    if(enemy.x === 930 && enemy.y === 30){

        rand5 = Math.round(random(1,3));

        console.log(rand5)

        switch(rand5){

            case 1 : enemy.velocityX = -10;
                     enemy.velocityY = 0;
                     break;
                    
            case 2 : enemy.velocityX = 10;
                     enemy.velocityY = 0;
                     break;

            case 3 : enemy.velocityX = -10;
                     enemy.velocityY = 0;
                     
        }

        
    }
   
    
    if(enemy.x === 290 && enemy.y === 410){

        rand6 = Math.round(random(1,2));

        console.log(rand6)

        switch(rand6){

            case 1 : enemy.velocityX = 10;
                     enemy.velocityY = 0;
                     break;
                    
            case 2 : enemy.velocityX = 0;
                     enemy.velocityY = -10;
                     break;
        }

        
    }

    if(enemy.x === 290 && enemy.y === 661.75){

        enemy.velocityY = -10;
        enemy.velocityX = 0;

        
    }

    if(enemy.x === 290 && enemy.y === 410){

        rand7 = Math.round(random(1,2));

        console.log(rand7)

        switch(rand7){

            case 1 : enemy.velocityX = 10;
                     enemy.velocityY = 0;
                     break;
                    
            case 2 : enemy.velocityX = -10;
                     enemy.velocityY = 0;
                     break;
        }
        
    }

    if(enemy.x === 487.25 && enemy.y === 410){

        rand8 = Math.round(random(1,3));

        console.log(rand8)

        switch(rand8){

            case 1 : enemy.velocityX = 0;
                     enemy.velocityY = 10;
                     break;
                    
            case 2 : enemy.velocityX = -10;
                     enemy.velocityY = 0;
                     break;

            case 3 : enemy.velocityX = 0;
                     enemy.velocityY = -10;
                     break;
        }  
    }

    
    if(enemy.x === 930 && enemy.y === 661.75){

        rand9 = Math.round(random(1,2));

        console.log(rand9)

        switch(rand9){

            case 1 : enemy.velocityX = 0;
                     enemy.velocityY = -10;
                     break;
                    
            case 2 : enemy.velocityX = -10;
                     enemy.velocityY = 0;
                     break;

        }  
    }

    if(enemy.x === 487.25 && enemy.y === 661.75){

        rand10 = Math.round(random(1,2));

        console.log(rand10)

        switch(rand10){

            case 1 : enemy.velocityX = 0;
                     enemy.velocityY = -10;
                     break;
                    
            case 2 : enemy.velocityX = 10;
                     enemy.velocityY = 0;
                     break;

        }  

    }

    if(enemy.x === 782.75 && enemy.y === 30){

        rand11 = Math.round(random(1,2));

        console.log(rand11)

        switch(rand11){

            case 1 : enemy.velocityX = 0;
                     enemy.velocityY = 10;
                     break;
                    
            case 2 : enemy.velocityX = 10;
                     enemy.velocityY = 0;
                     break;

    
                    }                 
        
    }  

        if(enemy.x === 1152.5 && enemy.y === 30){

            rand12 = Math.round(random(1,2));
    
            console.log(rand12)
    
            switch(rand12){
    
                case 1 : enemy.velocityX = 0;
                         enemy.velocityY = 10;
                         break;
                        
                case 2 : enemy.velocityX = -10;
                         enemy.velocityY = 0;
                         break;
    
            }  
    

        }

        if(enemy.x === 1152.5 && enemy.y === 30){

            rand13 = Math.round(random(1,2));
    
            console.log(rand13)
    
            switch(rand13){
    
                case 1 : enemy.velocityX = -10;
                         enemy.velocityY = 0;
                         break;
                        
                case 2 : enemy.velocityX = 10;
                         enemy.velocityY = 0;
                         break;
    
            }  
    

        }

        if(enemy.x === 50 && enemy.y === 520.95){

            rand14 = Math.round(random(1,2));
    
            console.log(rand14)
    
            switch(rand14){
    
                case 1 : enemy.velocityX = 10;
                         enemy.velocityY = 0;
                         break;
                        
                case 2 : enemy.velocityX = 0;
                         enemy.velocityY = -10;
                         break;
    
                         
            }

        }

        if(enemy.x === 930 && enemy.y === 220){

            rand15 = Math.round(random(1,2));
    
            console.log(rand15)
    
            switch(rand15){
    
                case 1 : enemy.velocityX = 10;
                         enemy.velocityY = 0;
                         break;
                        
                case 2 : enemy.velocityX = 0;
                         enemy.velocityY = -10;
                         break;
    
                         
            }

    

        } 

        if(enemy.x === 1330 && enemy.y === 220){

            rand16 = Math.round(random(1,2));
    
            console.log(rand16)
    
            switch(rand16){
    
                case 1 : enemy.velocityX = 0;
                         enemy.velocityY = -10;
                         break;
                        
                case 2 : enemy.velocityX = 0;
                         enemy.velocityY = 10;
                         break;
    
                         
            }

        

    

        } 

        if(enemy.x === 1300 && enemy.y === 50){

            enemy.velocityX = 0;
            enemy.velocityY = 10;
    
                         
            
    
        }

        if(enemy.x === 930 && enemy.y === 679.25){

            rand17 = Math.round(random(1,2));
    
            console.log(rand17)
    
            switch(rand17){
    
                case 1 : enemy.velocityX = 0;
                         enemy.velocityY = -10;
                         break;
                        
                case 2 : enemy.velocityX = -10;
                         enemy.velocityY = 0;
                         break;
    
                         
            }

        

    

        } 

        if(enemy.x === 1300 && enemy.y === 679.25){

            rand18 = Math.round(random(1,2));
    
            console.log(rand18)
    
            switch(rand18){
    
                case 1 : enemy.velocityX = 0;
                         enemy.velocityY = -10;
                         break;
                        
                case 2 : enemy.velocityX = -10;
                         enemy.velocityY = 0;
                         break;
    
                         
            }

        

    

        }
        
        if(player.isTouching(ball1)){
            ball1.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball2)){
            ball2.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball3)){
            ball3.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball4)){
            ball4.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball5)){
            ball5.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball6)){
            ball6.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball7)){
            ball7.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball8)){
            ball8.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball9)){
            ball9.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball10)){
            ball10.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball11)){
            ball11.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball12)){
            ball12.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball13)){
            ball13.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball14)){
            ball14.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball15)){
            ball15.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball16)){
            ball16.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball17)){
            ball17.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball18)){
            ball18.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball19)){
            ball19.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball20)){
            ball20.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball21)){
            ball21.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball22)){
            ball22.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball23)){
            ball23.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball24)){
            ball24.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball25)){
            ball25.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball26)){
            ball26.destroy();

            ballNum -= 1;
        }

        if(player.isTouching(ball27)){
            ball27.destroy();

            ballNum -= 1;
        }

        if(enemy.isTouching(player)){
            lives -= 1;
        }

    

}

