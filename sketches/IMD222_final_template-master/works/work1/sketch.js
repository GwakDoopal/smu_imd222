function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

let howManyX = 5;
let howManyY = 5;
let seedNum = 2;
let noiseMult = 0.1;

function mousePressed() {
  seedNum = random(8);
}

function draw() {
  noiseMult = map(mouseX, 0, width, -0.1, 0.04);
  noiseSeed(seedNum);
  noStroke();
  fill(255);
  rect(0, 0, width, height);
  let tileWidth = width / (howManyX + 1);
  let tileHeight = height / (howManyY + 1);

  for (let tileCntX = 0; tileCntX < howManyX; tileCntX++) {
    for (let tileCntY = 0; tileCntY < howManyY; tileCntY++) {
      let tileCenterX = tileWidth * (tileCntX + 1);
      let tileCenterY = tileHeight * (tileCntY + 1);

      let noiseVal = noise(tileCntX * noiseMult, tileCntY * noiseMult);
      let noiseAngle = radians(360) * noiseVal;
      let noiseColor = 255 * noiseVal;

      let colorR = (255 * tileCntX) / (howManyX - 1);
      let colorB = (255 * tileCntY) / (howManyY - 1);
      let colorG = mouseY * noiseVal;

      push();
      translate(tileCenterX, tileCenterY);
      rotate(noiseAngle);
      noFill();
      stroke(colorR, colorG, colorB);
      strokeWeight(1);
      // line(0 - tileWidth * 0.5 + 5, 0, 0 + tileWidth * 0.5 - 5, 0);
      // circle(mouseX * noiseMult, mouseY * noiseMult, 10);
      triangle(
        mouseX,
        mouseX * noiseMult,
        mouseY,
        mouseY * noiseMult,
        mouseX,
        mouseY
      );
      pop();
    }
  }
}
