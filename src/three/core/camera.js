import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class CameraController {
  constructor({
    canvas,
    helpers = false,
    fov = 75,
    near = 0.1,
    far = 100,
    basePosition = new THREE.Vector3(0, 4, 2.8),
  }) {
    this.helpers = helpers;

    // --- CAMERA ---
    this.camera = new THREE.PerspectiveCamera(
      fov,
      window.innerWidth / window.innerHeight,
      near,
      far
    );

    this.basePosition = basePosition.clone();
    this.camera.position.copy(this.basePosition);
    
    // --- MOUSE ---
    this.mouse = { x: 0, y: 0 };
    this.mouseWheel = 0;

    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('wheel', this.onMouseWheel.bind(this));

    // --- CONTROLS (HELPERS) ---
    if (this.helpers) {
      this.controls = new OrbitControls(this.camera, canvas);
      this.camera.position.set(0, 3, 2.8);
      this.camera.rotation.x = -4;
    }
  }

  onMouseMove(e) {
    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  }

  onMouseWheel(e) {
    /*
    this.mouseWheel += e.deltaY / 100;
    this.basePosition.x = this.mouseWheel;

    if (this.helpers) {
      this.camera.position.copy(this.basePosition);
    }*/
  }

  update() {
    if (this.helpers) {
      this.controls.target.set(0, 1.5, -5);
      this.controls.update();
      return;
    }

    // --- CAMERA FLOAT SUBTLE ---
    const offsetX = this.mouse.x * 0.2;
    const offsetY = this.mouse.y * 0.05;

    this.camera.position.x = this.basePosition.x + offsetX;
    this.camera.position.y = this.basePosition.y - offsetY;
  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  getCamera() {
    return this.camera;
  }
}
