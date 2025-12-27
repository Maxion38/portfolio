uniform float uTime;
uniform float uWindStrength;
uniform float uWindSpeed;
uniform vec2 uWindDirection;

varying float vViewZ;

void main() {

    vec3 pos = position;

    // view pos
    vec4 viewPos = modelViewMatrix * vec4(pos, 1.0);
    vViewZ = -viewPos.z;

    // Oscillation légère autour de la direction
    float flutter = sin(uTime * uWindSpeed + uv.y * 2.0) * 0.3 + 0.7;

    float bend = uWindStrength * uv.y * flutter;


    pos.x += uWindDirection.x * bend;
    pos.z += uWindDirection.y * bend;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}