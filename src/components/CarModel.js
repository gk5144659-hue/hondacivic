"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/car.glb");
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
    }
  });
  return (
    <primitive 
      object={scene} 
      scale={3} 
      position={[0, 0.2, 0]}
    />
  );
}

export default function CarModel() {
  return (
    <div style={{ height: "500px" }}>
      <Canvas shadows camera={{ position: [0, 2, 2.5] }}>
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 5, 2]} intensity={1} castShadow />

        <pointLight 
          position={[0, 0, 0]}
          color="red"
          intensity={6} 
          distance={5}
        />

        <Model />

        <mesh
         rotation={[-Math.PI / 2, 0, 0]}
         position={[0, -0.4, 0]}
         receiveShadow
        >
        
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.3} />
        </mesh>

        <OrbitControls 
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
}