function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  angleMode(DEGREES);
}

function draw() {
  background(255);
  stroke(0);
  noFill();

  translate(width / 2, height / 2);

  beginShape();
  for (let i = 0; i < 359; i++) {
    let r1Min = map(cos(frameCount), -6, 1, 100, 100);
    let r1Max = map(cos(frameCount * 2), -1, 1, 100, 0);

    let r2Min = map(cos(frameCount / 2), -1, 1, 100, 50);
    let r2Max = map(cos(frameCount), -1, 1, 0, 100);

    let r3Min = map(sin(frameCount / 2), -1, 1, 150, 50);
    let r3Max = map(sin(frameCount), -1, 1, 0, 50);

    let r4Min = map(sin(frameCount / 2), -1, 1, 50, 50);
    let r4Max = map(sin(frameCount), -1, 1, 0, 10);

    let r1 = map(sin(i * 3), -1, 1, r1Min, r1Max);
    let r2 = map(sin(i * 6 + 98), -1, 1, r2Min, r2Max);
    let r3 = map(sin(i * random(0, 5)), -1, 1, r3Min, r3Max);
    let r4 = map(sin(i * 10), -1, 1, r4Min, r4Max);

    let r = r1 + r2 + r3;
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function mousePressed() {}
