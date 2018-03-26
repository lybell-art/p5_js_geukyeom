var p;
var u=10;

function setup()
{
	createCanvas(windowWidth,windowHeight);
	p=generateR(u);
}

function draw()
{
	background(0);
	for(var i=0;i<u;i++)
	{
		rect(p[i].x*width,p[i].y*height,20,20);
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function generateR(len)
{
	var res=[];
	for(var i=0;i<len;i++)
	{
		res[i]={'x':random(0,1), 'y':random(0,1)};
	}
	return res;
}
