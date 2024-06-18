import React from 'react'
import logo from '../utils/logo.png'
import github from'../utils/github.png'
const footer = () => {
  return (
    <div className="bg-slate-200 cursor-pointer">
         <h1 className='text-2xl font-medium ml-28'>Zwiggy</h1>
       <div className='mx-44 flex justify-between'>
        <div className=' w-36 ml-3'>
            <h2 className='mt-2 font-bold'>ABOUT ZWIGGY</h2>
          <ul className='font-thin'>
            <li>Who Are We</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Feeding India</li>
          </ul>
        </div>
        <div className='w-40 ml-3'>
            <h2 className='mt-2 font-bold'>FOR RESTAURANTS</h2>
          <ul className='font-thin'>
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>  
        <div className='w-40 ml-3'>
            <h2 className='mt-2 font-bold'>Learn More</h2>
          <ul className='font-thin'>
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
          </ul>
        </div>  
        <div className='w-40 ml-3'>
            <h2 className='mt-2 font-bold'>Social Links</h2>
            <a href='https://www.linkedin.com/in/jitesh-jadhav-74522022b/'> 
            <img className='h-4 inline-block ml-4' src={logo} alt="LinkedIn"></img>
            </a>
            <a href='https://github.com/Jitesh4565'>
            <img className='h-4 inline-block ml-4' src={github} alt='Github'></img>
            </a>
        </div>  
       </div> 
    </div>
  )
}

export default footer