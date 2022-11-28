function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2==0){
        fill(255)
      }
      else{
        fill(125)
      }
      rect(size * i, size * j, size, size)
      if(j < 3){
        if((i + j) % 2 == 1){
          fill(255,0,0)
          ellipse(size * i + size / 2, size * j + size/ 2, size)
        }
      }
      if(j > 4){
        if((i + j) % 2 == 1){
          fill(0)
          ellipse(size * i + size / 2, size * j + size/ 2, size)
        }
      }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}