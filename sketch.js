let theShader;

function preload() {
  theShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  shader(theShader);
  console.log("Loaded shader:", theShader);
}

function draw() {
  theShader.setUniform("resolution", [windowWidth, windowHeight]);
  theShader.setUniform("time", millis() / 1000.0);
  rect(-windowWidth / 2, -windowHeight / 2, windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
