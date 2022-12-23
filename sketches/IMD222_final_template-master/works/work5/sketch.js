function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  angleMode(DEGREES);
  frameRate(8);
}

function draw() {
  drawPoint();
}

function mousePressed() {}

function drawPoint() {
  fill(255);
  let drawNum = random(2, 70);
  let plusX = random(-1, 1);
  let plusY = random(-1, 1);
  let cRotate = random(360);

  for (let drawC = 0; drawC <= drawNum; drawC++) {
    let rorcp = circle(mouseX + plusX, mouseY + plusY, 5);
    // push();
    rotate(cRotate);
    // pop();
  }
}

// function randomDraw() {
//   let positionX = random(0, width);
//   let positionY = random(0, height);
//   let drawNum = random(2, 70);
//   let circleSize = random(50, 70);

//   for (let drawX = 0; drawX <= drawNum; drawX++) {
//     fill(255);
//     circle(
//       mouseX + drawX * random(-10, 10),
//       mouseY + drawX * random(-10, 10),
//       circleSize - drawNum
//     );
//   }

// circle(mouseX, mouseY, circleSize);
// }
