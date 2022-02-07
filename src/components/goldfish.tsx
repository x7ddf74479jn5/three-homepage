import { Box, Spinner } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { OrthographicCamera, WebGL1Renderer } from 'three';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { loadGLTFModel } from '../lib/model';

const easeOutCirc = (x: number) => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

export const Goldfish = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [renderer, setRenderer] = useState<WebGL1Renderer>();
  const [_camera, setCamera] = useState<OrthographicCamera>();
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState<OrbitControls>();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGL1Renderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      // 640 ->240
      // 8 -> 6
      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      loadGLTFModel(scene, '/goldfish.glb', {
        isReceiveShadow: false,
        isCastShadow: false,
      }).then(() => {
        animate();
        setIsLoading(false);
      });

      let req = 0;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, [initialCameraPosition, renderer, scene, target]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);

    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [handleWindowResize, renderer]);

  return (
    <Box
      ref={refContainer}
      className='goldfish'
      m='auto'
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 4880, 640]}
      h={[280, 4880, 640]}
      position='relative'
    >
      {isLoading && (
        <Spinner
          size='xl'
          position='absolute'
          left='50%'
          top='50%'
          ml='calc(0px - --var(--spinner-size) / 2)'
          mt='calc(0px - --var(--spinner-size))'
        />
      )}
    </Box>
  );
};
