function TimeDisplay(x, y){
  this.x = x;
  this.y = y;

  this.show = function(){
    text(hour()+":"+minute()+":"+second(), this.x, this.y);
  }
}
