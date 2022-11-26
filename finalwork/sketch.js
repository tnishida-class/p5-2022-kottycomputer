// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let speed;
let cycle;
let sel;
let sel2;


function setup(){
  createCanvas(500, 500, WEBGL);
  describe('a rotating white torus');

  speed =0;
  cycle = 80;
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2; 

  textAlign(CENTER);
  stroke(30)
  sel = createSelect();
  sel.position(200, 200);
  sel.option('Is it a hula hoop...?');
  sel.option('It is a donut!!!!');
  sel.changed(mySelectEventssss);

  textAlign(CENTER);
  stroke(10)
  sel2 = createSelect();
  sel2.position(20, 70);
  sel2.option('矢印で生き物を動かしてね');
  sel2.option('表情に注目♡');
  sel2.changed(mySelectEventssss);
}




function draw(){
  
  background(247, 229, 87);
  speed = (speed+1.5) % cycle;
  let size = -speed;
 
 

  if(x>-90&&x<90&&y>-90&&y<90){
    ellipse(x, y, size+200);
    
    fill(209, 6, 6)
    ellipse(x+5,y+15,50,30)
    fill(10)
  ellipse(x+15,y-10,10)
  ellipse(x,y-10,10)

  fill(237, 237, 237)
  ellipse(x+15,y-10,4)
  ellipse(x,y-10,4)

  }

  else{
    
    ellipse(x, y, size+150);
    fill(209, 6, 6)
    ellipse(x+5,y,10,7)

    fill(10)
  ellipse(x+10,y-10,5)
  ellipse(x,y-10,5)
  }
  
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ 
    speed = (speed+3) % cycle; }
  if(keyIsDown(" ".charCodeAt(0))){ 
    x += vx;
    y += vy;
  
    // 跳ね返りは「速度 × -1」
    if(x < 0 || x > width){ vx = -0.1 * vx; }
    if(y < 0 || y > height){ vy = -0.1 * vy;}
  }

  fill(224, 120, 45)
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(40, 20);
  noStroke(0);
}
 


function mySelectEventssss() {
  let item = sel.value();
  text("it's a " + item + '!', 100, 100);
}

function mySelectEventssss2() {
  let item = sel2.value();
  text("it's a " + item + '!', 100, 100);
}
