import * as THREE from "three";
import { Grass } from "../shared/grass";

export const map = new THREE.Group();

export function initializeMap() {
    const grass = Grass(2);
    map.add(grass)
}