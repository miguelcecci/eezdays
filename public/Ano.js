function Ano(x, y, sizeX, sizeY){

  this.month = [];
  this.x = x;
  this.y = y;
  this.sx = sizeX;
  this.sy = sizeY;
  if(1.4*sizeY<sizeX){
    this.wdisp = 4;
    this.hdisp = 3;
  }else{
    this.wdisp = 3;
    this.hdisp = 4;
  }

  this.generateMonths = function(){
    //aqui define-se a área que os meses vao ocupar no calendario
    var dxs = this.sx/this.wdisp;
    var dys = this.sy/this.hdisp;
    var count = 0;
    for (var i = 0; i < this.hdisp; i++) {
      for (var j = 0; j < this.wdisp; j++) {
        this.month[count] = new Mes(this.x+j*dxs,this.y+i*dys, dxs, dys, count);
        this.month[count].draw();
        this.month[count].generateDays();
        this.month[count].overdraw();
        count++;
      }
    }
  }
  this.draw = function(){
    textAlign(CENTER);
    fill(10,220,220);
    textSize(20);
    text(year(), this.sx/2, 20);
    textSize(12);
    var display = new TimeDisplay(this.sx/1.02, 20);
    display.show();
  }
}
