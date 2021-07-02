const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
let b1, b2, b3;

let cols02, rows02;
let scl02 = 40;
let w02 = 1600;
let h02 = 1200;



function setup() {
   createCanvas(400, 400, WEBGL);
   
   c1 = color(255, 204, 36);
   c2 = color(255, 36, 117);
   c3 = color(255, 18, 216);
   
   b1 = color(140,20, 20);
   b2 = color(12, 10, 10);
   b3 = color(120, 10, 18);

   t1 = color(39, 255, 253);
   t2 = color(240, 255, 253);
   t3 = color(100, 100, 200);

   cols02 = w02 / scl02;
   rows02 = h02 / scl02;
   
}


function draw() {
  
  push();
  translate(0, height * -0.3, width * -2);
  setGradient(-width*2, -height*1.5 , width * 4, height*3 , b3, b2, b1, Y_AXIS);
  pop();
  
  
  push();
  translate(width * -2, height * -0.2, 0);
  rotateX(radians(90));
  //rotateZ(radians(45));
  for (let y = 0; y < rows02 - 1; y++) {
        for (let x = 0; x < cols02; x++) {
        fill(b2);
        stroke(t2);
        rect(x*scl02, y*scl02, scl02, scl02);
        }
    }
  pop();

  push();
    fill(t2);
    //rotateX(radians(22));
    translate(0, 0, width * 0.4);
    noStroke();
    rectMode(CENTER);
    rect(0,0, width*0.05, height* 0.35);
    rect(0, height * 0.05, width*0.2, height* 0.05);
  
    push();
      translate(width * -0.35, 0, width * -0.4);
      rect(0,0, width*0.05, height* 0.35);
      rect(0, height * 0.05, width*0.2, height* 0.05);
    pop();
  
    push();
      translate(width * 0.35, 0, width * -0.4);
      rect(0,0, width*0.05, height* 0.35);
      rect(0, height * 0.05, width*0.2, height* 0.05);
    pop();
  pop();
 
  save("20210702.png");
  noLoop();
  
  
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}
