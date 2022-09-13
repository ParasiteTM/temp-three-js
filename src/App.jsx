// // // import * as THREE from 'three';
// // import React, { useState, useRef, useEffect } from 'react';
// // import { Canvas, useFrame, useThree } from '@react-three/fiber';
// // import {
// //   OrbitControls,
// //   PerspectiveCamera,
// //   OrthographicCamera,
// // } from '@react-three/drei';
// // import { Sphere, Box, Plane } from '@react-three/drei';
// // import gsap from 'gsap';

// // const Ball = ({ xCursor, yCursor }) => {
// //   const Camera = useThree((state) => state.camera);
// //   const Clock = useThree((state) => state.clock);
// //   const ballRef = useRef(null);

// //   // useEffect(() => {
// //   //   if (!!ballRef.current) {
// //   //     ballRef.current.tarns = Clock.elapsedTime;
// //   //   }
// //   // }, []);

// //   // useFrame(() => {
// //   // ballRef.current.rotation.y = Clock.elapsedTime;
// //   // ballRef.current.position.x = -(xCursor * 2);
// //   // ballRef.current.position.y = yCursor * 2;
// //   // ballRef.current.position.x = xCursor;
// //   // ballRef.current.rotation.y = Math.sin(xCursor * Math.PI * 2) * 3;
// //   // Camera.position.x = Math.sin(xCursor * Math.PI * 2) * 3;
// //   // Camera.position.z = Math.cos(xCursor * Math.PI * 2) * 3;
// //   // Camera.position.y = yCursor * 5;
// //   // Camera.lookAt(ballRef.current.position);
// //   // });
// //   return (
// //     <mesh ref={ballRef}>
// //       <Box />
// //       <meshStandardMaterial color="red" />
// //       {/* <axesHelper args={[2]} /> */}
// //     </mesh>
// //   );
// // };

// // const App = () => {
// //   const [xCursor, setXCursor] = useState(0);
// //   const [yCursor, setYCursor] = useState(0);

// //   // useEffect(() => {
// //   //   const getXYValue = (e) => {
// //   //     setXCursor(e.clientX / window.innerWidth - 0.5);
// //   //     setYCursor(e.clientY / window.innerHeight - 0.5);
// //   //   };

// //   //   window.addEventListener('mousemove', getXYValue);
// //   //   return () => window.removeEventListener('mousemove', getXYValue);
// //   // }, []);
// //   return (
// //     <>
// //       <Canvas
// //         camera={{
// //           position: [0, 1.5, 5],
// //           fov: 60,
// //           near: 0.1,
// //           far: 100,
// //         }}
// //         dpr={[2, 3]}
// //         shadows={true}
// //         style={{
// //           // backgroundColor: '#111a21',
// //           width: '100vw',
// //           height: '100vh',
// //         }}
// //       >
// //         {/* Objects */}
// //         {/* <Ball xCursor={xCursor} yCursor={yCursor} /> */}

// //         <mesh>
// //           <Box />
// //           <meshDepthMaterial color="red" wireframe={true} />
// //         </mesh>

// //         {/* Helper */}
// //         {/* <axesHelper args={[5]} /> */}

// //         {/* Lights */}
// //         <ambientLight intensity={0.1} />
// //         <pointLight position={[2, 2, 2]} />

// //         {/* Camera */}
// //         <OrbitControls />
// //       </Canvas>
// //     </>
// //   );
// // };

// // export default App;

// import { useState, useRef } from 'react';
// import { Box, OrbitControls, Plane, useTexture } from '@react-three/drei';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// // import { DoubleSide } from 'three';
// // import { useControls } from 'leva';
// import React from 'react';
// import Microphone from './Components/microphone.js';
// const Controls = ({ sphereRef }) => {
//   // const Clock = useThree((state) => state.clock);

//   return <></>;
// };

