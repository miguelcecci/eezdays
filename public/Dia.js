function Dia(x, y, sizeX, sizeY, count, mes){

  this.x = x;
  this.y = y;
  this.sx = sizeX;
  this.sy = sizeY;
  this.marked = 0;
  this.dia = count;
  this.mes = mes;
  this.menu;

  this.draw = function(){
    stroke(10,80,90);
    fill(5,50,60);
    this.paintDay();
    if(mouseX>this.x && mouseX<this.x+this.sx){
      if(mouseY>this.y && mouseY<this.y+this.sy){
        fill(10,40,50);
        if(mouseIsPressed){
          fill(10,250,220,30);
          this.menu = new QuickMenu(this.x, this.y, this.sx, this.sy);
        }
      }
    }
    textAlign(LEFT);
    rect(this.x, this.y, this.sx, this.sy);
    fill(10,80,90);
    noStroke();
    text(this.dia, this.x+2, this.y+12);
  }

  this.paintDay = function(){
    if(this.mes+1 == month() && this.dia == day()){
      fill(100, 200, 200, 20);
    }
  }

}
