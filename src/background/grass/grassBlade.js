import * as THREE from 'three';
import { COLORS } from '../constants.js';
import grassBladeVertex from './grassBladeVertex.glsl';
import colorFragment from '../commons/shaders/colorFragment.glsl';

export default class GrassBlade {
  constructor({
    height = 1,
    baseWidth = 0.1,
    tipWidth = 0.005,
    color = new THREE.Color(COLORS.MAP),
    windStrength = 0.15,
    windSpeed = 2.0,
    segments = 8,
  } = {}) {
    const geometry = new THREE.PlaneGeometry(
      baseWidth,
      height,
      1,
      segments
    );

    // Base au sol
    geometry.translate(0, height / 2, 0);

    // Affiner la forme (épais bas → fin haut)
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const t = y / height;
      const width = THREE.MathUtils.lerp(baseWidth, tipWidth, t);
      pos.setX(i, Math.sign(pos.getX(i)) * width * 0.5);
    }

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 1},
        uWindStrength: { value: windStrength },
        uWindSpeed: { value: windSpeed },
        uWindDirection: { value: new THREE.Vector2(1, 0) }, // → droite
        uColor: { value: color },
        uFogNear: { value: 2.0 },
        uFogFar: { value: 10.0 },
        uFogColor: { value: new THREE.Color(COLORS.FOG) },
      },

      vertexShader: grassBladeVertex,
      fragmentShader: colorFragment,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.material = material;
  }

  update(time) {
    this.material.uniforms.uTime.value = time;
  }
}
