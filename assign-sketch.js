let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;
let ball;

let r = 25;

function setup() {
  createCanvas(640, 360);
}

function preload(){
  ball = loadImage('ball.png');
}

function draw() {
  background(0);
  image(ball,x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
  fill(255,255,0);
  text(mouseX + "," + mouseY, 150, 150);


}