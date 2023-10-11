

// import React, { useState, useRef } from 'react';
// import Image from 'next/image';

// const SnapShow = () => {
//   const videoRef = useRef(null);

//   const handleVideoHover = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   const handleVideoUnhover = () => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0; // Reset the video to the beginning
//     }
//   };

//   return (
//     <>
//       <div className='w-95 h-[1000px] bg-white'>
//         <div className='p-6 flex flex-col items-center justify-center'>
//           <Image
//             src='/icons/snapchat-icon.svg'
//             alt='snapshot'
//             width={90}
//             height={90}
//             className='mt-6 bg-[#FFFD00] border rounded-2xl'
//           />
//           <h1 className='text-black p-6 font-bold text-5xl'>Snap Discover Show</h1>
//           <span className='text-slate-900 text-center'>
//             We have been working closely with Snap on their Discover program...
//           </span>
//         </div>
//         <div className='m-6 w-95 flex gap-8'>
//           <video
//             ref={videoRef}
//             src="/video/snapDiscover/matty.mp4"
//             poster="/images/Matty.jpg"
//             loop
//             muted
//             onMouseEnter={handleVideoHover}
//             onMouseLeave={handleVideoUnhover}
//             className={`h-[360px] mt-[9rem] w- border-8 rounded-2xl border-black`}
//           />
//           <video
//             ref={videoRef}
//             src="/video/snapDiscover/nigel.mp4"
//             poster="/images/nigel.jpg"
//             loop
//             muted
//             onMouseEnter={handleVideoHover}
//             onMouseLeave={handleVideoUnhover}
//             className='h-[360px] mt-[6rem] w- border-8 rounded-2xl border-black'
//           />
//           <video
//             ref={videoRef}
//             src="/video/snapDiscover/steve_o.mp4"
//             poster="/images/steve-o.jpg"
//             loop
//             muted
//             onMouseEnter={handleVideoHover}
//             onMouseLeave={handleVideoUnhover}
//             className='h-[480px] mt-[3rem] w- border-8 rounded-2xl border-black'
//           />
//           <video
//             ref={videoRef}
//             src="/video/snapDiscover/nikki.mp4"
//             poster="/images/nikki.jpg"
//             loop
//             muted
//             onMouseEnter={handleVideoHover}
//             onMouseLeave={handleVideoUnhover}
//             className='h-[360px] mt-[6rem] w- border-8 rounded-2xl border-black'
//           />
//           <video
//             ref={videoRef}
//             src="/video/snapDiscover/Andrew_Callaghan.mp4"
//             poster="/images/andrew.jpg"
//             loop
//             muted
//             onMouseEnter={handleVideoHover}
//             onMouseLeave={handleVideoUnhover}
//             className='h-[360px] mt-[9rem] w- border-8 rounded-2xl border-black'
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SnapShow;

// import React, { useState, useRef } from 'react';
// import Image from 'next/image';
// import GetInTouchButton from './GetInTouchButton';
// import EnquiryForm from './EnquiryForm';

// const videoData = [
//   {
//     id: 1,
//     src: "/video/snapDiscover/matty.mp4",
//     poster: "/images/Matty.jpg",
//     height: "360px",
//     marginTop: "9rem",
//   },
//   {
//     id: 2,
//     src: "/video/snapDiscover/nigel.mp4",
//     poster: "/images/nigel.jpg",
//     height: "360px",
//     marginTop: "6rem",
//   },
//   {
//     id: 3,
//     src: "/video/snapDiscover/steve_o.mp4",
//     poster: "/images/steve-o.jpg",
//     height: "480px",
//     marginTop: "3rem",
//   },
//   {
//     id: 4,
//     src: "/video/snapDiscover/nikki.mp4",
//     poster: "/images/nikki.jpg",
//     height: "360px",
//     marginTop: "6rem",
//   },
//   {
//     id: 5,
//     src: "/video/snapDiscover/Andrew_Callaghan.mp4",
//     poster: "/images/andrew.jpg",
//     height: "360px",
//     marginTop: "9rem",
//   },
// ];

// const SnapShow = (setFormVisible:any,isFormVisible:boolean) => {
//   const videoRefs = useRef([]);
//   const [hoveredVideo, setHoveredVideo] = useState(null);

//   const handleVideoHover = (id:any) => {
//     const videoRef = videoRefs.current[id - 1];
//     setHoveredVideo(videoRef);

//     if (videoRef) {
//       videoRef.src = videoData.find((video) => video.id === id).src;
//       videoRef.load();
//       videoRef.play();
//     }
//   };

