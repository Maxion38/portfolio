import * as THREE from 'three';
import colorFragment from '../../commons/shaders/colorFragment.glsl';
import leavesShapeVertex from './leavesShapeVertex.glsl'

export class LeavesShape extends THREE.Mesh {
  constructor({
    color = 0x194522,
    points = 128,
    rx = 2,
    ry = 1.1,
  } = {}) {

    // --- Build base shape (STATIC) ---
    const shape = new THREE.Shape();

    for (let i = 0; i <= points; i++) {
      const t = (i / points) * Math.PI * 2;

      const noise =
        Math.sin(t * 5 + 4) * 0.1 +
        Math.sin(t * 2 + 1) * 0.1;

      const x = Math.cos(t) * (rx + noise);
      const y = Math.sin(t) * (ry + noise);

      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }

    const geometry = new THREE.ShapeGeometry(shape);

    const material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
        uOpacity: { value: 1},
        uFogNear: { value: 2.0 },
        uFogFar: { value: 10.0 },
        uFogColor: { value: new THREE.Color(0xd2fae0) },
      },
      vertexShader: leavesShapeVertex,
      fragmentShader: colorFragment,
    });

    super(geometry, material);
  }

  update(time) {
    this.material.uniforms.uTime.value = time;
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}
