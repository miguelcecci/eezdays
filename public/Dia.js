function Dia(x, y, sizeX, sizeY, count){

  this.x = x;
  this.y = y;
  this.sx = sizeX;
  this.sy = sizeY;
  this.marked = 0;
  this.dia = count;
  this.menu;

  this.draw = function(){
    stroke(10,80,90);
    fill(5,50,60);
    if(mouseX>this.x && mouseX<this.x+this.sx){
      if(mouseY>this.y && mouseY<this.y+this.sy){
        fill(10,40,50);
        if(mouseIsPressed){
          fill(10,250,220);
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
}
