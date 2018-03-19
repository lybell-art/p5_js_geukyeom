function setup()
{
	createCanvas(windowWidth,windowHeight);
	fill("#ff0000");
	noStroke();
}

function draw()
{
	background(255);
	rect(mouseX-25,mouseY-25,50,50);
}

function windowResized()
{
	resizeCanvas(windowWidth,windowHeight);
}
