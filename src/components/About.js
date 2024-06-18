import React from 'react'
import sample from '../utils/Demo.mp4';
const About = () => {
  return (
    <div className='block mt-20 text-center'>
        <h3 className=''>There might be CORS issue and you may not see any images or the API might 
            not give any results but here is an attached video for the refrence
        </h3>
        <div className='flex justify-center mt-10'>
        <video className='' width="600" controls>
          <source src={sample} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
    </div>
  )
}

export default About