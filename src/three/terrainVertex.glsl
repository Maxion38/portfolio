varying float vViewZ;

void main() {
    vec3 pos = position;

    // view pos
    vec4 viewPos = modelViewMatrix * vec4(pos, 1.0);
    vViewZ = -viewPos.z;

    gl_Position = projectionMatrix * viewPos;
}