import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const UjiCobaAR = () => {
  const [isAR, setIsAR] = useState(false);
  const containerRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!isAR && containerRef.current) {
      // Clean up jika sebelumnya ada renderer
      if (rendererRef.current) {
        containerRef.current.innerHTML = '';
        rendererRef.current.dispose();
      }

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 1, 2);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const light = new THREE.HemisphereLight(0xffffff, 0x444444);
      scene.add(light);

      const loader = new GLTFLoader();
      loader.load(
        'https://bxehantrfbyenzvyrfoc.supabase.co/storage/v1/object/public/files//jaring-kubus-1.glb',
        (gltf) => {
          const model = gltf.scene;
          model.scale.set(1, 1, 1); // Ubah ukuran jika perlu
          scene.add(model);

          const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
          };
          animate();
        },
        undefined,
        (error) => {
          console.error('Error loading GLB:', error);
        }
      );

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
    }
  }, [isAR]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
      <button
        onClick={() => setIsAR(!isAR)}
        className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
      >
        {isAR ? 'Kembali ke 3D Viewer' : 'Lihat dalam AR'}
      </button>

      {!isAR && (
        <div
          ref={containerRef}
          className="w-full h-[80vh] rounded border overflow-hidden"
        ></div>
      )}

      {isAR && (
        <div className="w-full h-[80vh] border rounded overflow-hidden">
          <iframe
            src="https://mywebar.com/p/Project_1_w7y625xuc5"
            className="w-full h-full border-none"
            allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; microphone"
            title="WebAR"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default UjiCobaAR;
