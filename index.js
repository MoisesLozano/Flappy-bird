var cvs = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

var fish = new Image();
var background = new Image() ;
var floor = new Image();
var topWall = new Image();
var botWall  = new Image();

background.src = "images/ocean.jpg" ;
floor.src = "images/floor.png" ;

function draw(){
   ctx.drawImage(background,0,0)
}