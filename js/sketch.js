//This project uses the p5.js library. check https://p5js.org/reference/ for reference

//set initial rgb value to (255,255,255) = white
var redValue = 255, greenValue = 255, blueValue = 255;

function setup() {
//Create Background
	createCanvas(800, 800);
	background(33);
}
 
function draw() {
}

//Draw something when mouse is dragged on canvas
function mouseDragged() {
	fill(redValue,greenValue,blueValue);
	noStroke();
	ellipse(mouseX,mouseY,10,10);
}

//get random rgb values to select a new color 
function getRandomColor() {
	redValue = Math.floor(Math.random() * 256);
	greenValue = Math.floor(Math.random() * 256);
	blueValue = Math.floor(Math.random() * 256);
	//change button color to indicate current color selected
	document.getElementById("randomButton").style.backgroundColor = "rgb("+ redValue +","+greenValue+","+blueValue+")";
}