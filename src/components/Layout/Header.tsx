import React, { useState } from 'react';
import Image from 'next/image';
import EnquiryForm from '../EnquiryForm';
import GetInTouchButton from '../GetInTouchButton';

interface props{
  setFormVisible:any;
  isFormVisible:boolean
}
const Header :React.FC <props>= ({setFormVisible,isFormVisible}) => {

  return (
    <div className='w-95  overflow-hidden'>
      <div className=' my-2'>
        <header className={' text-white   w-95 '}>
          <nav className={'bg-transparent h-[110px]  w-95 '}>
            <div className={'flex items-center'}>
              <div className={'w-1/2 ml-4 flex flex-row relative cursor-pointer group items-center'}>
                <a href='/'>
                <Image
                  src="/icons/SSA-logo.svg"
                  alt="logo image"
                  width={90}
                  height={90}
                  className="mt-4  transform scale-75 transition-transform duration-300 group-hover:scale-100"
                />
                <span className="absolute ml-[4.5rem] mb-3 bottom-0 left-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Sunny<br/> state<br/> Agency
                </span>
                </a>
              </div>
              <div className={'w-1/2 flex  items-center mr-7 justify-around'}>
                <a className='cursor-pointer'>WHO ARE WE</a>
                <a className='cursor-pointer'>CREATORS</a>
                <a className='cursor-pointer'>SERVICES</a>
                
                <GetInTouchButton title='GET IN TOUCH' onClick={setFormVisible(true)}/>
                {isFormVisible && <EnquiryForm />}
              </div>
            </div>
          </nav>
        </header>
      </div>
      
    </div>
  );
};

export default Header;
