function setup() {
  createCanvas(600, 600, WEBGL);
  ortho();
  smooth(6);
}
let f2D_val = 0.0;
let f2D_size = 25;
let f2D_amount = 12;
let f2D_offset = 1;
let f2D_ampli = 110;
let rf_col = 25;

function draw() {
  directionalLight(100, 255, 100, -1, 1, 0);
  ambientLight(80, 80, 200);
  //ambient(#fff000);
  background(1 + rf_col);  
  translate(-10, -100, 0);
  rotateX(PI/3);
  rotateZ(PI/4);

  for (let i = -f2D_amount/2; i < f2D_amount/2; i++) {
    for (let j = -f2D_amount/2; j < f2D_amount/2; j++) {
      translate(f2D_size+f2D_offset, 0, 0);
      //box(size, size, ampli+size+(sin(val-abs((i-amount/2)*(j-amount/2))*0.05)*ampli));
      box(f2D_size, f2D_size, f2D_size + f2D_size + sin(f2D_val - (i*i+j*j) * 0.04) * f2D_ampli);
    }
    translate(-f2D_amount*(f2D_size+f2D_offset), f2D_size+f2D_offset, 0);
  }
  
  f2D_val+=0.05;
}
