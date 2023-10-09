import React from 'react'
import  Header from './Header'
import HomePage from './HomePage'
import EnquiryForm from '../EnquiryForm'
import Head from 'next/head'
import Section from './Section'
import Marquee from '../Marquee'
import Creators from '../Creators'
import SocialMedia from '../SocialMedia'

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
        width='w-full'
        height='h-full'
        />
    <div className=' absolute top-0 left-0 w-full h-screen flex flex-col justify-between '>
    
        <Header setFormVisible={setFormVisible} isFormVisible={isFormVisible} />
        <Section setSectionFormVisible={setSectionFormVisible} isSectionFormVisible={isSectionFormVisible} setFormVisible={true} isFormVisible={false} />
      
    <div className='mt-[5rem] w-95 bg-black'>
    <Marquee />
    <Creators/>
    <SocialMedia/>
    </div>
    </div>
    </>
  )
}

export default Layout
