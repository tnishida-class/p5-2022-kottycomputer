// チェッカー
function setup() {
  createCanvas(windowWidth, windowHeight);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++)
    {  
      if((i+j)%2!=0)
      {fill(125);  rect(i*8,j*8,8,8);//奇数は黒
      if(j<3){ fill(255,0,0);//赤
        let x=12;
        while(x<61){
        ellipse(x, 4,7); 
        x=x+16}

        let y=4;
        while(y<61){
        ellipse(y, 12,7); 
        y=y+16}

        let z=12;
        while(z<61){
        ellipse(z, 20,7); 
        z=z+16}

      };

      if(j>4){fill(0);//黒

        let x=4;
        while(x<61){
        ellipse(x, 44,7); 
        x=x+16}

        let y=12;
        while(y<61){
        ellipse(y, 52,7); 
        y=y+16}

        let z=4;
        while(z<61){
        ellipse(z, 60,7); 
        z=z+16}

      }
    
      }
      else{fill(255);  rect(i*8,j*8,8,8)} //偶数は白      
      


      
      
    
      
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }

  };

}


