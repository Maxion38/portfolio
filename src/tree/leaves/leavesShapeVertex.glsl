uniform float uTime;

varying float vViewZ;

void main() {
    vec3 pos = position;

    // angle around center
    float angle = atan(pos.y, pos.x);
    
    // wave deformation
    float wave = sin(angle * 4.0 + uTime) * 0.02;

    // radial displacement
    pos.x += cos(angle) * wave;
    pos.y += sin(angle) * wave;

    // view pos
    vec4 viewPos = modelViewMatrix * vec4(pos, 1.0);
    vViewZ = -viewPos.z;

    gl_Position = projectionMatrix * viewPos;
}