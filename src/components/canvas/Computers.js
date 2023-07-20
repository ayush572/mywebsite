import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader  from '../../components/Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={isMobile ? [15,10,10]:[-20,50,10]} 
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}/>

      {/* this primitive is the actual object */}
      <primitive object={computer.scene} scale={isMobile ? 0.4: 0.75} position={isMobile?[-1,-1,-0.5]:[0,-4.0,-1.5]} rotation={[-0.01,-0.2,-0.1]}/>
    </group>
  );
};

const ComputersCanvas = ({isMobile}) => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{marginTop: '100px'}}
    >
      <Suspense fallback={Loader}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
