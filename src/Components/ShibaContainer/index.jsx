import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
// @ts-ignore
import Shiba from './Shiba';
import { useControls } from 'leva';
import * as THREE from 'three';
import {
  Cloud,
  Center,
  Bounds,
  OrbitControls,
  Plane,
  softShadows,
  Box,
} from '@react-three/drei';

const Controler = ({ shibaRef, body, collarRef, currentFocus }) => {
  const vec = new THREE.Vector3();
  const Camera = useThree((state) => state.camera);

  const [cords, setCords] = useState([0, 0, 2]);
  useEffect(() => {
    switch (body) {
      case 'nose':
        setCords([0, 0, 2]);
        break;
      case 'ears':
        setCords([0, 1, 1]);
        break;
      default:
        setCords([0, 0, 2]);
    }
  }, [body]);

  // useEffect(() => {
  //   Camera.lookAt(currentFocus.current.position);
  //   console.log('asd');
  // }, [Camera, currentFocus]);

  useFrame((state) => {
    // state.camera.position.lerp(vec.set(...cords), 0.02);
    // state.camera.updateProjectionMatrix();
    // Camera.position.x = Math.sin(xCursor * Math.PI * 2) * 3;
    // Camera.position.z = Math.cos(xCursor * Math.PI * 2) * 3;

    // state.camera.position.x = Math.cos(state.clock.elapsedTime) * 4;
    // state.camera.position.z = Math.sin(state.clock.elapsedTime) * 4;

    if (collarRef.current) {
      // state.camera.lookAt(CameraLookAt.x, CameraLookAt.y, CameraLookAt.z)
      state.camera.lookAt(currentFocus.current.position);
    }
  });
  return <></>;
};

const CustomBox = (props) => {
  const ref = useRef(null);

  useFrame((state) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime);
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime);
  });
  return (
    <Box ref={ref} {...props}>
      <meshStandardMaterial />
    </Box>
  );
};

const CustomPlane = (props) => {
  // useFrame(() => {
  //   ref.current.rotation.x = Math.PI;
  // });
  return (
    <Plane {...props}>
      <meshStandardMaterial color="white" receiveShadow />
      {/* <meshNormalMaterial /> */}
      {/* <meshDepthMaterial /> */}
    </Plane>
  );
};

const Index = ({
  body,
  ShibaRef1,
  ShibaRef2,
  ShibaRef3,
  currentFocus,
  setCurrentFocus,
}) => {
  const cameraControls = useRef(null);

  const CollarRef = useRef(null);

  const { scale } = useControls('Shiba', {
    scale: {
      value: 0.5,
      step: 0.1,
      min: 0.5,
      max: 5,
    },
  });

  return (
    <Canvas
      shadows
      style={{
        // backgroundColor: '#111a21',
        height: '100vh',
        width: '50vw',
      }}
      camera={{
        position: [1, 1, 2],
        fov: 40,
        near: 0.01,
        far: 90,
      }}
    >
      <Bounds fit observe margin>
        <Shiba
          shibaRef={ShibaRef1}
          collarRef={CollarRef}
          scale={scale}
          position={[-1, 0, 0]}
          setCurrentFocus={setCurrentFocus}
          receiveShadow
          castShadow
        />
        <Shiba
          shibaRef={ShibaRef2}
          collarRef={CollarRef}
          scale={scale}
          setCurrentFocus={setCurrentFocus}
          receiveShadow
          castShadow
        />
        <Shiba
          shibaRef={ShibaRef3}
          collarRef={CollarRef}
          scale={scale}
          position={[1, 0, 0]}
          setCurrentFocus={setCurrentFocus}
          receiveShadow
          castShadow
        />
      </Bounds>

      <CustomBox position={[0, 0.5, 0.5]} scale={0.5} castShadow />
      <CustomPlane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
        scale={20}
        receiveShadow
      />
      {/* <Box castShadow position={[0, 1, 0]}>
        <meshStandardMaterial attach="material" color="blue" castShadow />
      </Box>

      <Plane
        position={[0, 0, -1]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={20}
        receiveShadow
      >
        <meshStandardMaterial attach="material" color="white" receiveShadow />
      </Plane> */}

      <OrbitControls
      // makeDefault
      // minAzimuthAngle={0}
      // maxAzimuthAngle={Math.PI / 2}
      // minPolarAngle={Math.PI / 3}
      // maxPolarAngle={Math.PI / 3}
      />

      <Controler
        shibaRef={currentFocus}
        body={body}
        collarRef={CollarRef}
        currentFocus={currentFocus}
      />

      {/* Lights */}
      {/* <ambientLight intensity={0.1} /> */}
      <pointLight position={[2, 2, 2]} intensity={1} color="green" castShadow />
      <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        position={[0, 2, 2]}
      />
    </Canvas>
  );
};

export default Index;
