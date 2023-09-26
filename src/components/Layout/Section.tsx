import React, { useState } from 'react'

import GetInTouchButton from '../GetInTouchButton'
import EnquiryForm from '../EnquiryForm'

interface props{
    setFormVisible:any
  }
  const Section :React.FC <props>= ({setFormVisible}) => {
    
  
    const handleOpenForm = () => {
      setFormVisible(true);
    };

    return (
        <div className='h-screen w-full  text-[#fff] bg-black-500 '>
            <div className='m-6'>
                <h1 className='font-bold text-6xl'>We Optimize & Monetize<br/>Your Existing Content Using<br/>Data-Driven Technology</h1>
                <p className='py-6 w-2/3'>We are experts in optimizing, localizing, and monetizing your existing content and unlocking your full potential with no additional work involved on your end.</p>
                <GetInTouchButton title='GET IN TOUCH'  onClick={handleOpenForm} />
                
            </div>
        </div>
    )
}

export default Section
