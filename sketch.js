let rainDropSize = 20;
let cols;
let rainDrops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = windowWidth / 10;

  for (let i = 0; i < cols; i++) {
    rainDrops[i] = new RainDrop(i * 10, rainDropSize);
  }
}

function draw() {
  background('#0D0208');

  // frameRate(20)
  for (let i = 0; i < cols; i++) {
    rainDrops[i].rain();
  }
}
