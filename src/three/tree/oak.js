import * as THREE from 'three';
import TreeTrunk from './trunk/trunk.js';
import {Leaves} from './leaves/leaves.js'


export default class OakTree extends THREE.Group {
    constructor(params = {color: 0x194522,}) {
        super();

        const {
            height = 1,
            color = new THREE.Color(0xff2800),
            //trunkBaseWidth = 0.6,
            //trunkBranchCount = 4,
        } = params;

        // trunk
        this.trunk = new TreeTrunk({height: height, color: color});
        this.add(this.trunk)
        
        // leaves
        this.leaves = new Leaves({color: color});
        this.leaves.position.set(0, height, 0);
        this.add(this.leaves);
    }

    
    update(time) {
        this.children.forEach(child => {
            if (typeof child.update === 'function') {
                child.update(time);
            }
        });
    }
}