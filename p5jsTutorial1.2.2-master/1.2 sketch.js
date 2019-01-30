// I worked with Danny
function setup()
{
  createCanvas(700,500);

}

function draw()
{
	background(255,0,0)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(0,0,0);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(0,0,0);

	// modifies the thickness of the border of an object
	strokeWeight(0);


	rect(150,250,400,20);
	rect(340,60,20,400);


	fill(191,79,219);
  stroke(255,55,255);
	strokeWeight(100);
	stroke(255,255,255);
	strokeWeight(5);

	rect(160,330,40,100);
  rect(250,330,40,100);
	rect(170,100,40,100);
  rect(400,100,40,100);
  rect(490,120,40,80);
  rect(400,330,40,100);
  rect(470,390,100,40);
  dot(300,300,1000,1000);

}
