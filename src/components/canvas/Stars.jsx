import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = ({ props, isMobile }) => {
  const ref = useRef();

  // Use a memoized sphere to prevent recalculation
  const sphere = useMemo(
    () => random.inSphere(new Float32Array(isMobile ? 2000 : 5000), { radius: 1.2 }),
    [isMobile]
  );

  // Optimize rotation speed for mobile devices
  useFrame((state, delta) => {
    const rotationSpeed = isMobile ? delta / 15 : delta / 10;
    ref.current.rotation.x -= rotationSpeed;
    ref.current.rotation.y -= rotationSpeed;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <pointsMaterial
          transparent
          color="#f272c8"
          size={isMobile ? 0.0015 : 0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({ isMobile }) => {
  return (
    <div className='w-full h-full absolute inset-0 z-[-1]'>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false, pixelRatio: Math.min(window.devicePixelRatio, 2) }}
      >
        <Suspense fallback={null}>
          <Stars isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
