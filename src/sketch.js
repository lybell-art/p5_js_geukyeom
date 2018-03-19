function setup()
{
	createCanvas(window.innerWidth,window.innerHeight);
	noStroke();
}

function draw()
{
	background(255);
	fill(255,0,map(mouseX,0,width,0,255));
	rect(width/2-25,height/2-25,50,50);
	line(1,1,50,50);
}

function windowResized()
{
	resizeCanvas(window.innerWidth,window.innerHeight);
}