// // const MagicSphere = ({ sphereColor, sphereRef }) => {
// //   const map = useTexture(
// //     'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5938ae9e-47de-424a-8836-f98e6658d37b/dcmx1je-b18f08d6-0632-43da-8152-95348db00c29.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5MzhhZTllLTQ3ZGUtNDI0YS04ODM2LWY5OGU2NjU4ZDM3YlwvZGNteDFqZS1iMThmMDhkNi0wNjMyLTQzZGEtODE1Mi05NTM0OGRiMDBjMjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rKv3xScOkdAlHgPGF_vWpPFlTzsGGsWjQ23YS-gma6s'
// //   );
// //   const displacementMap = useTexture(
// //     'https://images.unsplash.com/photo-1657565704165-5354ecb61157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80g'
// //   );
// //   return (
// //     <Sphere castShadow={true} position={[0, 1, 0]} ref={sphereRef}>
// //       <meshStandardMaterial
// //         color={sphereColor}
// //         // map={map}
// //         displacementMap={displacementMap}
// //       />
// //     </Sphere>
// //   );
// // };

// const Terrain = () => {
//   const displacementMap = useTexture(
//     'https://images.unsplash.com/photo-1657565704165-5354ecb61157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80g'
//   );
//   const map = useTexture(
//     'https://thumbs.dreamstime.com/z/forest-ground-normal-map-texture-bump-map-texture-d-materials-forest-ground-normal-map-texture-bump-map-texture-194776753.jpg'
//   );
//   const planeRef = useRef(null);

//   return (
//     <Plane
//       ref={planeRef}
//       rotation={[-Math.PI / 2, 0, 0]}
//       args={[20, 20, 512, 512]}
//     >
//       <meshStandardMaterial
//         color="blue"
//         displacementMap={displacementMap}
//         map={map}
//       />
//     </Plane>
//   );
// };

// const DoorBox = ({ BoxRef }) => {
//   const Camera = useThree((state) => state.camera);
//   const [isFocused, setIsFocused] = useState(false);
//   const props = useTexture({
//     map: '/textures/door/color.jpg',
//   });

//   useFrame(() => {
//     if (isFocused) {
//       Camera.lookAt(BoxRef.current.position);
//     }
//   });

//   return (
//     <Box
//       args={[1, 1, 1]}
//       position={[0, 2, 0]}
//       ref={BoxRef}
//       onClick={() => setIsFocused((prev) => !prev)}
//     >
//       <meshStandardMaterial {...props} />
//     </Box>
//   );
// };
// const App = () => {
//   const sphereRef = useRef(null);
//   const BoxRef = useRef(null);
//   // const { cords, visible, scale, sphereColor } = useControls({
//   //   cords: { value: [0.2, 0.2, 0.2], min: -5, max: 5, step: 1 },
//   //   scale: { value: 2, step: 2 },
//   //   visible: true,
//   //   sphereColor: 'pink',
//   // });

//   return (
//     <>
//       <Canvas
//         shadows
//         style={{
//           width: '100vw',
//           height: '100vh',
//         }}
//       >
//         <DoorBox BoxRef={BoxRef} />
//         {/* <MagicSphere sphereRef={sphereRef} sphereColor={sphereColor} /> */}
//         <Terrain />
//         <Microphone />
//         <axesHelper />
//         <OrbitControls />
//         <Controls sphereRef={sphereRef} />
//         <ambientLight intensity={0.2} />
//         <pointLight intensity={1.5} position={[1, 7, 10]} />
//       </Canvas>
//     </>
//   );
// };

// export default App;

import React, { useState, useRef } from 'react';
import Shiba from './Components/ShibaContainer';
import TextComp from './Components/TextComp';

const App = () => {
  const ShibaRef1 = useRef(null);
  const ShibaRef2 = useRef(null);
  const ShibaRef3 = useRef(null);

  const [currentFocus, setCurrentFocus] = useState(ShibaRef2);
  const [body, setBody] = useState('nose');
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Shiba
        body={body}
        ShibaRef1={ShibaRef1}
        ShibaRef2={ShibaRef2}
        ShibaRef3={ShibaRef3}
        currentFocus={currentFocus}
        setCurrentFocus={setCurrentFocus}
      />
      <TextComp
        setBody={setBody}
        ShibaRef1={ShibaRef1}
        ShibaRef2={ShibaRef2}
        ShibaRef3={ShibaRef3}
        setCurrentFocus={setCurrentFocus}
      />
    </div>
  );
};

export default App;
