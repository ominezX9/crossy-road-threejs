import * as THREE from "three";
import { Grass } from "../shared/grass";
import { Row } from "../../types";


export const metadata: Row[] = [
    {
        type: "forest",
        trees: [
            { titleIndex: -3, height: 50 },
            { titleIndex: 2, height: 20 },
            { titleIndex: 5, height: 50 },
        ]
    }
]

export const map = new THREE.Group();

export function initializeMap() {
    const grass = Grass(0);
    map.add(grass)
}