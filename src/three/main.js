import * as THREE from 'three'
import { COLORS, HELPERS } from './constants.js'
import Map from './map.js'
import CameraController from './core/camera.js'

export function initThree(container) {

  // --- SCENE ---
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(COLORS.SKY)

  // --- CANVAS ---
  const canvas = document.createElement('canvas')
  container.appendChild(canvas)

  // --- RENDERER ---
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    depthWrite: false,
    alpha: true
  })

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)

  // --- CAMERA ---
  const cameraController = new CameraController({
    canvas: renderer.domElement,
    helpers: HELPERS
  })

  const camera = cameraController.getCamera()

  // --- HELPERS ---
  if (HELPERS) {
    const gridHelper = new THREE.GridHelper(200, 50)
    scene.add(gridHelper)
    container.classList.add('debug')
  }

  // --- MAP ---
  const map = new Map()
  scene.add(map)

  // --- ANIMATION LOOP ---
  const clock = new THREE.Clock()

  function animate() {
    map.update(clock.getElapsedTime())
    cameraController.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()

  // --- RESIZE ---
  function onResize() {
    cameraController.resize()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', onResize)

  // --- CLEANUP (important pour Astro) ---
  return () => {
    window.removeEventListener('resize', onResize)
    renderer.dispose()
    canvas.remove()
  }
}
