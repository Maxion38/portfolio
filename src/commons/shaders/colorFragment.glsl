#include "./fogFragment.glsl"

uniform vec3 uColor;
uniform float uOpacity;

varying float vViewZ;

void main() {
    vec3 color = applyFog(uColor, vViewZ, 0.5);
    gl_FragColor = vec4(color, uOpacity);
}
