let zoff = 0;
let speedSlider;
let speed = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  noSmooth();
  const container = select('#speed-container');
  speedSlider = createSlider(0.001, 0.1, speed, 0.001);
  speedSlider.parent(container);
  speedSlider.style('width', '200px');
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
  zoff += speedSlider.value();
}
