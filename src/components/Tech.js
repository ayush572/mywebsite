import React, { Suspense, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const BallCanvas = React.lazy(() => import('./canvas/BallCanvas'));

const Tech = () => {
  const batchSize = 6; // Number of BallCanvas components to load in each batch
  const [startIdx, setStartIdx] = useState(0);

  // Function to load the next batch of BallCanvas components
  const loadNextBalls = () => {
    setStartIdx((prevIdx) => Math.min(prevIdx + batchSize, technologies.length - batchSize));
  };

  // Function to load the previous batch of BallCanvas components
  const loadPrevBalls = () => {
    setStartIdx((prevIdx) => Math.max(prevIdx - batchSize, 0));
  };

  // Framer Motion variants for the Tech section
  const techSectionVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      variants={textVariant()}
    >
      <p className={styles.sectionSubText}>My Skills</p>
      <h2 className={styles.sectionHeadText} style={{marginBottom: '100px'}}>Techstacks</h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.slice(startIdx, startIdx + batchSize).map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            {/* Use Suspense to handle the loading state */}
            <Suspense fallback={<div>Loading...</div>}>
              {/* Lazy load the BallCanvas component */}
              <BallCanvas icon={technology.icon} />
            </Suspense>
          </div>
        ))}
      </div>
      <div className="flex justify-evenly mt-12 ">
        <motion.button
          onClick={loadPrevBalls}
          disabled={startIdx === 0}
          className={startIdx===0 ? 'bg-grey px-5 py-2 rounded-2xl opacity-50':'bg-tertiary px-5 py-2 rounded-2xl'}
          variants={textVariant()}
        >
          <b>Previous</b>
        </motion.button>
        <motion.button
          onClick={loadNextBalls}
          disabled={startIdx + batchSize >= technologies.length}
          className={startIdx + batchSize >= technologies.length ? 'bg-grey px-5 py-2 rounded-2xl opacity-50':'bg-tertiary px-5 py-2 rounded-2xl'}
          variants={textVariant()}
        >
          <b>Next</b>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, 'tech');
