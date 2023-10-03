import React from 'react';
import FastMarquee from 'react-fast-marquee';

const Marquee: React.FC = () => {
  return (

    <>
    <div className='h-[30rem]  w-95 bg-black'>
    <hr className='w-full  border-t-2 border-white' />
    <div className='flex   bg-[#000] items-center '>
    
        <FastMarquee>
            <div className=' h-[6rem] text-white flex justify-between items-center'>
                <span className='mr-7 font-bold text-7xl'>SUNNY STATE.</span>
                <span className='mr-7 font-bold text-7xl'>SUNNY STATE.</span>
                <span className='mr-7 font-bold text-7xl'>SUNNY STATE.</span>
            </div>
        </FastMarquee>
    </div>
    <hr className='w-full border-t-2  border-white' />
    <div className='flex  mx-7  flex-row justify-between'>
        <div className=' border-t-2 border-solid border-[#843cf3] pt-[35px] max-sm:w-[43%] max-sm:pb-[12%]'>
            <span className='text-5xl font-bold text-purple-700 ' >1 Billion+</span>
            <p className='text-[20px] text-white pt-2'>Monthly <br/>Story Views</p>
        </div>
        <div className=' border-t-2 border-solid border-[#843cf3] pt-[35px] max-sm:w-[43%] max-sm:pb-[12%]'>
            <span className='text-5xl font-bold text-purple-700 '>50 Million+</span>
            <p className='text-[20px] text-white pt-2'>Unique <br/>Audience</p>
        </div>
        <div className=' border-t-2 border-solid border-[#843cf3] pt-[35px] max-sm:w-[43%] max-sm:pb-[12%]'>
            <span className='text-5xl font-bold text-purple-700 '>50 +</span>
            <p className='text-[20px] text-white pt-2'>Creators <br/>We Represent</p>
        </div>
        <div className=' border-t-2 border-solid border-[#843cf3] pt-[35px] max-sm:w-[43%] max-sm:pb-[12%]'>
            <span className='text-5xl font-bold text-purple-700 '>2 Billion+</span>
            <p className='text-[20px] text-white pt-2'>Monthly<br/>Video Views</p>
        </div>
        <div className=' border-t-2 border-solid border-[#843cf3] pt-[35px] max-sm:w-[43%] max-sm:pb-[12%]'>
            <span className='text-5xl text-purple-700 font-bold '>30+</span>
            <p className='text-[20px] text-white pt-2'>Countries<br/>Reached</p>
        </div>
        

    </div>
    </div>
    </>
  );
}

export default Marquee;
