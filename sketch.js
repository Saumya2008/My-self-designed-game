var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,
line11,line12,line13,line14,line15,line16,line17,line18,line19,line20,line21,line22,line23,line24,line25,
line26,line27,line28,line29,line30,line22,line31,line32,line33,line34,line35,line36,line37,line38,
line39,line40,line41,line42,line43;

var beam1,beam2,beam3,beam4,beam5,invisble_Door;

var bank,bank_Img,petrol,petrol_Img,police,police_Img,obstacle5,obstacle5_Img,obstacle4,obstacle4_Img;
var obstacle3,obstacle3_Img,obstacle2,obstacle2_Img,obstacle1,obstacle1_Img,thiefCar,theifCar_Img;

var Diamond, Diamond_Img,background,back_Img,wall,wall_Img;
var thief,beam6,beam7,beam8,beam9,beam10;

var gameState = "serve";
var reset = (0);

function preload (){
//loading images here
   Diamond_Img = loadImage("Sprites/Diamond.png");
   back_Img = loadImage("Sprites/background.jpg");
   wall_Img = loadImage("wall 1.png");
   
}

function setup(){
    createCanvas(900,600);
     
    Diamond = createSprite(330,300);
    Diamond.addImage(Diamond_Img);
    Diamond.scale = 0.3;

    thief = createSprite(30,30,20,20);
    thief.shapeColor = "purple";

    // All the Bottom lines from line1
    line1 = createSprite(450,560,750,10);
    line1.shapeColor = "black";
    line2 = createSprite(450,520,310,10);
    line2.shapeColor = "black";
    line3 = createSprite(450,600,1000,15);
    line3.shapeColor = "red";
    line4 = createSprite(900,450,15,1000);
    line4.shapeColor = "red";
    line5 = createSprite(0,450,15,1000);
    line5.shapeColor = "red";
    line6 = createSprite(500,0,900,15);
    line6.shapeColor = "Red";
    line7 = createSprite(715,560,220,10);
    line7.shapeColor = "black";
    line8 = createSprite(825,455,10,220);
    line8.shapeColor = "black";
    line10 = createSprite(182,560,220,10);
    line10.shapeColor = "black";
    line11 = createSprite(193,520,130,10);
    line11.shapeColor = "black";
    line12 = createSprite(687,520,170,10);
    line12.shapeColor = "black";
    line30 = createSprite(450,480,470,10);
    line30.shapeColor = "black";
    line31 = createSprite(600,430,260,10);
    line31.shapeColor = "black";
    line32 = createSprite(305,430,250,10);
    line32.shapeColor = "black";
    line39 = createSprite(430,380,420,10);
    line39.shapeColor = "black";
    line40 = createSprite(445,340,290,10);
    line40.shapeColor = "black";

   // All the up lines from 13
    line13 = createSprite(188,30,220,10);
    line13.shapeColor = "black";
    line14 = createSprite(450,32,190,10);
    line14.shapeColor = "black"; 
    line15 = createSprite(680,32,290,10);
    line15.shapeColor = "black";
    line20 = createSprite(450,67,650,10); 
    line20.shapeColor = "black";
    line23 = createSprite(370,110,400,10); 
    line23.shapeColor = "black";
    line24 = createSprite(650,110,100,10); 
    line24.shapeColor = "black";
    line27 = createSprite(650,150,100,10);   
    line27.shapeColor = "black";             
    line28 = createSprite(500,150,100,10); 
    line28.shapeColor = "black";
    line29 = createSprite(455,150,550,10);
    line29.shapeColor = "black";
    line33 = createSprite(465,200,450,10);
    line33.shapeColor = "black";
    line38 = createSprite(445,240,290,10);
    line38.shapeColor = "black";     

    //left side.
    line16 = createSprite(75,220,10,390);
    line16.shapeColor = "black";
    line18 = createSprite(130,380,10,290);  
    line18.shapeColor = "black";  
    line21 = createSprite(130,155,10,180);
    line21.shapeColor = "black";
    line25 = createSprite(180,290,10,280);
    line25.shapeColor = "black";
    line34 = createSprite(220,305,10,150);
    line34.shapeColor = "black";
    line37 = createSprite(260,300,10,100);
    line37.shapeColor = "black";
    line41 = createSprite(300,290,10,105);
    line41.shapeColor = "black";
    line9 = createSprite(75,488,10,150);
    line9.shapeColor = "black";

    //right side.
    line17 = createSprite(825,193,10,330);
    line17.shapeColor = "black";  
    line19 = createSprite(770,350,10,350);    
    line19.shapeColor = "black";
    line22 = createSprite(770,160,10,190);
    line22.shapeColor = "black";
    line26 = createSprite(730,290,10,280 );
    line26.shapeColor = "black";
    line35 = createSprite(690,290,10,180);
    line35.shapeColor = "black";
    line36 = createSprite(640,312,10,140 );
    line36.shapeColor = "black";
    line42 = createSprite(590,273,10,75);
    line42.shapeColor = "Black"

    //creating sprites for laser beams
    beam1 = createSprite(540,273,5,60);
    beam1.shapeColor = color("Red");
    beam1.velocityY = 2;
    beam1.visible = false
    
    beam2 = createSprite(490,307,5,60);
    beam2.shapeColor = color("Red");
    beam2.velocityY = 2;
    beam2.visible = false

    beam3 = createSprite(440,273,5,60);
    beam3.shapeColor = color("Red");
    beam3.velocityY = 2;
    beam3.visible = false

    beam4 = createSprite(390,307,5,60);
    beam4.shapeColor = color("Red");
    beam4.velocityY = 2;
    beam4.visible = false

    beam5 = createSprite(130,155,20,60);
    beam5.shapeColor = color("Red");
    beam5.velocityY = 4;
 
    beam6 = createSprite(75,220,20,60);
    beam6.shapeColor = color("Red");
    beam6.velocityY = 4;   

    beam7 = createSprite(450,560,60,20);
    beam7.shapeColor = color("red");
    beam7.velocityX = 4;

    beam8 = createSprite(450,430,60,20);
    beam8.shapeColor = color("red");
    beam8.velocityX = 4;

    beam9 = createSprite(825,430,20,60);
    beam9.shapeColor = color("red");
    beam9.velocityY = 4; 

    beam10 = createSprite(770,350,20,60);
    beam10.shapeColor = "red";
    beam10.velocityY = 4;

    invisble_Door = createSprite(590,325,10,10);
    invisble_Door.shapeColor = color("Black");
    invisble_Door.visible = false
    
}

