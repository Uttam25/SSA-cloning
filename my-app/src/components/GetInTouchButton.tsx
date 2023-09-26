import React, { useState } from 'react';
import Link from 'next/link';
interface ButtonProps {
  title: string;
  className?: string;
  onClick ?: () => void;
  
}

const Button: React.FC<ButtonProps> = ({ title, className ,onClick}) => {
  
  return (
    <button className={'flex  items-center rounded-3xl p-4  text-sm bg-white text-black hover:bg-slate-700 hover:text-white'} >
      
      <span>
        {title}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10.058"
        height="8.924"
        viewBox="0 0 10.058 8.924"
        className="ml-2" // Add margin-left to separate the text and icon
      >
        <path
          id="Path_62"
          data-name="Path 62"
          d="M5.6,8.433,9.566,4.466,5.6.5M9.566,4.466H.5"
          transform="translate(-0.004 -0.004)"
          fill="none"
          stroke="#262626"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </svg>
    </button>
  );
};

export default Button;

