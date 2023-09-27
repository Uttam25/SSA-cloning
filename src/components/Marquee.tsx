import React from 'react';
import FastMarquee from 'react-fast-marquee';

const Marquee: React.FC = () => {
  return (

    <>
    <div className='h-screen  w-95 bg-black'>
    <hr className='w-95 border-t-6 border-white' />
    <div className='flex  py-6 bg-[#000] items-center '>
        <FastMarquee>
            <div className=' h-[6rem] text-white flex justify-between items-center'>
                <span className='mr-7 font-bold text-7xl'>SUNNY STATE.</span>
                <span className='mr-7 font-bold text-7xl'>SUNNY STATE.</span>
                <span className='mr-7 font-bold text-7xl'>SUNNY STATE.</span>
            </div>
        </FastMarquee>
    </div>
    <hr className='w-full border-t-6 border-white' />
    <div className='flex mx-6 flex-row'>
        <div className='text-white border-y-[#843cf3] border-2'>
            <span >1 Billion+</span>
            <p>Monthly <br/>Story Views</p>
        </div>
        <div className='text-white border-y-[#843cf3] border-2'>
            <span >50 Million+</span>
            <p>Unique <br/>Audience</p>
        </div>
        <div className='text-white border-y-[#843cf3] border-2'>
            <span >50 +</span>
            <p>Creators <br/>We Represent</p>
        </div>
        <div className='text-white border-y-[#843cf3] border-2'>
            <span >2 Billion+</span>
            <p>Monthly<br/>Video Views</p>
        </div>
        <div className='text-white border-y-[#843cf3] border-2'>
            <span >30 +</span>
            <p>Countries<br/>Reached</p>
        </div>

    </div>
    </div>
    </>
  );
}

export default Marquee;
