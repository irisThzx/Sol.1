//
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

function setup() {
  createCanvas(340, 330);
}

function draw() {
    background("yellow");
   circle(xBolinha, yBolinha, diametro);
    //xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
    
    if (xBolinha > width || xBolinha ) {
        velocidadeXBolinha *= -1;
    }
  if (ybolinha > height || yBolinha ){ velocidadeYBolinha *= -1;
  }
}