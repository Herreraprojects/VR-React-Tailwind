import React from 'react'
import Typed from 'react-typed'
import { useSpring,animated } from '@react-spring/web'




const Hero = () => {
  const { background } = useSpring({
    from: { background: 'linear-gradient(45deg, #000000, #000000)' }, // Initial gradient
    to: async next => {
      // You can define a function to dynamically change the gradient
      while (true) {
        await next({ background: 'linear-gradient(45deg, #ff0000, #00ff00)' }); // Change the gradient
        await next({ background: 'linear-gradient(45deg, #00ff00, #0000ff)' }); // Change the gradient
        await next({ background: 'linear-gradient(45deg, #0000ff, #ff0000)' }); // Change the gradient
      }
    },
    config: { duration: 3000 }, // Adjust the duration as needed
  });

  

  return (
    <animated.nav style={{ background}}>

    <div className='text-white '>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            <p className='text-[#00df9a] font-bold p-2'>Powered by React/Tailwind.</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Venture Beyond Reality</h1>
            <div className='flex justify-center items-center '>
                <p className=' py-4'></p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-black'>
            Immerse yourself in extraordinary experiences with our cutting-edge 
            Virtual Reality technology.
            </p>
            <div className='flex justify-center items-center '>
                <p className=' py-4'></p>
            </div>
            <p>Redefine your <Typed className='py-4'
              strings={['Gaming', 'Fitness', 'Entertainment', 'Productivity', 'Networking']}
              typeSpeed={40}
              loop
            />
            </p>
        
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
    </animated.nav>

  )
}

export default Hero