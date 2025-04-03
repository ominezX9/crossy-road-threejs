import * as THREE from 'three';
import { Renderer } from './components/renderer';
import { Camera } from './components/camera';
import { player } from './components/player';
import { map, initializeMap } from './components/maps/map';

import './style.css'

const scene = new THREE.Scene();
scene.add(player)
scene.add(map)

// ambient light
const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

//directional light 
const directionalLight = new THREE.DirectionalLight();
directionalLight.position.set(-100, -100, 200);
scene.add(directionalLight);


const camera = Camera();
scene.add(camera)


initializeGame();

function initializeGame() {
    initializeMap();
}

const renderer = Renderer();
renderer.render(scene, camera);