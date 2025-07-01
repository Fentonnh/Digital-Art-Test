let theShader;

function preload() {
  theShader = loadShader('shader.vert', 'shader.frag');
  console.log('Shader loaded:', theShader);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  shader(theShader);
}

function draw() {
  theShader.setUniform("resolution", [width, height]);
  theShader.setUniform("time", millis() / 1000.0);

  // Draw a full canvas rectangle (centered in WebGL mode)
  rect(-width / 2, -height / 2, width, height);
}
