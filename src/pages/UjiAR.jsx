const UjiCobaAR = () => {
  return (
    <div>
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
      >
        {/* Kamera + Marker */}
        {/* <a-marker preset="hiro"> */}
        <a-marker
          type="pattern"
          url="https://bxehantrfbyenzvyrfoc.supabase.co/storage/v1/object/public/files//marker.patt"
        >
          {/* 3D Box muncul di atas marker */}
          <a-box
            position="0 0.5 0"
            material="color: red;"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 2000"
          ></a-box>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>

      {/* A-Frame dan AR.js Script */}
      <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@3.4.2/aframe/build/aframe-ar.min.js"></script>
    </div>
  );
};

export default UjiCobaAR;
