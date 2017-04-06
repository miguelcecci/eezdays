function Mes(x, y, sizeX, sizeY, countas){
  this.nome = countas;
  this.x = x;
  this.y = y;
  this.sx = sizeX;
  this.sy = sizeY;
  this.nomes = new Array("Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

  this.draw = function(){
    textAlign(CENTER);
    fill(255);
    rect(this.x, this.y, this.sx, this.sy);
    fill(80);
    rect(this.x, this.y, this.sx, this.sy/15);
    fill(255);
    text(this.nomes[this.nome], this.x+this.sx/2, this.y+this.sy/20);
  }
}
