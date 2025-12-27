uniform float uTime;
uniform float uSwayStrength;
uniform float uSwaySpeed;

varying float vY;
varying float vViewZ;

void main() {
    vY = uv.y;
    vec3 pos = position;

    // view pos
    vec4 viewPos = modelViewMatrix * vec4(pos, 1.0);
    vViewZ = -viewPos.z;

    float sway =
    sin(uTime * uSwaySpeed + uv.y) *
    uSwayStrength;

    pos.x += sway * uv.y;

    gl_Position = projectionMatrix * viewPos;
}