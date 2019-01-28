function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);

}

function draw()
{
  //create a background using RGB values
  background(255,0,0)

  // change the paint brush to a specific color according to RGB values
  fill(0,0,0);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(200,250,300,10);
  rect(350,100,10,300);

  fill(255,255,255);

  rect(0,0,40,40);
  rect(659,459,40,40);
  rect(0,459,40,40);
  rect(659,0,40,40);


}
