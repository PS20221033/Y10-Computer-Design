var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 430;


}

function draw()
{
	background(125,125,125)


	if (mouseX > 590 && mouseX < 590 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(590,10,100,50);
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(590,10,100,50);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Choi",625,40);




	fill(10,430,200,200,255);
	stroke(255,255,255);
	rect(10,430,100,50);

	if (mouseX > 10 && mouseX < 10 + 105 && mouseY > 420 && mouseY < 420+50)
	{
		fill(248,89,255);
		stroke(51,70,190);
		textSize(16);
		text("Adrian",button2X+30-5,button2Y+30+2);
	}
	else
	{
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Adrian",button2X+30,button2Y+30);
	}

}
