var ye;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  ye = new Ano(0,0,windowWidth, windowHeight);
  ye.generateMonths();
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(10,40,50);
  ye = new Ano(0,40, windowWidth, windowHeight-40);
  ye.draw();
  ye.generateMonths();
}
//cabecalho 10,40,50
