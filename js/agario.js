/* This project uses p5.js javascript library to recreate Agar.io game
Project follow this tutorial: https://www.youtube.com/watch?v=JXuxYMGe4KI
*/
function Blob(x,y,h){//**************************Blob
	this.pos = createVector(x,y);//set xy position
	this.r = h;//set radius of blob
	this.vel = createVector(0,0);//velocity vector used for player blob

	this.show = function(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.r*2,this.r*2);
	}
	
	this.eats = function(blob){
		//calculates distance between (middle point of) Big blog and blob 
		var d = p5.Vector.dist(this.pos,blob.pos);
		if (d < this.r + blob.r){//if eaten, increase size relative of radius of eaten blob
			var sum = (PI * this.r * this.r + PI * blob.r * blob.r);
			this.r = sqrt(sum/PI);
			totEaten++;
			return true;
		}else{
			return false;
		}
	}
	
	this.update = function(){
		//Making sure blob doesn't go past border
		if(this.pos.x<-width)
			this.pos.x =-width;
		if(this.pos.x>width)
			this.pos.x = width;
		if(this.pos.y<-height)
			this.pos.y =-height;
		if(this.pos.y>height)
			this.pos.y = height;
		//defining vector for velocity. next line finds (+/-) xy direction to go
		var newVel = createVector((mouseX-width/2), (mouseY-height/2));//mouse position (center of window)
		newVel.setMag(3);//sets magnitude of vector
		this.vel.lerp(newVel,0.2);
		this.pos.add(this.vel);
	}
}//**********************************************Blob

var blob; //Player blob
var blobs = []; //enemy blobs
var totBlobs = 50;//total enemy blobs
var zoom = 1;//starting scale is 1
var totEaten = 0;

function setup(){//******************************SETUP
	createCanvas(1000,1000);//sets width and height 
	blob = new Blob(0,0, 32);//initalize player blob
	for(var i =0;i<totBlobs;i++){//initalize enemy blobs in random positions
		var x = random(-width,width);
		var y = random(-height,height);
		blobs[i] = new Blob(x,y,random(12,24));
	}
}//**********************************************SETUP

function draw(){//*******************************DRAW
	background(0);//black backround
	//print informative text onto screen
	fill(200);
	text("Size: "+int(blob.r),10,12);
	text("Total eaten: " +totEaten, 10, 28);
	
	//if enemy blob eaten, add a new one at a random position
	if(blobs.length<totBlobs)
		blobs[blobs.length]= new Blob(random(-width,width),random(-height,height),random(12,24));
		
	translate(width/2,height/2);//translate to center (instead of 0,0)
	var newzoom = 64/blob.r;//new scale increases as blob increases
	zoom = lerp(zoom,newzoom,0.1);
	scale(zoom);//scale to current size of blob
	translate(-blob.pos.x,-blob.pos.y);
	
	//show enemy blobs, if eaten take out of array
	for(var i = blobs.length-1;i>=0;i--){
		blobs[i].show();
		if(blob.eats(blobs[i])){
			blobs.splice(i,1);
		}
	}
	blob.show();
	blob.update();
}//**********************************************DRAW