import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const platformItems = [
  {
    id: 1,
    platLogo: '/icons/platforms/snapchat-white.svg',
    hoveredLogo: '/icons/platforms/snapchat-black.svg',
    title: 'Snap Discover Show',
    content: 'We are working closely with Snap and are pitching top talent that we think can do well on a Discover Show, and when we manage to get the show approved we facilitate the entire process of running such a show the best way possible, which includes, re-editing and optimization of your existing (YouTube) content the best way possible, a-b testing multiple thumbnails and analyzing data. There is no additional work involved on your end and you will remain a 100% owner of the channel we help establish.',
    hoverBgColor1: '#FFFD00',
    hoverBgColor2: '#FFFD00',
    hoverColor: '#000',
  },
  {
    id: 2,
    platLogo: '/icons/platforms/facebook-blue.svg',
    hoveredLogo: '/icons/platforms/facebook-white.svg',
    title: 'Official Facebook Media Partners',
    content: 'Understanding that each platform needs the unique approach to maximize results is something we take very seriously. We will unlock a new revenue stream for you by tailoring your content specifically to what works best on Facebook. Your short-form content has lots of value on Facebook Reels and other bonus features you probably haven’t heard of.',
    hoverBgColor1: '#3077FB',
    hoverBgColor2: '#3077FB',
    hoverColor: '#fff',
  },
  {
    id: 3,
    platLogo: '/icons/platforms/tiktok-white.svg',
    hoveredLogo: '/icons/platforms/tiktok-pink.svg',
    title: "TikTok Creators's  Fund",
    content: 'We all know that short-form content is here to stay but it’s also difficult to turn your hobby into a new revenue stream. We help you localize and monetize this short-form content by repurposing your content for YouTube Shorts, Snap, and Facebook Reels.',
    hoverBgColor1: '#87F1E9',
    hoverBgColor2: '#DA0E4F',
    hoverColor: '#fff',
  },
  {
    id: 4,
    platLogo: '/icons/platforms/youtube-red.svg',
    hoveredLogo: '/icons/platforms/youtube-black.svg',
    title: 'YouTube Editing',
    content: 'We can become your one-stop shop as we are experts in editing long-form content too and are able to turn your (raw) footage into an engaging video that will lock viewers in and secure a high average watch time to maximize results.',
    hoverBgColor1: '#EA3621',
    hoverBgColor2: '#EA3621',
    hoverColor: '#fff',
  },
  
];

const SocialMedia = () => {
  const[activeColor,setActiveColor]=useState('');
  const[,setCardId]=useState('');
  const[,setBgColor1]=useState('');
  const[,setBgColor2]=useState('');

  const handleMouseEnter = (id:any, bg1: React.SetStateAction<string>, bg2: React.SetStateAction<string>, text: React.SetStateAction<string>) => {
    setCardId(id);
    setBgColor1(bg1);
    setBgColor2(bg2);
    setActiveColor(text);
  };
  return (
    <>
    <div className='bg-[#1a1919] h-[850px] w-95'>
      <h1 className='text-white font-bold text-6xl px-6 py-9'>
        Platforms<br />We Monetize On
      </h1>
      <div className='m-6 h-[500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  flex-row justify-between' >
        {platformItems.map((item) => (
          <div
             key={item.id}
            className={`w-full bg-black border border-lg rounded-2xl border-[#888] transition-all duration-600 ease`} onMouseEnter={()=>{
               handleMouseEnter(
                item.id,
                item.hoverBgColor1,
                item.hoverBgColor2,
                item.hoverColor,
                // item.platLogo,
        )
            }}  
          >
            <div className='mx-9'>
              <Image
                src={item.platLogo}
                alt='logo image'
                width={80}
                height={80}
                className='w-28 h-12 my-5'
              />
              <div className='w-64 h-64 text-white leading-9'>
                <h1 className='text-[1.8rem] pb-4'>{item.title}</h1>
                <p className='text-[13.7px] leading-5'>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SocialMedia;