//   const handleVideoUnhover = () => {
//     if (hoveredVideo) {
//       hoveredVideo.pause();
//       hoveredVideo.currentTime = 0;
//     }
//   };

//   const handleClick=()=>{
//     setFormVisible(true)
//  }
//  const closeForm = () => {
//     setFormVisible(false);
//   };

   

//   return (
//     <>
//       <div className='w-95 h-[1000px] bg-white'>
//         <div className='p-6 flex flex-col items-center justify-center'>
//           <Image
//             src='/icons/snapchat-icon.svg'
//             alt='snapshot'
//             width={90}
//             height={90}
//             className='mt-6 bg-[#FFFD00] border rounded-2xl'
//           />
//           <h1 className='text-black p-6 font-bold text-5xl'>Snap Discover Show</h1>
//           <span className='text-slate-900 text-center'>
//             We have been working closely with Snap on their Discover program...
//           </span>
        
//         <div className='m-6 w-95 flex gap-8'>
//           {videoData.map((video) => (
//             <video
//               key={video.id}
//               ref={(ref) => (videoRefs.current[video.id - 1] = ref)}
//               poster={video.poster}
//               loop
//               muted
//               onMouseEnter={() => handleVideoHover(video.id)}
//               onMouseLeave={handleVideoUnhover}
//               className={`h-[${video.height}] mt-[${video.marginTop}] w- border-8 rounded-2xl border-black`}
//             />
//           ))}
//         </div>
//         <GetInTouchButton title='Get In Touch' className='bg-black text-white'
//         handleClick={handleClick}/>
                
//         {isFormVisible && <EnquiryForm onclose={closeForm}/>}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SnapShow;



import React, { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';

interface VideoData {
  id: number;
  src: string;
  poster: string;
  height: string;
  marginTop: string;
}

const videoData: VideoData[] = [
  {
    id: 1,
    src: "/video/snapDiscover/matty.mp4",
    poster: "/images/Matty.jpg",
    height: "360px",
    marginTop: "9rem",
  },
  {
    id: 2,
    src: "/video/snapDiscover/nigel.mp4",
    poster: "/images/nigel.jpg",
    height: "360px",
    marginTop: "6rem",
  },
  {
    id: 3,
    src: "/video/snapDiscover/steve_o.mp4",
    poster: "/images/steve-o.jpg",
    height: "480px",
    marginTop: "3rem",
  },
  {
    id: 4,
    src: "/video/snapDiscover/nikki.mp4",
    poster: "/images/nikki.jpg",
    height: "360px",
    marginTop: "6rem",
  },
  {
    id: 5,
    src: "/video/snapDiscover/Andrew_Callaghan.mp4",
    poster: "/images/andrew.jpg",
    height: "360px",
    marginTop: "9rem",
  },
];

const SnapShow = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [hoveredVideo, setHoveredVideo] = useState<HTMLVideoElement | null>(null);

  const handleVideoHover = (id: number) => {
    const videoRef = videoRefs.current[id - 1];
    setHoveredVideo(videoRef);

    if (videoRef) {
      videoRef.src = videoData.find((video) => video.id === id)?.src || '';
      videoRef.load();
      videoRef.play().catch((error) => console.error('Video play error:', error));
    }
  };

  const handleVideoUnhover = () => {
    if (hoveredVideo) {
      hoveredVideo.pause();
      hoveredVideo.currentTime = 0;
    }
  };

  return (
    <>
      <div className='w-95 h-[1000px] bg-white'>
        <div className='p-6 flex flex-col items-center justify-center'>
          <Image
            src='/icons/snapchat-icon.svg'
            alt='snapshot'
            width={90}
            height={90}
            className='mt-6 bg-[#FFFD00] border rounded-2xl'
          />
          <h1 className='text-black p-6 font-bold text-5xl'>Snap Discover Show</h1>
          <span className='text-slate-900 text-center'>
            We have been working closely with Snap on their Discover program...
          </span>
        </div>
        <div className='m-6 w-95 flex gap-8'>
          {videoData.map((video) => (
            <video
              key={video.id}
              ref={(ref) => (videoRefs.current[video.id - 1] = ref)}
              poster={video.poster}
              loop
              muted
              onMouseEnter={(e: MouseEvent) => handleVideoHover(video.id)}
              onMouseLeave={handleVideoUnhover}
              className={`h-[${video.height}] mt-[${video.marginTop}] w- border-8 rounded-2xl border-black`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SnapShow;


