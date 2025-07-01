#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;

// 4x4 Bayer matrix (ordered dithering)
float dither4x4(vec2 pos, float gray) {
  int x = int(mod(pos.x, 4.0));
  int y = int(mod(pos.y, 4.0));
  int index = y * 4 + x;
  float limit[16];
  limit[ 0] = 0.0;  limit[ 1] = 8.0;  limit[ 2] = 2.0;  limit[ 3] = 10.0;
  limit[ 4] = 12.0; limit[ 5] = 4.0;  limit[ 6] = 14.0; limit[ 7] = 6.0;
  limit[ 8] = 3.0;  limit[ 9] = 11.0; limit[10] = 1.0;  limit[11] = 9.0;
  limit[12] = 15.0; limit[13] = 7.0;  limit[14] = 13.0; limit[15] = 5.0;

  float threshold = limit[index] / 16.0;
  return gray < threshold ? 0.0 : 1.0;
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  uv *= 4.0;

  float pattern = sin(uv.x * 0.5 + time) + cos(uv.y * 0.5 - time);
  float brightness = 0.5 + 0.5 * sin(pattern * 3.0 + time * 0.5);

  float dithered = dither4x4(gl_FragCoord.xy, brightness);
  gl_FragColor = vec4(vec3(dithered), 1.0);
}
