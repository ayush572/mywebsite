import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import Loader from '../../components/Loader';

const Earth = ({ isMobile }) => {
  const { scene } = useGLTF('./planet/scene.gltf');
  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={isMobile ? [15, 10, 10] : [-20, 50, 10]} 
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={scene} 
        scale={isMobile ? 2 : 6} 
        position-y={0} 
        rotation-y={0} 
      />
    </group>
  );
}

const EarthCanvas = ({ isMobile }) => {
  return (
    <Canvas 
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: isMobile ? 60 : 100,
        near: 0.1,
        far: 200,
        position: isMobile ? [-2, 1.5, 3] : [-4, 3, 6],
      }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          autoRotate 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />
        <Earth isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default EarthCanvas;
