import React from 'react'
import  Header from './Header'
import HomePage from './HomePage'
import EnquiryForm from '../EnquiryForm'
import Head from 'next/head'
import Section from './Section'
import Marquee from '../Marquee'

  interface LayoutProps {
    setFormVisible: any;
    isFormVisible:boolean
    setSectionFormVisible:any 
    isSectionFormVisible:boolean
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
    <div className=' w-95 h-screen  bg-black'>
    <div className='mx-6'>
        <Header setFormVisible={setFormVisible} isFormVisible={isFormVisible} />
        <Section setSectionFormVisible={setSectionFormVisible} isSectionFormVisible={isSectionFormVisible} setFormVisible={true} isFormVisible={false}/>
    </div>
    <div className=' w-95 bg-black'>
    <Marquee />
    </div>
    </div>
    </>
  )
}

export default Layout
