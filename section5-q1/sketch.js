// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(500, 500);
  background(255);
  balloon("kottycomputer",120,50,125,0);
  stroke(0,128,128);
  fill(0,128,128);
  line(210,260,270,260)
  line(270, 260, 170, 330);
  line(210, 260, 170, 330);
  triangle(210, 259, 270, 260, 170, 330);
  }


function balloon(t,x,y)
{
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 100;
  fill(0,128,128);
  noStroke(0);
  ellipse(x+140, y+120, w + p * 2, h + p *1.7);
  fill(255);
  text(t, p+x, h + p+y);
}



