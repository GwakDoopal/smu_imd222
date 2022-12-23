function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}
noiseSeed(seed);

function draw() {}

function mousePressed() {
  randomDraw();
}

function randomDraw() {
  let positionX = random(0, width);
  let positionY = random(0, height);
  let circleSize = random(50, 70);
  let drawNum = random(2, 70);

  for (let drawX = 0; drawX <= drawNum; drawX++) {
    let fillColor = random(0, 3);
    if (fillColor >= 2) {
      fill(0);
    } else if (fillColor >= 1) {
      fill(255);
    } else {
      fill(180);
    }
    circle(
      mouseX + drawX * random(-10, 10),
      mouseY + drawX * random(-10, 10),
      circleSize - drawNum
    );
  }

  // circle(mouseX, mouseY, circleSize);
}
