import React, { useState } from 'react';
import Image from 'next/image';
import EnquiryForm from '../EnquiryForm';
import GetInTouchButton from '../GetInTouchButton';

interface props{
  setFormVisible:any
  isFormVisible:boolean
}
const Header :React.FC <props>= () => {
  const[isFormVisible,setFormVisible]=useState(false)

  const handleClick=()=>{
    setFormVisible(true)
    
  }
  const closeForm=()=>{
    setFormVisible(false)
    
  }

  
  console.log('handleClick===> setFormVisible',isFormVisible)
  return (
    <div className='relative w-screen overflow-hidden'>
      <div className=' m-6'>
        <header className={'fixed w-screen  top-0 left-0 right-0 text-white z-[160] '}>
          <nav className={'fixed w-screen h-[110px] z-[160] '}>
            <div className={'flex  justify-between items-center'}>
              <div className={'w-1/2 ml-4 flex flex-row relative cursor-pointer group items-center'}>
                <a href='/'>
                <Image
                  src="/icons/SSA-logo.svg"
                  alt="logo image"
                  width={90}
                  height={90}
                  className="mt-4 transform translate-x-95 opacity-1 scale-75  transition-transform duration-300 group-hover:scale-100"
                />
                <span className="absolute ml-[4.5rem] mb-3 bottom-0 left-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Sunny<br/> state<br/> Agency
                </span>
                </a>
              </div>
              <div className={'w-1/2 flex  items-center mr-7  justify-around'}>
                <a className='cursor-pointer  hover:text-shadow-w[#fff] transition-all duration-400 ease-out '>WHO ARE WE</a>
                <a className='cursor-pointer  transition-all duration-400 ease-out'>CREATORS</a>
                <a className='cursor-pointer  transition-all duration-400 ease-out'>SERVICES</a>
                <div className=' overflow-hidden'>
                  <GetInTouchButton title='GET IN TOUCH' handleClick={handleClick}  />
                </div>
                {/* {isFormVisible && <EnquiryForm />} */}
                {isFormVisible && <EnquiryForm onclose={closeForm} />}
                
              </div>
            </div>
          </nav>
        </header>
      </div>
      
    </div>
  );
};

export default Header;
