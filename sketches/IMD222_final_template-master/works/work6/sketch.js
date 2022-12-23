function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  // angleMode(DEGREES);
  frameRate(8);
}

function draw() {}

function mousePressed() {
  dhodkseho();
}

function dhodkseho() {
  let positionX = random(0, width);
  let positionY = random(0, height);
  for (let i = 0; i <= 100; i++) {
    let toMouseAngle = atan2(mouseY - positionY, mouseX - positionX); // rotate(Math.PI / rad);

    rotate(toMouseAngle);
    circle(positionX + i, positionY, 10);
    fill(0);
  }
}

// function drawPoint() {
//   fill(255);
//   let drawNum = random(2, 70);

//   let cSize = -4;

//   for (let drawC = 0; drawC <= drawNum; drawC++) {
//     let plusX = random(-1, 1);
//     let plusY = random(-1, 1);
//     let cRotate = random(360);

//     let rorcp = circle(mouseX + drawC, mouseY + drawC, random(20, 30) - cSize);
//     rotate(cRotate);
//   }
// }

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