function draw(){
  background(back_Img);
  
  //creating beams and bouncing them from the lines
  createEdgeSprites();
  beam1.bounceOff(line40);
  beam1.bounceOff(line38);
  beam2.bounceOff(line40);
  beam2.bounceOff(line38);
  beam3.bounceOff(line40);
  beam3.bounceOff(line38);
  beam4.bounceOff(line40);
  beam4.bounceOff(line38);
  beam5.bounceOff(line11);
  beam5.bounceOff(line20);
  beam6.bounceOff(line13);
  beam6.bounceOff(line10);
  beam7.bounceOff(line9);
  beam7.bounceOff(line8);
  beam8.bounceOff(line26);
  beam8.bounceOff(line25);
  beam9.bounceOff(line7);
  beam9.bounceOff(line15);
  beam10.bounceOff(line12);
  beam10.bounceOff(line20);

  thief.collide(line1);
  thief.collide(line2);
  thief.collide(line3);
  thief.collide(line4);
  thief.collide(line5);
  thief.collide(line6);
  thief.collide(line7);
  thief.collide(line8);
  thief.collide(line9);
  thief.collide(line10);
  thief.collide(line11);
  thief.collide(line12);
  thief.collide(line13);
  thief.collide(line14);
  thief.collide(line15);
  thief.collide(line16);
  thief.collide(line17);
  thief.collide(line18);
  thief.collide(line19);
  thief.collide(line20);
  thief.collide(line21);
  thief.collide(line22);
  thief.collide(line23);
  thief.collide(line24);
  thief.collide(line25);
  thief.collide(line26);
  thief.collide(line27);
  thief.collide(line28);
  thief.collide(line29);
  thief.collide(line30);
  thief.collide(line31);
  thief.collide(line32);
  thief.collide(line33);
  thief.collide(line34);
  thief.collide(line35);
  thief.collide(line36);
  thief.collide(line37);
  thief.collide(line38);
  thief.collide(line39);
  thief.collide(line35);
  thief.collide(line36);
  thief.collide(line37);
  thief.collide(line38);
  thief.collide(line39);
  thief.collide(line40);
  thief.collide(line41);
  thief.collide(line42);

  if (keyDown("left")){
    thief.x=thief.x-10;
    }
            
          if (keyDown("right")){
          thief.x=thief.x+10;
          }
          
          if (keyDown("up")){
            thief.y=thief.y-10;
            }
             
            if (keyDown("down")){
              thief.y=thief.y+10;
              }

  if(thief.isTouching(invisble_Door)){
     beam1.visible = true
     beam2.visible = true
     beam3.visible = true
     beam4.visible = true
  }
 
  if(thief.isTouching(beam6)){
    reset();
   }

    drawSprites();
}

function reset(){
  thief.x = 30;
  thief.y = 30;

}