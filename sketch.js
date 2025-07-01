let theShader;

function preload() {
  theShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  shader(theShader);
}

function draw() {
  theShader.setUniform("resolution", [width, height]);
  theShader.setUniform("time", millis() / 1000.0);

  // This will map the shader across a full-screen quad in WebGL space
  plane(width/2, height/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
