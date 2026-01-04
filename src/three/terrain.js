import * as THREE from 'three';
import GrassBlade from './grass/grassBlade.js';
import terrainVertex from './terrainVertex.glsl'
import colorFragment from './commons/shaders/colorFragment.glsl';
import { COLORS } from './constants.js';


export default class Terrain {
  /**
   * @param {Object} options
   * @param {number} options.width - largeur du terrain
   * @param {function} options.curve - fonction(t:0..1) -> hauteur du terrain
   * @param {number} options.segments - nombre de segments pour le sol
   * @param {number} options.grassCount - nombre de brins d’herbe
   * @param {THREE.Color | number} options.color - couleur du sol
   */
  constructor({
    width = 20,
    curve = (t) => 1,
    segments = 100,
    grassCount = 1000,
    color = new THREE.Color(COLORS.MAP),
  } = {}) {
    this.group = new THREE.Group();
    this.curve = curve;

    // --- Terrain solide ---
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const indices = [];

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = (t - 0.5) * width;
      const y = curve(t);

      vertices.push(x, -2, 0); // base du terrain
      vertices.push(x, y, 0); // sommet du terrain
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

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: color },
        uOpacity: { value: 1},
        uFogNear: { value: 2.0 },
        uFogFar: { value: 10.0 },
        uFogColor: { value: new THREE.Color(COLORS.FOG) },
      },
      vertexShader: terrainVertex,
      fragmentShader: colorFragment,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    this.group.add(mesh);

    // --- Herbe ---
    for (let i = 0; i < grassCount; i++) {
      const t = Math.random();
      const x = (t - 0.5) * width;
      const y = curve(t) - 0.01; // hauteur du terrain

      const blade = new GrassBlade({
        height: THREE.MathUtils.lerp(0.1, 0.6, Math.random()),
        windStrength: THREE.MathUtils.lerp(0.1, 0.25, Math.random()),
        windSpeed: THREE.MathUtils.lerp(1.5, 2.3, Math.random()),
        color: color, 
      });

      blade.mesh.position.set(x, y, 0);
      blade.mesh.rotation.z = THREE.MathUtils.lerp(-0.3, 0.3, Math.random());

      this.group.add(blade.mesh);
    }
  }

  /**
   * Met à jour l’animation des brins d’herbe
   * @param {number} time
   */
  update(time) {
    this.group.children.forEach((child) => {
      if (child.material && child.material.uniforms?.uTime)
        child.material.uniforms.uTime.value = time;
    });
  }

  /**
   * Définit la direction du vent pour tous les brins
   * @param {THREE.Vector2} dir
   */
  setWindDirection(dir) {
    //TODO
  }

  /**
   * Renvoie la hauteur du terrain pour un x normalisé [0,1]
   */
  getHeightAt(t) {
    return this.curve(t);
  }
}
