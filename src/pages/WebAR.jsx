import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Load MindAR dari CDN (inject ke window object)
const MINDAR_SCRIPT_URL =
  'https://cdn.jsdelivr.net/npm/mind-ar@1.1.4/dist/mindar-image-three.prod.js';

export default function MindARViewer() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadMindAR = async () => {
      if (!window.MINDAR) {
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = MINDAR_SCRIPT_URL;
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }

      const mindarThree = new window.MINDAR.IMAGE.MindARThree({
        container: containerRef.current,
        imageTargetSrc:
          'https://vmhsaugkciussfknmyaq.supabase.co/storage/v1/object/public/glb-bucket/targets.mind',
      });

      const { renderer, scene, camera } = mindarThree;

      const anchor = mindarThree.addAnchor(0);
      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      scene.add(light);

      const loader = new GLTFLoader();
      loader.load(
        'https://vmhsaugkciussfknmyaq.supabase.co/storage/v1/object/public/glb-bucket/animasi-jaring.glb',
        (gltf) => {
          const model = gltf.scene;
          model.scale.set(0.5, 0.5, 0.5);
          anchor.group.add(model);
        }
      );

      await mindarThree.start();

      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
    };

    loadMindAR();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    />
  );
}
