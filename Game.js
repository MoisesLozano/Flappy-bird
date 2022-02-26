var canvas = document.getElementById("canvas")
var twoDim = canvas.getContext("2d")

//Images
var fish = newImage();
var background =newImage(images/ocean.jpg) ;
var floor = newImage(images/floor.png);
var topWall = newImage();
var botWall  = newImage();

fish.src = 
background.src = "images/ocean.jpg";
floor.src = "images/floor.png";

function draw(){
    twoDim.drawImage(background,0,0)
    twoDim.drawImage()
    twoDim.drawImage()
}