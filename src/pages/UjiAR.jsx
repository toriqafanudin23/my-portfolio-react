const UjiCobaAR = () => {
  return (
    <div className="flex items-center justify-center py-12 bg-black">
      <div className="w-full max-w-xl aspect-square relative">
        <a-scene
          vr-mode-ui="enabled: false"
          embedded
          arjs="sourceType: webcam; debugUIEnabled: false;"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <a-marker
            type="pattern"
            url="https://bxehantrfbyenzvyrfoc.supabase.co/storage/v1/object/public/files/marker.patt"
          >
            <a-box
              position="0 0.5 0"
              material="color: red;"
              animation="property: rotation; to: 0 360 0; loop: true; dur: 2000"
            ></a-box>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      </div>
    </div>
  );
};

export default UjiCobaAR;
