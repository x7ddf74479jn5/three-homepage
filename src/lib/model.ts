import type { Scene } from 'three';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const loadGLTFModel = (
  scene: Scene,
  glbPath: string,
  options = { isReceiveShadow: true, isCastShadow: true }
) => {
  const { isReceiveShadow, isCastShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = 'goldfish';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = isReceiveShadow;
        obj.castShadow = isCastShadow;
        scene.add(obj);

        obj.traverse((child) => {
          if (child instanceof Mesh) {
            child.castShadow = isCastShadow;
            child.receiveShadow = isReceiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
};
