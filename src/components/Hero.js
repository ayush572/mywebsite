import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = ({ isMobile }) => {
  const roles = [
    "Programmer",
    "Software Developer",
    "FullStack Developer",
    "Blockchain Developer",
    "AI-ML Developer",
  ];

  const [currentText, setCurrentText] = useState(roles[0]);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true); // Start fading out
      setTimeout(() => {
        setCurrentText((prevText) => {
          const currentIndex = roles.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % roles.length;
          return roles[nextIndex];
        });
        setIsFadingOut(false); // Start fading in after the text changes
      }, 500); // Delay before fading in (adjust as needed)
    }, 3000); // Change text every 3 seconds (3000ms)

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, []);

  return (
    <section
      id="hero"
      className={isMobile ? "relative w-full h-[1000px] mx-auto mt-[-100px] mb-[0px]" : "relative w-full h-screen mx-auto mt-[-120px] mb-[0px]"}
    >
      {/* inset-0 is for the text that we will be writing */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
          <p className={`${styles.heroSubText} text-white-100`} style={{ marginTop: '20px' }}>
            Who am I?
          </p>
          <h1
            className={`${styles.heroHeadText} text-white`}
            
          >
            I'm a <span className='text-[#915eff]' style={{
              opacity: isFadingOut ? 0 : 1,
              transition: 'opacity 0.5s ease-in-out', // Smooth fading transition
            }}>{currentText}</span>
          </h1>
        </div>
      </div>
      
      <ComputersCanvas isMobile={isMobile} />
      
      <div className={isMobile ? 'absolute top-[600px] flex w-full justify-center' : 'absolute bottom-0 flex w-full justify-center'}>
        <a href='#about'>
          <div className='w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-end p-2'>
            {/* now we are using framer motion here */}
            <motion.div
              animate={{
                y: [0, -24, 0], //means will rotate it up and down
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
