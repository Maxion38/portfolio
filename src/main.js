import '../styles/style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import Terrain from './terrain.js';
import { randomOutside } from './utils.js';
import OakTree from './tree/oak.js';
import GrassBase from './grass/grassBase.js'


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

scene.background = new THREE.Color(0xd2fae0);
const renderer = new THREE.WebGLRenderer(rendererOptions);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// --- LIGHT ---
//const pointLight = new THREE.PointLight(0xfffffff, 1000);
//pointLight.position.set(-5, 20, 5);
const ambientLight = new THREE.AmbientLight(0xffffff, 50);
//scene.add(pointLight, ambientLight);
scene.add(ambientLight);

// --- HELPERS ---
let controls;
if (HELPERS_ENABLED) {
  //const lightHelper = new THREE.PointLightHelper(pointLight);
  const gridHelper = new THREE.GridHelper(200, 50);
  scene.add(gridHelper);
  // scene.add(lightHelper, gridHelper);
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

// --- TERRAIN ---
const frontTerrain = new Terrain({
  width: 20,
  segments: 100,
  color: new THREE.Color(0x194522),
  curve: (t) =>
    Math.sin(t * Math.PI * 3) * 0.25 +
    Math.sin(t * Math.PI * 9) * 0.15 +
    Math.sin(t * Math.PI * 16) * 0.05 +
    0.7,
});
frontTerrain.group.position.z = -2;
scene.add(frontTerrain.group);

const midTerrain = new Terrain({
  width: 35,
  segments: 100,
  grassCount: 1500,
  color: new THREE.Color(0x194522),
  // color: new THREE.Color(0x395940),
  curve: (t) =>
    Math.sin(t * Math.PI * 2) * 0.35 +
    Math.sin(t * Math.PI * 6) * 0.12 +
    0.6,
});
midTerrain.group.position.z = -5;
scene.add(midTerrain.group);

const backTerrain = new Terrain({
  width: 55,
  segments: 100,
  grassCount: 2000,
  color: new THREE.Color(0x194522),
  // color: new THREE.Color(0x647568),
  curve: (t) =>
    Math.sin(t * Math.PI * 1.5) * 0.25 + 0.5,
});
backTerrain.group.position.z = -9;
scene.add(backTerrain.group);


// --- TREES ---
const trees = [];

// front trees
for (let i = 0; i < 3; i++) {
  const oakTree = new OakTree({height: 7.5, color: new THREE.Color(0x194522)});
  oakTree.position.set(randomOutside(-8, -4, 4, 8), 0, -2.001);
  trees.push(oakTree);
  scene.add(oakTree);
}

// mid trees
for (let i = 0; i < 6; i++) {
  const oakTree = new OakTree({height: 10, color: new THREE.Color(0x395940)});
  oakTree.position.set(randomOutside(-8, -3, 3, 8), 0, -5.001);
  trees.push(oakTree);
  scene.add(oakTree);
}

// back trees
for (let i = 0; i < 10; i++) {
  const oakTree = new OakTree({height: 12, color: new THREE.Color(0x647568)});
  oakTree.position.set(randomOutside(-8, -1, 1, 8), 0, -9.001);
  trees.push(oakTree);
  scene.add(oakTree);
}

// --- sandbox ---
const grassBase = new GrassBase({
  width: 20,
  curve: t => Math.sin(t * Math.PI * 4) * 0.3, 
});

grassBase.position.z = 0;


scene.add(grassBase);

// --- VENT ---
const clock = new THREE.Clock();

const windDirection = new THREE.Vector2(1, 0);   // direction actuelle droite
const targetWindDirection = new THREE.Vector2(-1, 0); // direction cible gauche

// Changement lent de direction toutes les X secondes
setInterval(() => {
  targetWindDirection.set(
    Math.random() * 2 - 1,
    Math.random() * 0.4
  ).normalize();
}, 6000);


// --- ANIMATION LOOP ---
function animate() {
  requestAnimationFrame(animate);
  const time = clock.getElapsedTime();

  if (HELPERS_ENABLED) {
    controls.target.set(0, 1.5, -5);
    controls.update(); // TRÈS IMPORTANT
  }

  // Lerp doux vers la direction cible
  windDirection.lerp(targetWindDirection, 0.002).normalize();

  frontTerrain.setWindDirection(windDirection);
  frontTerrain.update(time);
  midTerrain.setWindDirection(windDirection);
  midTerrain.update(time);
  backTerrain.setWindDirection(windDirection);
  backTerrain.update(time);

  //oakTree.update(time);

  trees.forEach(tree => tree.update(time));

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
