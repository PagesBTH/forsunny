// my p5.js code
function setup() 
{
  var p;
  p = createCanvas(400, 400);
  p.position(300,200);
}


function draw()
{
  background(45,45,90);
  
  // roof of the house
  stroke(0);
  fill(24,116,42);
  triangle(75, 150, 327, 152, 200, 40);
  
  // the boottom
  fill(245, 245, 220);
  rect(75,150,250,250);

  // the door
  fill(139,79,54);
  rect(150,250, 75,150);
  
  // the knob
  fill(0,0,0);
  noStroke();
  ellipse(160, 330, 10,10);
  
   //house light
  fill(	192, 192, 192);
  fill(255,255,255);
  rect(5,200,70,5);
  fill(255,255,0);
  ellipse(20,210,12);
  // address of the house
  textSize(18);
  fill(0, 0, 0);
  text('22 Random St',130, 225);
  fill(255, 255, 255)
  circle(30, 40, 50);
  