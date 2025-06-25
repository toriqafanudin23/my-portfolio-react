import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'; // pastikan ini pakai kode dengan animasi & ref

const UjiCobaAR = () => {
  const modelRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAR, setIsAR] = useState(false); // mode AR aktif?

  const toggleAnimation = () => {
    if (isPlaying) {
      modelRef.current?.pause();
    } else {
      modelRef.current?.resume();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 bg-gray-900 text-white relative">
      {!isAR ? (
        <>
          {/* 3D Model View */}
          <div className="w-full h-[80vh] bg-black relative">
            <Canvas camera={{ position: [0, 1, 3], fov: 60 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[2, 2, 5]} intensity={1} />
              <Model ref={modelRef} />
              <OrbitControls />
            </Canvas>
            {/* Tombol kontrol */}
            <div className="absolute top-4 left-4 flex gap-2">
              <button
                onClick={toggleAnimation}
                className="bg-white text-black px-3 py-1 rounded shadow"
              >
                {isPlaying ? 'Pause' : 'Resume'}
              </button>
              <button
                onClick={() => setIsAR(true)}
                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
              >
                Masuk AR
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* AR Mode View */}
          <div className="w-full h-screen relative">
            <iframe
              src="https://mywebar.com/p/Project_1_w7y625xuc5"
              className="w-full h-full border-none"
              allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; microphone"
              title="WebAR"
            ></iframe>
            <button
              onClick={() => setIsAR(false)}
              className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Kembali ke 3D
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UjiCobaAR;
