var cvs = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var fish = new Image();
var background = new Image() ;
var floor = new Image();
var topPillar = new Image();
var botPillar = new Image();
var gap = 80
var gravity = 1.5
var constant = topPillar.height+gap
var fishXAxis = 10
var fishYAxis = 150

background.src = "images/background.png" ;
floor.src = "images/floor(1).png" ;
fish.src = "images/baby fish.png";
topPillar.src = "images/woodPillarTop.png";
botPillar.src = "images/woodPillar.jpg"

function draw(){

   ctx.drawImage(background,0,0)
   ctx.drawImage(topPillar,100,0)
   ctx.drawImage(botPillar,100,0+constant)
   ctx.drawImage(floor,0,cvs.height-floor.height)
   ctx.drawImage()
}
draw();