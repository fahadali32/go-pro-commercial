import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import * as THREE from "three";
import Scene from "./Scene";
import { useControls } from "leva";

export default function App() {
  const modelRef = useRef();
  const [scale, setScale] = useState(1);

  return (
    <Canvas flat linear frameloop="demand">
      <CameraAnimation />
      <ambientLight intensity={1} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />

      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={7} environment="park">
          <Scene rotation={[-Math.PI / 2, 0, 0]} />
        </Stage>

        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

const CameraAnimation = () => {
  const [started, setStarted] = useState(false);
  const vec = new THREE.Vector3();

  useEffect(() => {
    setStarted(true);
  }, []);

  useFrame((state) => {
    if (started) {
      // state.camera.lookAt(0, 2, 0);
      // state.camera.position.lerp(vec.set(6, 6, -4), 0.008);
    }
    return null;
  });
  return null;
};
