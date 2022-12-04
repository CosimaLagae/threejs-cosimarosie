import React, { useEffect } from 'react';
//import { GLTFLoader } from'three/examples/jsm/loaders/GLTFLoader.js';
import '../assets/styles/ThreeD.css';

//import obj  from '../assets/logo/chark.glb'

import * as THREE from 'three';

function ThreeD() {
    useEffect(() => {
        const canvas =document.querySelector('.threeJsCanvas')
        const scene = new THREE.Scene();

        //object
        const geometry = new THREE.BoxGeometry(1,1,1)
        const material = new THREE.MeshBasicMaterial({ color:'red' })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)






        //THREE.JS JOURNEY CODE
         //sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        //camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
        camera.position.z = 10
        
        scene.add(camera)

        //renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        renderer.setSize(sizes.width,sizes.height)
        renderer.render(scene,camera) 



    }, []);

  return (
    <div className="threed">
        <canvas className="threeJsCanvas"></canvas>
    </div>
  );
}

export default ThreeD;
