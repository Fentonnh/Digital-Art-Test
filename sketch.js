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

  // Manually draw a full-screen quad using clip space coordinates
  beginShape();
  vertex(-1, -1, 0);  // bottom left
  vertex(1, -1, 0);   // bottom right
  vertex(1, 1, 0);    // top right
  vertex(-1, 1, 0);   // top left
  endShape(CLOSE);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
