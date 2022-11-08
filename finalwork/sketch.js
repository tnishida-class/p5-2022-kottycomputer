// 最終課題を制作しよう

function setup(){
  createCanvas(700, 700);
  background(138, 82, 37);
  
  //円
  fill(10);
  //let x = 0;
  //let y=  0;
  for(let y=0; y< 5; y++)
  {for(let x=0; x< 5; x++)
    {
  ellipse(x*130+90, y*130+100, 100);
    }   
   
  }
  //円終わり

}

function draw(){
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
