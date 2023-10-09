import React from 'react'
import Image from 'next/image'
const SocialMedia = () => {
  return (
      <>
      <div className=' bg-[#1a1919] h-full w-95'>
        <div className='m-6  w-1/4 h-[480px] bg-black border border-lg rounded-2xl border-[#888] hover:bg-[#fffd00]' >
            <div className='mx-9'>
              <Image
                src="/icons/platforms/snapchat-white.svg"
                alt="logo image"
                width={80}
                height={80}
                className="w-28 h-12 my-5"
              />
              <div className='w-64 h-64 text-white "transition-all duration-600 ease hover:text-black  leading-9'>
                <h1 className='text-[1.8rem] pb-4 '>Snap Discover Show</h1>
                <p className='text-[13.7px] leading-5  '>We are working closely with Snap and are pitching top talent that we think can do well on a Discover Show, and when we manage to get the show approved we facilitate the entire process of running such a show the best way possible, which includes, re-editing and optimization of your existing (YouTube) content the best way possible, a-b testing multiple thumbnails and analyzing data. There is no additional work involved on your end and you will remain a 100% owner of the channel we help establish.</p>
              </div>
            </div>
        </div>

      </div>
      </>
    
  )
}

export default SocialMedia
