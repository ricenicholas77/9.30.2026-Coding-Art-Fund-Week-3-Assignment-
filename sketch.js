let x,y,d;
let numCircles;
let spacing;
let i;
let colorPalette = ['#43298C', '#7F8C29','#8C7829', '#282237', '#353722', '#373322', '#E2D7FF', '#FAFFD7','#FFF4C9','#D2C2FF'];
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  d = width/2;
  numCircles = 10;
  spacing = d/numCircles;
}


function draw() {
  background(0);
  d = width/2;
  for (i = 0; i < numCircles; i++)
  {
  fill(colorPalette[i]);
  rectMode(CENTER);
  rect(x,y,d);
  d = d - spacing;
  }
}
