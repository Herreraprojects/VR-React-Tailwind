import React from 'react'
import Women from '../Assets/women-vr.jpg'
import Guys from '../Assets/2-guys-vr.jpg'
import WheelChair from '../Assets/wheelchair-vr.jpg'

const Cards = () => {
    return (
    <div className='w-full py-[10rem] px-4 bg-white' >
        <div className='max-w[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Women}/>
                <h2 className='text-2xl font-bold text-center py-8'>
                    Package 1
                </h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>Wired</p>
                    <p className='py-2 border-b mx-8'>Version 2.0</p>
                </div>
                <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Buy</button>
            </div>
            {/*  */}
            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Women}/>
                <h2 className='text-2xl font-bold text-center py-8'>
                   Package 2
                </h2>
                <p className='text-center text-4xl font-bold'>$250</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1000 GB Storage</p>
                    <p className='py-2 border-b mx-8'>Wireless</p>
                    <p className='py-2 border-b mx-8'>Version 2.0</p>
                </div>
                <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Buy</button>
            </div>
            {/*  */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Women}/>
                <h2 className='text-2xl font-bold text-center py-8'>
                    Package 3
                </h2>
                <p className='text-center text-4xl font-bold'>$499</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2000 GB</p>
                    <p className='py-2 border-b mx-8'>Wireless</p>
                    <p className='py-2 border-b mx-8'>Version 3.0</p>
                </div>
                <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Buy</button>
            </div>
        </div>

    </div>
  )
}

export default Cards