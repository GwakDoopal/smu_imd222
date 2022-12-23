function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

function draw() {
  randomDraw();
  drawPoint();
}

function mousePressed() {}

function drawPoint() {
  fill(0);
  let circleSize = random(70, 100);
  circle(mouseX, mouseY, 100);
}

function randomDraw() {
  let positionX = random(0, width);
  let positionY = random(0, height);
  let drawNum = random(2, 70);
  let circleSize = random(50, 70);

  for (let drawX = 0; drawX <= drawNum; drawX++) {
    fill(255);
    circle(
      mouseX + drawX * random(-10, 10),
      mouseY + drawX * random(-10, 10),
      circleSize - drawNum
    );
  }

  // circle(mouseX, mouseY, circleSize);
}
