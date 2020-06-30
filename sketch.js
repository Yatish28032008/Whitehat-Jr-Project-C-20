
var r = 255;
var g = 255;
var b = 255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(
    innerWidth,
    innerHeight
  );
}


function draw(){
  background(r,g,b);

  // change the value of Red based on the mouse movement about the X axis
  if (mouseX>10 && mouseX<300){
    r=r-90;
  }
  if (mouseX>23 && mouseX<970){
    r=r-57;
  }
  if (mouseX>46 && mouseX<777){
    r=213;
  }
  // change the value of Green based on the mouse movement about the X axis\
 if (mouseX>300 && mouseX<600){
    g=g-80;
  }
  if (mouseX>725 && mouseX<285){
    g=g-120;
  }
  if (mouseX>67 && mouseX<352){
    g=135;
  }
  // change the value of Blue based on the mouse movement about the X axis
  if (mouseX>600 && mouseX<1200){
    b=b-30;
  }
  if (mouseX>530 && mouseX<124){
    b=b-54;
  }
  if (mouseX>989 && mouseX<59){
    b=45;
  }

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse(mouseX,mouseY,50,50);
  
  // Remember to fill the canvas with white paint before creating the ellipse.
}