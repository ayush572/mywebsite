// import React, { Suspense } from 'react'
// import { Canvas, Mesh, hemisphereLight, PointLight } from '@react-three/fiber'
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
// // import CanvasLoader from '../canvas/CanvasLoader'

// const Computers = () => {
//   const computer = useGLTF('./desktop_pc/scene.gltf')
//   return (
//     <Mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <pointLight intensity={1} />
//       <primitive object={computer.scene} />
//     </Mesh>
//   )
// }

// const ComputersCanvas = () => {
//   return (
//     <Canvas
//     frameloop='demand'
//     shadows
//     // fov means field of view
//     camera={{position: [20,3,5], fov: 25}}
//     //this basically is used to properly render our model
//     gl={{preserveDrawingBuffer: true}}>
//       <Suspense fallback={null}>
      
//       {/* to move the model around */}
//       <OrbitControls enableZoom={false}
//       // by setting the max and min polar angle, it will restrict the user
//       // to not rotate the model all the way around but along a specific direction only
//       maxPolarAngle={Math.PI/2}
//       minPolarAngle={Math.PI/2}/> 
//       <Computers />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   )
// }

// export default Computers

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader  from '../../components/Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20,50,10]} 
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}/>

      {/* this primitive is the actual object */}
      <primitive object={computer.scene} scale={0.75} position={[0,-3.25,-1.5]} rotation={[-0.01,-0.2,-0.1]}/>
    </group>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={Loader}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
