function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  angleMode(DEGREES);

  rectMode(CENTER);
}
let mult = 100;

function mousePressed() {
  mult = random(1, 100) * 10;
}

function draw() {
  background(255);
  noFill();

  translate(width / 2, height / 2);

  for (let i = 0; i < 200; i++) {
    push();

    rotate(sin(frameCount + i * 1.5) * mult);

    // let r = map(sin(frameCount), -1, 1, 50, 255);
    // let g = map(cos(frameCount / 2), -1, 1, 50, 255);
    // let b = map(sin(frameCount / 4), -1, 1, 50, 255);

    stroke(0);

    rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i);

    pop();
  }
}
