function setup() {
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#e3d5ca');
  textSize(50)
  fill(255)
  text("X:"+mouseX+"Y:"+mouseY,50,50)
  
  push()  
    fill('#3198E6')
    ellipse(550,310,290) //臉(藍色部分)
    fill(255)
    ellipse(550,343,245,230) //臉(白色部分)
    ellipse(515,234,70,90) //左眼白
    ellipse(585,234,70,90) //右眼白
    fill(0)
    ellipse(525+map(mouseX,0,width,-30,10),252+map(mouseY,0,height,-45,10),17,27) //左眼球
    ellipse(575+map(mouseX,0,width,-10,30),252+map(mouseY,0,height,-45,10),17,27) //右眼球
    fill(255)
    ellipse(527+map(mouseX,0,width,-30,10),251+map(mouseY,0,height,-45,10),9,14) //左眼睛亮光
    ellipse(573.5+map(mouseX,0,width,-10,30),251+map(mouseY,0,height,-45,10),9,14) //右眼睛亮光
    fill('#DD0303')
    ellipse(550,277,38,38) //鼻子(紅色)
    fill(255)
    //noStroke()
    ellipse(552,268,12) //鼻子高光
   
    fill('#F1E2AB')
    ellipse(275+map(mouseX,0,width,-100,700),140+map(mouseY,0,height,-80,400),80)  //銅鑼燒底層
    fill('#BF6900')
    ellipse(275+map(mouseX,0,width,-100,700),140+map(mouseY,0,height,-80,400),65)  //銅鑼燒中間
    
    

    curve(605,292,605,292,666,263,665,263)
    curve(610,311,610,311,684,297,665,298)
    curve(612,330,612,330,687,334,665,338)
    //右邊鬍鬚
    curve(495,292,495,292,434,263,433,263)
    curve(490,311,490,311,416,297,415,298)
    curve(488,330,488,330,413,334,412,338)
    //左邊鬍鬚

    fill(255,0,0)
    rect(475,437,150,20,20) //紅領繩
    fill(255,255,0)
    ellipse(550,468,35,35) //鈴鐺
    rect(530,465,40,4,20)  //鈴鐺中間橫線
    fill('#897900')
    ellipse(550,476,8) //鈴鐺孔
    beginShape();
        curveVertex(550,480)
        curveVertex(550,480)
        curveVertex(550,485)
        curveVertex(550,485)
    endShape(); //鈴鐺中間

    beginShape();
        curveVertex(550,295)
        curveVertex(550,295)
        curveVertex(550,395)
        curveVertex(550,395)
    endShape(); //嘴巴中間
    beginShape();
        curveVertex(450,348)
        curveVertex(450,348)
        curveVertex(550,395)
        curveVertex(550,395)
    endShape(); //左嘴巴
    beginShape();
        curveVertex(650,348)
        curveVertex(650,348)
        curveVertex(550,395)
        curveVertex(550,395)
    endShape(); //右嘴巴
    
    pop()
    
    //fill(255,0,0)
    //arc(580,380,100,50,PI / 2, 3 * PI / 2, OPEN)
  //arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE)
    //arc(520,310,250,150,-PI, 0, CHORD)
    //arc(560,250,250,150,0,-PI); 
    //if(mouseIsPressed)
      //{   //mouseIsPressed為true，代表有按下滑鼠
        //arc(0,face_size/4-1,face_size/2,face_size/10,0,180)   //上弧
      //}
      //else
      //{   //mouseIsPressed為false，代表沒有按下滑鼠
        //arc(0,face_size/4-1,face_size/2,face_size/4-10,0,180) //上弧
     // }
     //var colors = ['#3198E6','#3198E6','#A669C1','#FFB4D7','#A669C1','#93D171','#D34848','#F8F362','#7BD6EB']

}
