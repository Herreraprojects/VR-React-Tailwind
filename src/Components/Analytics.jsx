import React from 'react'
import Child from '../Assets/child-vr.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Child} alt=''/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>A World Awaits</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>New Features with VR</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cum, totam at ut officia provident ea 
                    dolorum neque eum accusamus modi voluptates dolores possimus placeat laborum doloremque! Deserunt, ea
                     tempore.
                </p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0  py-3 text-[#00df9a]'>Get Started</button>

            </div>
          
        </div>

    </div>
  )
}

export default Analytics