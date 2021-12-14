let frogX=300;
let frogY=200;
let frogXVelocity=2;
let frogYVelocity= 2;
let yourScore= 0;
let yourLife=5;
let youTap=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);	
}
function draw() {
	background(185,250,243);
	
	fill(255)
	noStroke();
	ellipse(100,80,40,40);
	ellipse(155,80,40,40);
	ellipse(130,90,50,50);
	ellipse(125,70,50,40);
	
	ellipse(900,30,40,40);
	ellipse(955,30,40,40);
	ellipse(930,36,50,50);
	ellipse(925,22,50,40);
	
	ellipse(1500,60,50,40);
	ellipse(1555,60,40,40);
	ellipse(1530,66,50,50);
	ellipse(1525,52,50,40);  	
//frog 
	noStroke();
	fill(42,149,14);
	ellipse(frogX,frogY,190,50);
	fill(20,216,57);
	ellipse(frogX,frogY-50,100,100);
	ellipse(frogX+45,frogY-10,30,50);
	ellipse(frogX-45,frogY-10,30,50);
	fill(255);
	ellipse(frogX+30,frogY-100,50,50);
	ellipse(frogX-30,frogY-100,50,50);
	fill(128)
	ellipse(frogX+30,frogY-100,30,30);
	ellipse(frogX-30,frogY-100,30,30);
	fill(255,0,0);
	rectMode(CENTER);
	rect(frogX,frogY-50,50,8);
	fill(0,0,255,20);
	ellipse(frogX,frogY-50,200,200);
	fill(255,80);
	
	//animation
	frogX=frogX + frogXVelocity;
	frogY=frogY + frogYVelocity;
	 //
	if(frogX>width){
		frogXVelocity=frogXVelocity *-1;
  }
	if(frogX<0){
	  frogXVelocity=frogXVelocity *-1;
	}
	if(frogY>height){
		frogYVelocity=frogYVelocity *-1;
	}
	if(frogY<0){
		frogYVelocity=frogYVelocity *-1;
	}
	
		//typeface
 stroke(0,100,0);
 strokeWeight(4);
 fill(124,252,0);
 textSize(100);
 text(yourScore, width*0.85, height-110);
 text(yourLife, width*.1, height-110);
textSize(72);
text("Earn Points", width * 0.78,height*0.96);
text("LifeLines", width * 0.05,height*0.96);
	
if(yourLife== -1){
	background(185,250,243);
	
	stroke(0,100,0);
  strokeWeight(4);
  fill(124,252,0);
  textSize(150);
  text("Game Over", 500, height-600);	
  }
}

function mousePressed(){
	let d=dist(frogX,frogY,mouseX,mouseY);
	if (d<=50){
		yourScore=yourScore+1;
		frogX=random(0,width);
		frogY=random(0,height);
		frogXVelocity *=1;
		frogYVelocity *=1;

	  }
		if (d>50){
		yourLife-=1;
		frogX=random(0,width-0.75);
		frogY=random(0,height-0.75);
		youTap=0;
	  }
}