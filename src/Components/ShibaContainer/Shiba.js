/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/shiba.gltf');
  return (
    <group
      {...props}
      dispose={null}
      ref={props.shibaRef}
      onClick={() => {
        props.setCurrentFocus(props.shibaRef);
        console.log(props.shibaRef.current.position);
      }}
      receiveShadow
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* Collar */}
          <group rotation={[-Math.PI / 2, 0, 0]} ref={props.collarRef}>
            <mesh
              geometry={nodes.Group18985_default_0.geometry}
              material={nodes.Group18985_default_0.material}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Box002_default_0.geometry}
              material={nodes.Box002_default_0.material}
            />
          </group>
          {/* Eyes */}
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object001_default_0.geometry}
              material={nodes.Object001_default_0.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/shiba.gltf');