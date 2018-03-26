var db={
	rect:[{'x':10, 'y':40, 'w':40, 'h':40},
 		{'x':20, 'y':180, 'w':80, 'h':40},
		{'x':120, 'y':80, 'w':40, 'h':90},
		{'x':150, 'y':20, 'w':70, 'h':70},
		{'x':190, 'y':150, 'w':30, 'h':30}],
	ellipse:[{'x':100, 'y':80, 'r':80},
 		{'x':150, 'y':20, 'r':20},
		{'x':15, 'y':155, 'r':10},
		{'x':105, 'y':180, 'r':30},
		{'x':190, 'y':190, 'r':50}],
	line:[{'x':35, 'y':15, 'x2':80, 'y2':60},
 		{'x':90, 'y':35, 'x2':170, 'y2':115},
		{'x':30, 'y':140, 'x2':80, 'y2':190},
		{'x':130, 'y':190, 'x2':150, 'y2':210},
		{'x':205, 'y':30, 'x2':230, 'y2':55}]
};

function setup() {
	createCanvas(480,480);
	noFill();
	stroke(0);
}

function draw() {
	var i;
	scale(2);
	background(255);
	stroke("#0000ff");
	for(i=0;i<5;i++)
	{
		rect(db.rect[i].x,db.rect[i].y,db.rect[i].w,db.rect[i].h);
	}
	stroke(0);
	for(i=0;i<5;i++)
	{
		ellipse(db.ellipse[i].x,db.ellipse[i].y,db.ellipse[i].r,db.ellipse[i].r);
	}
	stroke("#ff0000");
	for(i=0;i<5;i++)
	{
		line(db.line[i].x,db.line[i].y,db.line[i].x2,db.line[i].y2);
	}
}
