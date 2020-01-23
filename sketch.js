function setup() {
  createCanvas(800, 600);
}
function draw() {
  let t = second(); 
  
  background(0);
  textSize(32); 
  let h = hour();
  let m = minute(); 
  let s = second(); 
  
  strokeWeight(3); 
  stroke(109, 239, 215); 
  noFill(); 
  arc(400,300,440,440,1.5*PI,(s/30*PI-HALF_PI+0.0001));
  
  stroke(252, 243, 134); 
  arc(400,300,280,280,1.5*PI,(m/30*PI-HALF_PI+0.0001));
  
  stroke(255, 162, 162); 
  arc(400,300,100,100,1.5*PI,((h%12)/6*PI-HALF_PI+0.0001));

  if (s == 0) {
    fill(109, 239, 215); 
    noStroke(); 
    text(m, 60, 60);
  }
   
}

