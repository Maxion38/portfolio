import * as THREE from 'three';
import { COLORS } from './constants.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Map from './map.js';

import GrassBase from './grass/grassBase.js'

/*
IDEES 
- sons : vent, vent dans les feuilles, arbres qui grincent, parfois pic, oiseaux
*/

const HELPERS_ENABLED = false;

// --- SCENE ---
const scene = new THREE.Scene();

// --- CAMERA ---
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
let baseCameraPos = new THREE.Vector3(0, 4, 2.8);
camera.position.set(0, 4, 2.8);

// --- RENDERER ---
const rendererOptions = {
  canvas: document.querySelector('#bg'),
  antialias: true,
  //depthWrite: false // à tester mais devrais empêcher les problèmes de Z-index
};

scene.background = new THREE.Color(COLORS.SKY);
const renderer = new THREE.WebGLRenderer(rendererOptions);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


// --- HELPERS ---
let controls;
if (HELPERS_ENABLED) {
  const gridHelper = new THREE.GridHelper(200, 50);
  scene.add(gridHelper);
  controls = new OrbitControls(camera, renderer.domElement);
  camera.position.set(0, 3, 2.8);
  camera.rotation.x = -4;
  // camera.lookAt(0, 1.5, -5);
} 


// --- MOUSE ---
const mouse = { x: 0, y: 0 };

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
});

let mouseWheel = 0;

window.addEventListener('wheel', (event) => {
  mouseWheel += event.deltaY / 100;
  baseCameraPos = new THREE.Vector3(mouseWheel, 4, 2.8);
  if (HELPERS_ENABLED) {
    camera.position.set(baseCameraPos);
  }
});


// --- sandbox ---
const grassBase = new GrassBase({
  width: 20,
  curve: t => Math.sin(t * Math.PI * 4) * 0.3, 
});

grassBase.position.z = 0;
// scene.add(grassBase);


const map = new Map();
scene.add(map);



// --- ANIMATION LOOP ---
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const time = clock.getElapsedTime();

  if (HELPERS_ENABLED) {
    controls.target.set(0, 1.5, -5);
    controls.update(); 
  }

  map.update(time);


  if (!HELPERS_ENABLED) {
    // Déplacement subtil de la caméra autour de sa position de base
    const offsetX = mouse.x * 0.2; // ajuster l'amplitude horizontale
    const offsetY = mouse.y * 0.05; // ajuster l'amplitude verticale

    camera.position.x = baseCameraPos.x + offsetX;
    camera.position.y = baseCameraPos.y - offsetY;
  }

  renderer.render(scene, camera);
}

animate();


// --- RESIZE ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
