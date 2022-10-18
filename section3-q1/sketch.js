// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let speed;
let cycle;

function setup(){
  createCanvas(600, 600);
  speed =0;
  cycle = 100;
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2; 

}

function draw(){
  background(240,128,128);  
  speed = (speed+2) % cycle;
 
  console.log(speed)

  let size = -speed;
  ellipse(x, y, size+200,size+260);
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

  fill(158, 30, 30)
  }

 
