import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Analytics from './Components/Analytics';
import Newsletter from './Components/Newsletter';
import Cards from './Components/Cards';
import Footer from './Components/Footer'
import { useSpring, animated } from '@react-spring/web';


function App() {

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
  });

  
  return (
    <animated.div style={props}>

    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
    </animated.div>

    
  );
}

export default App;
