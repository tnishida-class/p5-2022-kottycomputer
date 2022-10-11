// 小手調べ
function setup()
{createCanvas(1000, 1000);
  for(let i = 0; i < 10; i++){
    // BLANK[1]
    let x=i*10+10
    noFill();
    if(i<5){stroke(0, 0, 255)}
    else{stroke(255, 0, 0)}
    ;
  ellipse(100, 100, x);
  
  }
}
