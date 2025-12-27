#include "../commons/shaders/fogFragment.glsl"

uniform vec3 uColor;
varying float vViewZ;

void main() {
    vec3 color = applyFog(uColor, vViewZ, 0.5);

    gl_FragColor = vec4(color, 1.0);
}