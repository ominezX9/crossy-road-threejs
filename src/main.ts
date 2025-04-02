import * as THREE from 'three';
import { Renderer } from './components/renderer';
import { Camera } from './components/camera';
// import { Player } from './components/Player';

import './style.css'

const scene = new THREE.Scene();

const camera = Camera();
scene.add(camera)

const renderer = Renderer();
renderer.render(scene, camera);