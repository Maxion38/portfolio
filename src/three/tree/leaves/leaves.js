import * as THREE from 'three';
import { LeavesShape } from './leavesShape.js';
import { Leaf } from './leaf.js';

export class Leaves extends THREE.Group {
  constructor({
    leafCount = 100,
    radiusOffset = 0.05,
    color = 0x194522,
  } = {}) {
    super();

    // --- Main shape ---
    this.shape = new LeavesShape({color: color});
    this.add(this.shape);

    // --- Small leaves ---
    
    this.leaves = [];

    const contourPoints = this._extractContourPoints(
      this.shape.geometry,
      leafCount
    );

    this.leafAnchors = contourPoints.map(({ position, normal }) => ({
      basePosition: position.clone(),
      normal: normal.clone(),
    }));

    contourPoints.forEach(({ position, normal }) => {
      const leaf = new Leaf({color: color});

      leaf.position.copy(position);
      leaf.position.addScaledVector(normal, radiusOffset);

      // orient leaf outward
      const angle = Math.atan2(normal.y, normal.x);
      leaf.rotation.z = angle + Math.PI / 2;

      // random scale
      const s = 0.6 + Math.random() * 0.6;
      leaf.scale.setScalar(s);

      this.add(leaf);
      this.leaves.push(leaf);
    });
  }

  /**
   * Extract evenly spaced points from ShapeGeometry contour
   */
  _extractContourPoints(geometry, count) {
    const pos = geometry.attributes.position;
    const raw = [];

    for (let i = 0; i < pos.count; i++) {
      raw.push(new THREE.Vector2(
        pos.getX(i),
        pos.getY(i)
      ));
    }

    // remove near-duplicates
    const contour = [];
    for (let i = 0; i < raw.length; i++) {
      if (i === 0 || raw[i].distanceTo(raw[i - 1]) > 0.001) {
        contour.push(raw[i]);
      }
    }

    // compute cumulative lengths
    const lengths = [0];
    let total = 0;

    for (let i = 1; i < contour.length; i++) {
      total += contour[i].distanceTo(contour[i - 1]);
      lengths.push(total);
    }

    const step = total / count;
    const result = [];

    for (let i = 0; i < count; i++) {
      const target = i * step;

      // find segment
      let j = 1;
      while (j < lengths.length && lengths[j] < target) j++;

      const prevLen = lengths[j - 1];
      const segLen = lengths[j] - prevLen;
      const t = (target - prevLen) / segLen;

      const p0 = contour[j - 1];
      const p1 = contour[j];

      const pos2 = p0.clone().lerp(p1, t);
      const tangent = p1.clone().sub(p0).normalize();
      const normal = new THREE.Vector2(-tangent.y, tangent.x);

      result.push({
        position: new THREE.Vector3(pos2.x, pos2.y, 0),
        normal: new THREE.Vector3(normal.x, normal.y, 0),
      });
    }

    return result;
  }


  update(time) {
    // Animate main shape (GPU)
    this.shape.update(time);

    // Animate & reposition small leaves
    this.leaves.forEach((leaf, i) => {
      const anchor = this.leafAnchors[i];

      const base = anchor.basePosition;
      const normal = anchor.normal;

      // Recompute SAME deformation as shader
      const angle = Math.atan2(base.y, base.x);
      const wave = Math.sin(angle * 4 + time) * 0.02;

      const offset = normal.clone().multiplyScalar(wave);

      leaf.position
        .copy(base)
        .add(offset);

      leaf.update(time);
    });
  }


  dispose() {
    this.shape.dispose();
    this.leaves.forEach(l => l.dispose?.());
  }
}
