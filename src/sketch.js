function setup() {
  createCanvas(480,480);
	noFill();
	stroke(0);
}

function draw() {
	scale(2);
  background(255);
	stroke("#0000ff");
	rect(10,40,40,40);
	rect(20,180,80,40);
	rect(120,80,40,90);
	rect(150,20,70,70);
	rect(190,150,30,30);
	stroke(0);
	ellipse(100,80,80,80);
	ellipse(150,20,20,20);
	ellipse(15,155,10,10);
	ellipse(105,180,30,30);
	ellipse(190,190,50,50);
	stroke("#ff0000");
	line(35,15,80,60);
	line(90,35,90+80,35+80);
	line(30,140,30+50,140+50);
	line(130,190,130+20,190+20);
	line(205,30,205+25,30+25);
}
