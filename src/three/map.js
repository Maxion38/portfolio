import * as THREE from 'three';
import Terrain from './terrain.js';
import OakTree from './tree/oak.js';
//import GrassBase from './grass/grassBase.js';
import { randomOutside } from './utils.js';
import { COLORS } from './constants.js';


export default class Map extends THREE.Group {
  constructor() {
    super();

    this.terrains = [];
    this.trees = [];

    this._createTerrains();
    this._createTrees();
    // this._createGrass();
  }

  _createTerrains() {
    const front = new Terrain({
        width: 20,
        segments: 100,
        color: new THREE.Color(COLORS.MAP),
        curve: (t) =>
            Math.sin(t * Math.PI * 3) * 0.25 +
            Math.sin(t * Math.PI * 9) * 0.15 +
            Math.sin(t * Math.PI * 16) * 0.05 +
            0.7,
    });
    front.group.position.z = -2;
    this.add(front.group);
    this.terrains.push(front);

    const mid = new Terrain({
        width: 35,
        segments: 100,
        grassCount: 1500,
        color: new THREE.Color(COLORS.MAP),
        curve: (t) =>
            Math.sin(t * Math.PI * 2) * 0.35 +
            Math.sin(t * Math.PI * 6) * 0.12 +
            0.6,
    });
    mid.group.position.z = -5;
    this.add(mid.group);
    this.terrains.push(mid);

    const back = new Terrain({
        width: 55,
        segments: 100,
        grassCount: 2000,
        color: new THREE.Color(COLORS.MAP),
        curve: (t) =>
            Math.sin(t * Math.PI * 1.5) * 0.25 + 0.5,
    });
    back.group.position.z = -9;
    this.add(back.group);
    this.terrains.push(back);
  }

  _createTrees() {
    // front trees
    for (let i = 0; i < 3; i++) {
        const oakTree = new OakTree({height: 7.5, color: new THREE.Color(COLORS.MAP)});
        oakTree.position.set(randomOutside(-8, -4, 4, 8), 0, -2.001);
        this.trees.push(oakTree);
        this.add(oakTree);
    }

    // mid trees
    for (let i = 0; i < 6; i++) {
        const oakTree = new OakTree({height: 10, color: new THREE.Color(COLORS.MAP)});
        oakTree.position.set(randomOutside(-8, -3, 3, 8), 0, -5.001);
        this.trees.push(oakTree);
        this.add(oakTree);
    }

    // back trees
    for (let i = 0; i < 10; i++) {
        const oakTree = new OakTree({height: 12, color: new THREE.Color(COLORS.MAP)});
        oakTree.position.set(randomOutside(-8, -1, 1, 8), 0, -9.001);
        this.trees.push(oakTree);
        this.add(oakTree);
    }
  }

  _createGrass() {
    this.grass = new GrassBase({ width: 20 });
    this.add(this.grass);
  }

  update(time) {
    this.terrains.forEach(t => t.update(time));
    this.trees.forEach(t => t.update(time));
  }
}
