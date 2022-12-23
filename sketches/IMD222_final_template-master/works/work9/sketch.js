function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  angleMode(DEGREES);
  colorMode(HSL);
  createPattern(257, 0.8, 180);
}

function mousePressed() {
  createPattern();
}

function draw() {
  createPattern();
}

function createPattern(fix, zoom, startColour) {
  let length = 0;
  let step = round(random(360));
  let colour = round(random(360));

  let rotationAngle = 0;
  let magnify = height / 500;

  let oldX = width / 2;
  let oldY = height / 2;
  let newX;
  let newY;

  if (fix != null) step = fix;
  if (zoom != null) {
    magnify = zoom;
  }
  if (startColour != null) {
    colour = startColour;
  }

  background(255);
  text("colour: " + colour, width - 70, 15);

  for (let i = 0; i < 360; i++) {
    stroke(colour % 360, 100, 50);

    newX = length * cos(rotationAngle) + oldX;
    newY = letgth * sin(rotationAngle) + oldY;

    line(oldX, oldY, newX, newY);

    oldX = newX;
    oldY = newY;
    rotationAngle += step;
    length -= magnify;
    colour += 1;
  }
}
