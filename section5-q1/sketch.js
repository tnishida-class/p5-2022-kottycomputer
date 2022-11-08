// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(1000, 1000);
  background(255);
  balloon("kottycomputer",200,90);
  stroke(0,128,128);
  fill(0,128,128);
  
  
  }


function balloon(t,x,y)
{
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 100;
  fill(0,128,128);
  noStroke(0);
  ellipse(x+140, y+120, w + p * 2, h + p *1.7);
  triangle(x+110, y+209, x+170, y+210, x+70, y+280);
  fill(255);
  text(t, p+x, h + p+y);
}



