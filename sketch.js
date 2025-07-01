let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  noSmooth();
}

function draw() {
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let n = noise(x * 0.01, y * 0.01, zoff);
      let c = n > 0.5 ? 255 : 0;
      let index = (x + y * width) * 4;
      pixels[index] = c;
      pixels[index + 1] = c;
      pixels[index + 2] = c;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  zoff += 0.01;
}
