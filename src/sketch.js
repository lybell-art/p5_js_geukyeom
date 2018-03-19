function setup()
{
	createCanvas(window.innerWidth,window.innerHeight);
	fill("#ff0000");
	noStroke();
}

function draw()
{
	background(255);
	rect(width/2-25,height-25,50,50);
}

function windowResized()
{
	resizeCanvas(window.innerWidth,window.innerHeight);
}
