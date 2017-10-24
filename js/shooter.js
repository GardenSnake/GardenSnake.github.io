var player;
var bullets;
var zombies;
var angle;
var speed =1;
var zombieSpeed = .3;
var roundNumber=0;
var gameOver=false;

function setup() {
	createCanvas(800,800);
	player = createSprite(400, height/2, 30, 30);
	player.shapeColor = color(30,100,200);
	bullets = new Group();
	zombies = new Group();
}

function draw(){
	background(44);
	if(!gameOver){
		if (zombies.length==0)
			newRound();
		for(var i =0;i<zombies.length;i++)
			zombies[i].attractionPoint(1,player.position.x,player.position.y);
		
		move()
		zombies.overlap(bullets, zombieHit);

		if(zombies.overlap(player)){
			gameOver=true;
			player.shapeColor=color(153,0,0);
		}
	}
	drawSprites();
	showText();
}

function newRound(){
	roundNumber++;
	zombieSpeed +=.3;
	for (var i =0;i<10;i++){
		var w= random(width)+(random(0,1)>.5?-800:800);
		var h= random(height)+(random(0,1)>.5?-800:800);
		var zombie = createSprite(w,h,20,20);
		zombie.shapeColor = color(50,150,50);
		zombie.maxSpeed = zombieSpeed;
		zombies.add(zombie);
    }
}

function move(){
	if(keyIsDown(UP_ARROW)||keyIsDown(87))
		player.position.y-=speed;
	if(keyIsDown(DOWN_ARROW)||keyIsDown(83))
		player.position.y+=speed;
	if(keyIsDown(LEFT_ARROW)||keyIsDown(65))
		player.position.x-=speed;
	if(keyIsDown(RIGHT_ARROW)||keyIsDown(68))
		player.position.x+=speed;
		
	player.position.x = constrain(player.position.x,0+(player.width/2),width-(player.width/2));
	player.position.y = constrain(player.position.y,0+(player.height/2),height-(player.height/2));
}

function mousePressed(){
	var bullet = createSprite(player.position.x, player.position.y,3,3);
	bullet.shapeColor = color(255,255,255);
	angle = degrees((createVector(mouseX-player.position.x,mouseY-player.position.y)).heading());
	bullet.setSpeed(4, angle);
	bullet.life = 100;
	bullets.add(bullet);
}

function zombieHit(zombie,bullet){
	if(bullet.position.x>0&&bullet.position.x<width&&bullet.position.y>0&&bullet.position.y<height){
		zombie.remove();
		bullet.remove();
	}
}

function showText(){
	fill(255);
	textSize(12);
	textAlign(CENTER);
	if(roundNumber==1)
			text("Click mouse to shoot. \n Press arrow keys to move",width/2,15);
	text("Round "+roundNumber,width/2,height-15);
	if(gameOver){
		textSize(64);
		text("GAME \nOVER",width/2,height/2);
	}
}