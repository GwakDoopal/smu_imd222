function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height, WEBGL);
  canvas.parent("p5Canvas");
  angleMode(DEGREES);

  // noLoop();
}

function draw() {
  background(255);

  randomSeed(1);

  translate(0, 200, 0);

  rotateY(frameCount);

  branch(100);
}

function branch(len) {
  strokeWeight(map(len, 10, 100, 0.5, 5));
  stroke(0);

  line(0, 0, 0, 0, -len - 2, 0);

  translate(0, -len, 0);

  if (len > 10) {
    for (let i = 0; i < 3; i++) {
      rotateY(random(120, 170));

      push();

      rotateZ(random(20, 50));
      branch(len * 0.7);

      pop();
    }
  } else {
    fill(0);
    noStroke();

    translate(5, 0, 0);

    rotateZ(90);

    beginShape();
    for (let i = 45; i < 135; i++) {
      let rad = 7;
      let x = rad * cos(i);
      let y = rad * sin(i);
      vertex(x, y);
    }
    for (let i = 135; i < 45; i--) {
      let rad = 7;
      let x = rad * cos(i);
      let y = rad * sin(-i) + 10;
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
