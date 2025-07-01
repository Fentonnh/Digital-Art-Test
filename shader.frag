#version 300 es
precision mediump float;

uniform vec2 resolution;
uniform float time;

out vec4 fragColor;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  vec3 col = vec3(uv.x, uv.y, abs(sin(time)));
  fragColor = vec4(col, 1.0);
}
