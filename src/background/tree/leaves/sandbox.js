import * as THREE from 'three';

/**
 * Subdivise un segment entre deux points avec un peu de jitter perpendiculaire
 */
function subdivideEdge(a, b, segments = 3, jitter = 0.15) {
  const points = [];

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;

    const x = THREE.MathUtils.lerp(a.x, b.x, t);
    const y = THREE.MathUtils.lerp(a.y, b.y, t);

    // vecteur normal
    const dx = b.y - a.y;
    const dy = a.x - b.x;
    const len = Math.sqrt(dx * dx + dy * dy);
    const nx = dx / len;
    const ny = dy / len;

    const offset = (Math.random() - 0.5) * jitter;

    points.push(
      new THREE.Vector2(
        x + nx * offset,
        y + ny * offset
      )
    );
  }

  return points;
}

/**
 * Ajoute une petite branche aléatoire à un point
 */
function addBranch(point, normal, size = 0.2) {
  return [
    point.clone(),
    point.clone().addScaledVector(normal, size),
    point.clone().addScaledVector(normal, size * 0.6),
    point.clone()
  ];
}

/**
 * Génère un Shape quasi-rectangulaire aléatoire
 */
export function generateRandomShape(options = {}) {
  const width = options.width || 1;
  const height = options.height || 0.7;
  const maxSegments = options.maxSegmentsPerSide || 4;
  const jitter = options.jitter || 0.12;
  const curveChance = options.curveChance || 0.3;
  const branchChance = options.branchChance || 0.2;

  const corners = [
    new THREE.Vector2(-width, -height),
    new THREE.Vector2( width, -height),
    new THREE.Vector2( width,  height),
    new THREE.Vector2(-width,  height),
  ];

  let outline = [];

  // Subdivide edges
  for (let i = 0; i < corners.length; i++) {
    const a = corners[i];
    const b = corners[(i + 1) % corners.length];

    const segments = 1 + Math.floor(Math.random() * maxSegments);
    const edgePoints = subdivideEdge(a, b, segments, jitter);

    // Ajoute des branches aléatoires
    if (Math.random() < branchChance) {
      const dx = b.y - a.y;
      const dy = a.x - b.x;
      const len = Math.sqrt(dx*dx + dy*dy);
      const normal = new THREE.Vector2(dx/len, dy/len);
      const branchPoints = addBranch(edgePoints[Math.floor(edgePoints.length/2)], normal, jitter*2);
      outline.push(...branchPoints);
    }

    outline.push(...edgePoints.slice(0, -1));
  }

  // Création du Shape
  const shape = new THREE.Shape();
  shape.moveTo(outline[0].x, outline[0].y);

  for (let i = 1; i < outline.length; i++) {
    const p = outline[i];
    const prev = outline[i-1];

    if (Math.random() < curveChance) {
      // Quadratic curve
      const midX = (prev.x + p.x) / 2 + (Math.random()-0.5)*jitter;
      const midY = (prev.y + p.y) / 2 + (Math.random()-0.5)*jitter;
      shape.quadraticCurveTo(midX, midY, p.x, p.y);
    } else {
      shape.lineTo(p.x, p.y);
    }
  }

  return shape;
}

/**
 * Génère le mesh final avec un matériau simple
 */
export function createRandomShapeMesh(options = {}) {
  const shape = generateRandomShape(options);
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

  return new THREE.Mesh(geometry, material);
}
