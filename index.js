var cvs = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var fish = "images/baby fish.png"
var background = "images/background.png"
var floor = "images/floor(1).png"
var topPillar = "images/woodPillarTop.jpg"
var botPillar = "images/woodPillarBot.png"
var gap = 80
var gravity = 1.5
var constant = topPillar.height+gap
var fishXAxis = 10
var fishYAxis = 150


function draw(){
   ctx.drawImage(background,0,0)
   ctx.drawImage(topPillar,100,0)
   ctx.drawImage(botPillar,100,0+constant)
   ctx.drawImage(floor,0,cvs.height-floor.height)
   ctx.drawImage(fish,fishXAxis,fishYAxis)
}
draw();