import { useState } from 'react';

const UjiCobaAR = () => {
  const [showAR, setShowAR] = useState(true);

  const handleClose = () => {
    setShowAR(false); // menghapus iframe dari DOM
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative">
      {showAR ? (
        <>
          <iframe
            src="https://mywebar.com/p/Project_1_w7y625xuc5"
            className="w-full h-screen border-none block"
            allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking; microphone"
            title="WebAR"
          ></iframe>
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow-md z-50"
          >
            Tutup Kamera
          </button>
        </>
      ) : (
        <p className="text-lg text-center">Kamera telah dimatikan.</p>
      )}
    </div>
  );
};

export default UjiCobaAR;
