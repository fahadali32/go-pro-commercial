import { OrbitControls, PerspectiveCamera, Stage, Stats } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three";
import Floor from "./Floor";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Scene = () => {
  const boxRef = useRef();
  const gltf = useLoader(GLTFLoader, "/gopro_hero/scene.gltf");
  useFrame(() => {
    boxRef.current.rotation.y += 0.004;
    // boxRef.current.rotation.x += 0.004;
    // boxRef.current.rotation.z += 0.004;
  });

  const directionalRef = useRef();

  const options = useMemo(() => {
    return {
      x: { value: 1, min: -10, max: 10, step: 0.1 },
      y: { value: 1, min: -10, max: 10, step: 0.1 },
      z: { value: 1, min: -10, max: 10, step: 0.1 },
      visible: true,
      color: { value: "white" },
    };
  }, []);

  const pA = useControls("Box position", options);
  const dL = useControls("Directional Light", {
    visible: {
      value: true,
      onChange: (v) => {
        directionalRef.current.visible = v;
      },
    },
    position: {
      x: 1,
      y: 1,
      z: 1,
      onChange: (v) => {
        directionalRef.current.position.copy(v);
      },
    },
    color: {
      value: "white",
      onChange: (v) => {
        directionalRef.current.color = new THREE.Color(v);
      },
    },
  });

  return (
    <group>

      <Stage preset="rembrandt" intensity={1} environment="city">
        <primitive
          object={gltf.scene}
          position={[pA.x, pA.y, pA.z]}
          visible={pA.visible}
          ref={boxRef}
        />
      </Stage>
      {/* <Floor /> */}

      <directionalLight intensity={0.5} ref={directionalRef} color={dL.color} />
    </group>
  );
};

export default function Preview() {
  return (
    <Canvas
      shadows
      style={{ width: "100%", height: "80vh" }}
      camera={{ position: [-0.5, 1, 2] }}
    >
      <fog />
      <ambientLight intensity={0.1} />
      <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <OrbitControls />
      <Scene />
      <Stats />
    </Canvas>
  );
}
