import * as THREE from 'three';
import { Renderer } from './components/renderer';
// import { Camera } from './components/Camera';
// import { Player } from './components/Player';

import './style.css'

const scene = new THREE.Scene();

const camera = Camera();

const renderer = Renderer();
renderer.render(scene, camera);