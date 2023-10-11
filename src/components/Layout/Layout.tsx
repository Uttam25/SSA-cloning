import React from 'react'
import  Header from './Header'

import Head from 'next/head'
import Section from './Section'
import Marquee from '../Marquee'
import Creators from '../Creators'
import SocialMedia from '../SocialMedia'
import SnapShow from '../SnapShow'

  interface LayoutProps {
    setFormVisible: any;
    isFormVisible:boolean
    setSectionFormVisible:any 
    isSectionFormVisible:boolean
    // videoSrc:string
    
  }
  
  
const Layout :React.FC <LayoutProps>= ({setFormVisible,isFormVisible,setSectionFormVisible,isSectionFormVisible}) => {
  return (
    <>
    <Head>
        <title>Sunny State Agency – Data-Driven Technology</title>
        <meta
          name="description"
          content="Sunny State Agency is a global data-driven monetization company that specializes in revamping your existing content and optimizing that to each specific ..."
        />
    </Head>
    <video
        src="/video/introVid.mp4"
        autoPlay
        loop
        muted
        width='w-95'
        height='h-full'
        />
    <div className=' absolute top-0 left-0 w-95 h-screen flex flex-col justify-between '>
    
        <Header setFormVisible={true} isFormVisible={false} />
        <Section setSectionFormVisible={setSectionFormVisible} isSectionFormVisible={isSectionFormVisible} setFormVisible={true} isFormVisible={false} />
        </div> 
    <div className='mt-[5rem] w-95 bg-black'>
      <Marquee />
      <Creators/>
      <SocialMedia/>
      <SnapShow  />
    </div>
    
    </>
  )
}

export default Layout
