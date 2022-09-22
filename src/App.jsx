import Ftm from './Components/ftmScene';

// R3f
import {
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Sphere,
  useHelper,
} from '@react-three/drei';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { PointLightHelper, CameraHelper } from 'three';

// Theatre.js
import studio from '@theatre/studio';
import { getProject } from '@theatre/core';
import extension from '@theatre/r3f/dist/extension';
import { editable as e, SheetProvider } from '@theatre/r3f';
import { useRef } from 'react';
import { useEffect } from 'react';

import state from './state.json';

studio.initialize();
studio.extend(extension);

const project = getProject('Project', { state });
const demoSheet = project.sheet('Scene');

const Camera = (props) => {
  const ref = useRef(null);
  const set = useThree((state) => state.set);

  useEffect(() => void set({ camera: ref.current }));
  useFrame(() => ref.current.updateMatrixWorld());
  return <e.perspectiveCamera ref={ref} {...props} theatreKey="camera" />;
};

const Controler = ({ cameraRef }) => {
  useHelper(cameraRef, CameraHelper);
};

const App = () => {
  const cameraRef = useRef(null);

  useEffect(() => {
    demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 16] });
    console.log('Demo Sheet: ', demoSheet, '\nSequence :', demoSheet.sequence);
  }, []);
  return (
    <>
      <Canvas
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#111a21',
        }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <SheetProvider sheet={demoSheet}>
          {/* <Ftm /> */}
          {/* <OrbitControls /> */}
          {/* <e.Sphere theatreKey="Sphere" /> */}
          <Camera />
          {/* <PerspectiveCamera theatreKey="camera" ref={cameraRef} /> */}
          {/* <e.pointLight theatreKey="Light" ref={lightRef} color="green" /> */}
          <Ftm />

          <ambientLight intensity={0.5} />
          <Controler cameraRef={cameraRef} />
        </SheetProvider>
      </Canvas>
    </>
  );
};

export default App;
