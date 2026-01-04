import * as THREE from 'three';
import colorFragment from '../commons/shaders/colorFragment.glsl';

export default class GrassBase extends THREE.Mesh {
  /**
   * @param {Object} options
   * @param {number} options.width - largeur de la bande
   * @param {function} options.curve - fonction(t:0..1) -> hauteur
   * @param {number} options.segments - nombre de segments
   * @param {THREE.Color | number} options.color - couleur du sol
   */
  constructor({
    width = 20,
    curve = (t) => Math.sin(t * Math.PI * 2) * 0.5,
    segments = 100,
    color = 0x1f4c2f,
  } = {}) {
    // --- Géométrie ---
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const indices = [];

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = (t - 0.5) * width;
      const y = curve(t);

      vertices.push(x, -2, 0); // base
      vertices.push(x, y, 0);  // sommet
    }

    for (let i = 0; i < segments; i++) {
      const a = i * 2;
      const b = a + 1;
      const c = a + 2;
      const d = a + 3;

      indices.push(a, b, d);
      indices.push(a, d, c);
    }

    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.computeVertexNormals();

    // --- Material ---
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(color) },
        uOpacity: { value: 1 },
        uFogNear: { value: 2.0 },
        uFogFar: { value: 10.0 },
        uFogColor: { value: new THREE.Color(0xd2fae0) },
      },
      vertexShader: `
        varying float vViewZ;

        void main() {
            vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
            vViewZ = -viewPos.z; // distance de la caméra en espace vue

            gl_Position = projectionMatrix * viewPos;
        }
      `,
      fragmentShader: colorFragment,
      side: THREE.DoubleSide,
    });

    super(geometry, material);
  }
}
