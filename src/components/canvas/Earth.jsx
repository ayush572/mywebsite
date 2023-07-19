import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import Loader  from '../../components/Loader';
const Earth = ({isMobile}) => {
  const earth = useGLTF('./planet/scene.gltf');
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
      <primitive object={earth.scene} scale={isMobile ? 2 : 6} position-y={0} rotation-y={0}/>
    </group>
  )
}


const EarthCanvas = ({isMobile}) => {
  return(
    <Canvas shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    camera={{
      fov:100,
      near:0.1,
      far:200,
      position:[-4,3,6]
    }}>
      {/* suspense ensures that while our model is loading we have something to show */}
      <Suspense fallback={Loader} />
      {/* this will help us to move the earth with our mouse */}
      <OrbitControls autoRotate={true} enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/> 
      <Earth isMobile={isMobile}/>
    </Canvas>
  )
}
export default EarthCanvas