// leavesWithRandomShapes.js
import * as THREE from 'three';
import { createRandomShapeMesh } from './sandbox.js';

export function createLeavesShapeWithDecorations() {
  const shape = new THREE.Shape();
  const basePoints = [];
  const smallShapes = []; // pour stocker les petites shapes

  const points = 128;

  for (let i = 0; i <= points; i++) {
    const t = (i / points) * Math.PI * 2;

    const noise =
      Math.sin(t * 5 + 4) * 0.1 +
      Math.sin(t * 2 + 1) * 0.1;

    const rx = 2; // largeur
    const ry = 1.1; // hauteur

    const x = Math.cos(t) * (rx + noise);
    const y = Math.sin(t) * (ry + noise);

    basePoints.push(new THREE.Vector2(x, y));

    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);

    // Instancier une petite forme à chaque point du contour
    const smallMesh = createRandomShapeMesh({
      width: 0.1 + Math.random() * 0.1,
      height: 0.1 + Math.random() * 0.1,
      color: 0x647568,
      jitter: 0.1 + Math.random() * 0.1
    });

    // placer la petite forme au point du contour
    smallMesh.position.set(x, y, 0);

    // rotation aléatoire
    smallMesh.rotation.z = Math.random() * Math.PI * 2;

    smallShapes.push(smallMesh);
  }

  const geometry = new THREE.ShapeGeometry(shape);
  const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: {
      uColor: { value: new THREE.Color(0x647568) },
    },
    vertexShader: `
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 uColor;

        void main() {
          gl_FragColor = vec4(uColor, 1.0);
        }
    `
  });

  const mesh = new THREE.Mesh(geometry, material);

  // fonction d'update pour animer la grosse shape
  function update(time) {
    shape.curves = [];
    shape.currentPoint.set(0, 0);

    basePoints.forEach((p, i) => {
      const angle = (i / basePoints.length) * Math.PI * 2;
      const wave = Math.sin(angle * 4 + time) * 0.02;

      const x = p.x + Math.cos(angle) * wave;
      const y = p.y + Math.sin(angle) * wave;

      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);

      // Mettre à jour la position des petites formes
      smallShapes[i].position.set(x, y, 0);
    });

    mesh.geometry.dispose();
    mesh.geometry = new THREE.ShapeGeometry(shape);
  }

  return { mesh, smallShapes, update };
}
