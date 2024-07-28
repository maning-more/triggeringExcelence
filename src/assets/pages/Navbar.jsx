import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


export default function Navbar() {
   
    return (
        
        <div className='container  h-45 bg-customGray shadow-sm rounded-xl bg-slate-100 border border-black flex justify-between '>
            <div className='flex flex-row p-5'>
             <Link to="/">  <img src={logo} alt="logo" className='h-15 ml-3 w-auto h-10' /></Link>

            </div>
            <div className=' space-x-8 mt-5 mr-5'>
                <Link to="/about" className='font-bold'>About</Link>
                <Link to="/blog" className='font-bold'>Blog</Link>
                <Link to="/courses" className='font-bold'>Courses</Link>
                <Link to="/contact" className='font-bold'>Contact</Link>
            </div>
        </div>
    )
}
