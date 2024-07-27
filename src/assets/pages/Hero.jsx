import React from 'react'
import faviconlogo from '../faviconlogo.svg';

export default function Hero() {
    return (
        <div>
            <div className='flex flex-row  ml-10 mt-10'>
                <div className='inline-flex w-auto  h-auto  border border-black  rounded-2xl items-center'>
                    <h1 className='font-bold m-4  w-auto  h-auto'>Training Human special</h1>
                    <img src={faviconlogo} alt="logo" className='h-8 mr-5' />
                </div>

            </div>
            <div className='flex flex-col m-10 '>
                <h1 className='text-5xl '>Start your </h1>
                <h1 className='font-bold text-6xl'>Side Hustle</h1>
                <h1 className='font-bold text-6xl mb-4'>Today</h1>
                <h3 className='font-bold text-xs'>Turn your passion and knowledge into a thriving business.</h3>
                <h3 className='font-bold text-xs'>Help your audience get  ahead in life</h3>
            </div>

            <div>
                <input type="text" className='border shadow border-black rounded-lg ml-5'/>
                <input type="text" className='border shadow border-black rounded-lg ml-5'/>
            </div>
        </div>
    )
}
