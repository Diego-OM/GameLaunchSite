import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
//renderer.setSize( 800, 500 );

document.getElementById("modelDisplay").appendChild( renderer.domElement );

renderer.outputEncoding = THREE.sRGBEncoding;
// Instantiate a loader
const loader = new GLTFLoader();
// Load a glTF resource
loader.load('Models/scene.gltf', function ( gltf ) {

		scene.add( gltf.scene );
		
	},
	// called while loading is progressing
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// called when loading has errors
	function ( error ) {
		console.log( 'An error happened' );
	}
);

var light = new THREE.HemisphereLightProbe(0xffffff, 0x000000, 1);

scene.add(light);

camera.position.set(0,0.3,0.8);

function animate() {
	requestAnimationFrame( animate );
    scene.rotation.y += 0.004;
	renderer.render( scene, camera);
}

animate();