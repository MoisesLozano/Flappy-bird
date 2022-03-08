const cvs = document.getElementById("c");
const ctx = cvs.getContext("2d");


// Images 
const fish = new Image();
const background = new Image();
const floor = new Image();
const topPillar = new Image();
const botPillar = new Image();

fish.src ="images/baby fish.png";
background.src ="images/background.png";
floor.src = "images/floor(1).png";
topPillar.src = "images/woodPillarTop.png";
botPillar.src = "images/woodPillarBot.jpg";


const gap = 150; // space between pillars 
var constant;

var fX = 10 ;// fish x axis
var fY = 150; // fish y axis 

var gravity = 2;// 

var score = 0; // score to be kept


// audios 
const swim = new Audio();
const scor = new Audio();
const hit = new Audio();

hit.src = "sounds/dying sound.mp3";
swim.src = "sounds/Jump.mp3";
scor.src = "sounds/score.mp3";

cvs.addEventListener("click", moveUp); // event listener for click/jump/swim

function moveUp(){

fY -=40;
swim.play();
} // jump feature with swim audio 

var pillar =[]; // defines pillar

pillar[0]= {
   x : cvs.width ,
   y : 0
};

// makes the pictures on the canvas
function draw(){
   
   ctx.drawImage(background,0,0);// makes background in canvas
   
   for(var i = 0; i < pillar.length; i++){
      constant = topPillar.height+gap;
      ctx.drawImage(topPillar,pillar[i].x,pillar[i].y);
      ctx.drawImage(botPillar,pillar[i].x,pillar[i].y+constant);
      
      pillar[i].x--; // moves pillar to the left

      if( pillar[i].x == 125){
         pillar.push({
            x : cvs.width,
            y : Math.floor(Math.random()*topPillar.height)-topPillar.height
         }); // makes new pillars to go through 
      }

   if( fX + fish.width >= pillar[i].x && fX <= pillar[i].x + topPillar.width && (fY <= pillar[i].y + topPillar.height|| fY + fish.height >= pillar
      [i].y + constant)|| fY + fish.height >= cvs.height - floor.height){ 
         location.reload(); // reloads when you make impact with pillars
      }
      if( pillar[i].x == 5){
         score++;
      
      }
   }

   ctx.drawImage(floor,0,cvs.height-floor.height); // makes the floor on the bottom in canvas
   
   ctx.drawImage(fish,fX,fY);// draws the fish in canvas
   
   fY += gravity;
   
   ctx.style = "#000";
   ctx.font= "30px serif";
   
   ctx.fillText("Score:"+score,500,cvs.height-20);

   requestAnimationFrame(draw);
}
draw();