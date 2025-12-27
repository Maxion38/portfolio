import * as THREE from 'three';
import trunkVertex from './trunkVertex.glsl'
import colorFragment from '../../commons/shaders/colorFragment.glsl';

export default class TreeTrunk extends THREE.Group {

  constructor({
    height = 10,
    baseWidth = 0.5,
    topWidth = 0.25,
    branchCount = 3,
    color = new THREE.Color(0x194522),
    swayStrength = 0.03,
    swaySpeed = 1.2,
  } = {}) {
    super();

    // =========================
    // TRONC
    // =========================
    const trunkGeo = new THREE.PlaneGeometry(
      baseWidth,
      height,
      1,
      10
    );
    trunkGeo.translate(0, height / 2, 0);

    const pos = trunkGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const t = y / height;
      const w = THREE.MathUtils.lerp(baseWidth, topWidth, t);
      pos.setX(i, Math.sign(pos.getX(i)) * w * 0.5);
    }

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSwayStrength: { value: swayStrength },
        uSwaySpeed: { value: swaySpeed },
        uColor: { value: color },
        uOpacity: { value: 1},
        uFogNear: { value: 2.0 },
        uFogFar: { value: 10.0 },
        uFogColor: { value: new THREE.Color(0xd2fae0) },
      },
      vertexShader: trunkVertex,
      fragmentShader: colorFragment,
      side: THREE.DoubleSide,
    });

    const trunkMesh = new THREE.Mesh(trunkGeo, this.material);
    this.add(trunkMesh);

    // =========================
    // BRANCHES
    // =========================
    for (let i = 0; i < branchCount; i++) {
      const branchHeight = THREE.MathUtils.lerp(0.4, 0.7, Math.random());
      const branchWidth = branchHeight * 0.15;

      const branchGeo = new THREE.PlaneGeometry(
        branchWidth,
        branchHeight,
        1,
        4
      );
      branchGeo.translate(0, branchHeight / 2, 0);

      const branch = new THREE.Mesh(branchGeo, this.material);

      const y = THREE.MathUtils.lerp(height * 0.4, height * 0.85, Math.random());
      const side = Math.random() < 0.5 ? -1 : 1;

      branch.position.set(
        side * (baseWidth * 0.25),
        y,
        0.01
      );

      branch.rotation.z =
        side * THREE.MathUtils.lerp(0.4, 0.8, Math.random());

      this.add(branch);
    }

    this.height = height;
  }

  /*
  update(time) {
    this.material.uniforms.uTime.value = time;
  }*/
}
