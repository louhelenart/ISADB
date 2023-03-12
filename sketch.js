let col;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  col = map(mouseX, 0, 400, 0, windowWidth);
  background(col);
  fill(0, 0, 0);
  text("AND THEN I LOOKED AWAY", mouseX, 200, 50);
  fill(255);
  text("I SAW A DEERS BODY", mouseX / 10, 200, 50);
}
