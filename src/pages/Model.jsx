import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';

const Model = forwardRef((props, ref) => {
  const gltf = useGLTF(
    'https://bxehantrfbyenzvyrfoc.supabase.co/storage/v1/object/public/files//jaring-kubus-1.glb'
  );
  const mixer = useRef(null);
  const actions = useRef({});

  useFrame((_, delta) => mixer.current?.update(delta));

  useEffect(() => {
    if (gltf.animations.length > 0 && gltf.scene) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        actions.current[clip.name] = mixer.current.clipAction(clip);
        actions.current[clip.name].play();
      });
    }
  }, [gltf]);

  // Expose controls to parent via ref
  useImperativeHandle(ref, () => ({
    play: () => {
      Object.values(actions.current).forEach((action) => action.play());
    },
    pause: () => {
      Object.values(actions.current).forEach(
        (action) => (action.paused = true)
      );
    },
    resume: () => {
      Object.values(actions.current).forEach(
        (action) => (action.paused = false)
      );
    },
    stop: () => {
      Object.values(actions.current).forEach((action) => {
        action.stop();
      });
    },
  }));

  return <primitive object={gltf.scene} scale={1.5} position={[0, -1, 0]} />;
});

export default Model;
