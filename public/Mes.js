function Mes(x, y, sizeX, sizeY, countas){

  this.day = [];
  this.x = x;
  this.y = y;
  this.sx = sizeX;
  this.sy = sizeY;
  this.realsy = sizeY-sizeY/15;
  this.wdisp = 7;
  this.hdisp = 5;
  this.nome = countas;
  this.nomes = new Array("Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

  this.generateDays = function() {
    var dxs = this.sx/this.wdisp;
    var dys = this.realsy/this.hdisp;
    var count = 0;
    for (var i = 0; i < this.hdisp; i++) {
      for (var j = 0; j < this.wdisp; j++) {
        this.day[count] = new Dia(this.x+j*dxs,(this.y+i*dys)+this.sy/15, dxs, dys, count);
        this.day[count].draw();
        fill(200);
        count++;
      }
    }
  }

  this.draw = function(){
    textAlign(CENTER);
    stroke(10,80,90);
    fill(10,220,220);
    rect(this.x, this.y, this.sx, this.sy);
    fill(10,80,90);
    rect(this.x, this.y, this.sx, this.sy/15);
    fill(10,220,220);
    text(this.nomes[this.nome], this.x+this.sx/2, this.y+this.sy/20);
  }
}
