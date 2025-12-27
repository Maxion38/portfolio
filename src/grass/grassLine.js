import * as THREE from 'three';
import GrassBlade from './grassBlade.js';

export default class GrassLine {
  constructor({ 
    count = 300, 
    width = 20, 
    terrain = null // instance de Terrain
  } = {}) {
    this.group = new THREE.Group();
    this.blades = [];

    for (let i = 0; i < count; i++) {
      const t = i / count;
      const x = (t - 0.5) * width;

      // hauteur en fonction du terrain
      let yBase = 0;
      if (terrain) {
        yBase = terrain.getHeightAt(t); 
      }

      const blade = new GrassBlade({
        height: THREE.MathUtils.lerp(0.3, 1.3, Math.random()),
        windStrength: THREE.MathUtils.lerp(0.04, 0.1, Math.random()),
        windSpeed: THREE.MathUtils.lerp(1.5, 2.3, Math.random()),
        colorBottom: new THREE.Color(0x2f6b3c),
        colorTop: new THREE.Color(0x6fdc8c),
      });

      // position du brin = sol + éventuel petit offset
      blade.mesh.position.set(x, yBase, 0);
      blade.mesh.position.z = Math.random() * 0.3;

      // légère rotation aléatoire
      blade.mesh.rotation.z = THREE.MathUtils.lerp(-0.3, 0.3, Math.random());

      this.group.add(blade.mesh);
      this.blades.push(blade);
    }
  }

  update(time) {
    for (const blade of this.blades) {
      blade.material.uniforms.uTime.value = time;
    }
  }

  setWindDirection(dir) {
    for (const blade of this.blades) {
      blade.material.uniforms.uWindDirection.value.copy(dir);
    }
  }
}
