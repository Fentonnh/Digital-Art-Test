+let z = 0;
 
+function setup() {
+  createCanvas(windowWidth, windowHeight);
+  pixelDensity(1);
+  noStroke();
+}
+
+function draw() {
+  loadPixels();
+  for (let x = 0; x < width; x++) {
+    for (let y = 0; y < height; y++) {
+      let n = noise(x * 0.01, y * 0.01, z);
+      let c = n * 255;
+      let index = (x + y * width) * 4;
+      pixels[index] = c;
+      pixels[index + 1] = c;
+      pixels[index + 2] = c;
+      pixels[index + 3] = 255;
+    }
+  }
+  updatePixels();
+  z += 0.01;
+}
+
+function windowResized() {
+  resizeCanvas(windowWidth, windowHeight);
+}
