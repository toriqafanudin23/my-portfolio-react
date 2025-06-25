import { useState } from 'react';

const UjiCobaAR = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
      >
        {isOpen ? 'Tutup Kamera' : 'Buka Kamera'}
      </button>

      {isOpen && (
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
