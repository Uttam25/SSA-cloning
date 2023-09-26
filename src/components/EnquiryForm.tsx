'use Client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'


interface EnquiryFormProps{
    
}
const EnquiryForm : React.FC<EnquiryFormProps> =  () => {
  
  return (
    <>
    <div className={'bg-black h-screen flex flex-col items-center justify-end'}>
        <div className='mt-5 '>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32.718"
            height="32.719"
            viewBox="0 0 32.718 32.719"
          >
            <g
              id="Group_11128"
              data-name="Group 11128"
              transform="translate(16.359 -14.945) rotate(45)"
            >
              <line
                id="Line_1277"
                data-name="Line 1277"
                x2="44.271"
                transform="translate(0 22.135)"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              />
              <line
                id="Line_1278"
                data-name="Line 1278"
                x2="44.271"
                transform="translate(22.135 0) rotate(90)"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              />
            </g>
        </svg>
        </div>
      
        <div className='bg-white flex m-6 w-1/3 flex-col justify-between'>
            <div className='flex flex-col items-center '>
            <Image
               src={'https://sunnystateagency.com/icons/SSA-logo.svg'}
                alt='logo'
                width={70}
                height={70}
                className='my-4'
            />
            <span className='text-purple-700 text-xl font-light text-center mx-6'>We are glad to see you here. Fill out this form and we will be in contact soon.</span>
            </div>
            <div className='flex m-6 bg-white-100 flex-col'>
                <div>
                    <input type="text" placeholder='Full Name' className='p-4 border-slate-100 my-3 w-full' required />
                    <input type="text" placeholder='Company Email' className='p-4 border-slate-100 my-3 w-full' required />
                    <textarea
                        placeholder='How can we help you?'
                        className='p-4 w-full border-slate-100 my-3'
                        required
                    ></textarea>
                    <button className='bg-purple-700 mt-[30px] mr-[6rem] transition-all duration-500 ease-out pt-[10px] pb-[10px] pr-[14px] pl-[14px] text-[18px] w-full h-[50px] border border-solid border-1 border-#843cf3 outline-none cursor-pointer font-custom5 uppercase tracking-[0.8px]  relative hover:bg-[#f3f3f7] hover:text-[#000] text-white p-4 m-4' > <Link href="/">Submit</Link>  </button>
                </div>
            </div>
        </div>

        
      </div>
    </>
  )
}

export default EnquiryForm
