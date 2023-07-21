import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'
import LazyLoad from 'react-lazyload'

const BallCanvas = ({icon}) => {
  const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl])
    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial 
          color="#fff8eb"
          polygonOffsetFactor={-5}/>
          <Decal 
          map={decal} 
          position={[0,0,1]}
          //by rotating it this way, it gets straight, otherwise it was showing its mirror image
          rotation={[2*Math.PI, 0, 6.25]}
          
          />
        </mesh>
      </Float>
    )
  }

  return (
    <LazyLoad height={100} width={100} >
    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={CanvasLoader}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
    </LazyLoad>
  )
}

export default BallCanvas
