import { BrowserRouter, ReactDOM } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas, Hero} from "./components";
import React from 'react';
import { useEffect, useState } from "react";
const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  //all this useEffect is changing the isMobile state
  //and we can use this to change the things as per mobile view
  useEffect(() => {
    //Add an event listener for changes in the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');//so this will basically set the isMobile to true if the 
    //width is less than 500px or we are on mobile device

    //Set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches); 

    // Define callback function as listener to handle changes in mediaQuery
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    //we also have to close the mediaQuery event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[])
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar isMobile={isMobile}/>
          <Hero isMobile={isMobile}/>
        </div>
        <About isMobile={isMobile}/>
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
