import React from 'react';
import { useEffect } from 'react';
import '../assets/styles/Main.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


import obj from "../assets/models/balloon-cosimarosie3.glb";
import img from "../assets/img/cosimarosie1.png"


function Main() {
    useEffect(()=>{
        const canvas = document.querySelector('canvas.webgl');
        const scene = new THREE.Scene();
        

        //const dracoLoader = new DRACOLoader()
        //dracoLoader.setDecoderPath('/draco/')

        const loader = new GLTFLoader();
        //loader.setDRACOLoader(dracoLoader)


        loader.load(obj, function(gltf) {
            console.log(gltf, "hello glb")
            const obj = gltf.scene;
            obj.position.y = -5
            obj.position.x = -3
            obj.scale.set(1.5,1.5,1.5)
            scene.add(obj);
        }, function(xhr){
            //console.log(xhr)
            console.log((xhr.loaded/xhr.total*1000)+"% loaded")
            //console.warn(xhr.responseText);
        }, function(error){
            console.log(error,'ERROR occured')
        }) 



        // TUTORIAL CODE
        const light = new THREE.PointLight(0xffffff,3)
        light.position.set(0,3,20)
        //light.castShadow = true
        //light.shadow.camera.far = 1
        //light.shadow.mapSize.set(500,500)
        //light.shadow.normalBias = 1
        scene.add(light)

        const sizes = {
            width: window.innerWidth,
            height: 600
        }

        window.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = window.innerWidth

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1,100)
        camera.position.set(0,0,12)
        scene.add(camera)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        })
        renderer.setSize(sizes.width,sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
        renderer.shadowMap.enabled = true
        renderer.gammaOutput = true
        renderer.setClearColor(0x000000,0);


        function animate(){
            requestAnimationFrame(animate)
            renderer.render(scene,camera)

        }
        animate() 


    }, []); 


  return (
    <div className="Main">
        <canvas class='webgl'></canvas>
        <div className='img'>
            <img src={img} alt="" />
        </div>
        <div class="footer">
            <h2>COSIMALAGAE@GMAIL.COM  |</h2>
            <a href="https://www.instagram.com/cosima.rosie/" target="_blank" rel="noopener noreferrer">       
                <h2>@COSIMA.ROSIE</h2>
            </a>
        </div>
    </div>
  );
}

export default Main;
