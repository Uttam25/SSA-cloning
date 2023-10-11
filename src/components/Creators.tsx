import Image from 'next/image'
import React from 'react'

const Creators = () => {
  return (
    <>
    <div className='w-95 text-white text-center'>
        <p className='text-5xl'>CREATORS</p>
        <p className='text-2xl'>WE WORK WITH</p>
    </div>
    <div className="relative m-9 w-64 h-89 overflow-hidden bg-gray-300 transition-transform transform hover:scale-105 cursor-pointer">
    {/* <img src="your-image-url.jpg" alt="Product Image" class="w-full h-full object-cover object-center"> */}
        <Image
            src="/images/creators/1_steve_o.jpg"
            alt="logo1 image"
            width={90}
            height={90}
            className='h-full w-full object-cover object-center'
            
        />
        <div className="bg-black w-64 h-64  hover:h-60px">
            <p className="text-xl text-red-500   font-semibold  absolute ml-[4.5rem] mb-3 bottom-0 left-0  opacity-0 group-hover:opacity-100 hover:bg-transparent hover:translate-y-24 transition-opacity duration-300">Product Name</p>
            <p className="text-sm text-red-500">Product Details</p>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10.058"
            height="8.924"
            viewBox="0 0 10.058 8.924"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_324"
                  data-name="Rectangle 324"
                  width="10.058"
                  height="8.924"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1"
                />
              </clipPath>
            </defs>
            <g id="Group_523" data-name="Group 523" clipPath="url(#clip-path)">
              <path
                id="Path_62"
                data-name="Path 62"
                d="M5.6,8.433,9.566,4.466,5.6.5M9.566,4.466H.5"
                transform="translate(-0.004 -0.004)"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </g>
          </svg>
  </div>
  </>
  )
}


export default Creators




// <div className={'w-1/2 ml-4 flex flex-row relative cursor-pointer group items-center'}>
// <a href='/'>
// <Image
//   src="/icons/SSA-logo.svg"
//   alt="logo image"
//   width={90}
//   height={90}
//   className="mt-4 transform translate-x-95 opacity-1 scale-75  transition-transform duration-300 group-hover:scale-100"
// />
// <span className="absolute ml-[4.5rem] mb-3 bottom-0 left-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//   Sunny<br/> state<br/> Agency
// </span>
// </a>
// </div>



// import React from 'react';
// import Image from 'next/image';

// const Creators = () => {
//   return (
//     <>
//       <div className='text-white text-center'>
//         <p className='text-5xl'>CREATORS</p>
//         <p className='text-2xl'>WE WORK WITH</p>
//       </div>
//       <div className="relative m-9 w-64 h-89 overflow-hidden  bg-gray-300  transition-transform transform hover:scale-105 cursor-pointer">
//     {/* <img src="your-image-url.jpg" alt="Product Image" className="w-full h-full object-cover object-center"> */}
//         <Image
//             src="/images/creators/1_steve_o.jpg"
//             alt="logo1 image"
//             width={90}
//             height={90}
//             className='h-full w-full object-cover object-center'
//         />
//         <div className='bg-transparent'>
//           <h1 className='text-red-500'>Product Name</h1>
//           <h3 className='text-red-500'>Product Details</h3>
//         </div>
//         </div>
      
      
//     </>
//   );
// }

// export default Creators;


// import React from 'react';
// import Image from 'next/image';

// const BackgroundImageWithText = () => {
//   return (
//     <div
//       className="relative w-64 h-64 overflow-hidden bg-gray-300"
//       style={{
//         backgroundImage: `url("/images/creators/1_steve_o.jpg")`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <Image
//         src="/images/creators/1_steve_o.jpg"
//         alt="Product Image"
//         layout="fill"
//         objectFit="cover"
       
        
//       />
//       <div className="">
//         <div className=' bg-black'>
//         <span className='text-red-500' >Product</span><br/>
//         <span className='text-red-500'  >Product Details</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BackgroundImageWithText;


{/* <div className={'flex justify-between items-center relative cursor-pointer group'}>
  <a href='/'>
    <Image
      src="/icons/SSA-logo.svg"
      alt="logo image"
      width={90}
      height={90}
      className="mt-4 transform translate-x-95 opacity-1 scale-75  transition-transform duration-300 group-hover:scale-100"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-0 group-hover:bg-opacity-70 hover:bg-gray-400 transition-all duration-300">
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Sunny<br />state<br />Agency
      </span>
    </div>
  </a>
</div> */}







// import Image from 'next/image';

// const CarouselItem = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       className={`relative w-64 h-80 ${
//         isHovered ? 'transform scale-105' : 'hover:scale-105'
//       } transition-transform duration-300 ease-in-out cursor-pointer`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div
//         className="w-full h-64 bg-cover bg-center">
//         <Image
//             src="/images/creators/1_steve_o.jpg"
//             alt="logo1 image"
//             width={90}
//             height={90}
//             className='h-full w-full object-cover object-center'
            
//         />
//       </div>
//       <div
//         className={`absolute bottom-0 left-0 right-0 bg-gray-300 bg-opacity-90 text-white p-2 transform ${
//           isHovered ? 'translate-y-90' : 'translate-y-full'
//         } transition-transform duration-300 ease-in-out`}
//       >
//         <h2 className="text-xl">eafe</h2>
//         <p className="text-sm">ejdh</p>
//       </div>
//     </div>
//   );
// };

// export default CarouselItem;


