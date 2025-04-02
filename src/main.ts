import * as THREE from 'three';
import { Renderer } from './components/renderer';
import { Camera } from './components/camera';
import { player } from './components/player';

import './style.css'

const scene = new THREE.Scene();
scene.add(player)

// ambient light
const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

//directional light 
const directionalLight = new THREE.DirectionalLight();
directionalLight.position.set(-100, -100, 200);
scene.add(directionalLight);


const camera = Camera();
scene.add(camera)

const renderer = Renderer();
renderer.render(scene, camera);