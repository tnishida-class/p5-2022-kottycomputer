// 最終課題を制作しよう

function setup(){
  createCanvas(700, 700);
  background(138, 82, 37);
  //円
  fill(10);
  //let x = 0;
  //let y=  0;
  for(let y=0; y< 10; y++)
  {for(let x=0; x< 10; x++)
    {
  ellipse(x*100, y*100, 80);
    }   
   
  }
  //円

}

function draw(){
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
