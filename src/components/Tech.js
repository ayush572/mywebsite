import React, { Suspense } from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const BallCanvas = React.lazy(() => import('./canvas/BallCanvas'));

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-18 h-18' key={technology.name}>
          {/* Use Suspense to handle the loading state */}
          <Suspense fallback={<div>Loading...</div>}>
            {/* Lazy load the BallCanvas component */}
            <BallCanvas icon={technology.icon} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
