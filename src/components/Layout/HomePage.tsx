'use Client'
import React, { useState } from 'react'
import EnquiryForm from '../EnquiryForm'
import Layout from './Layout'

const  HomePage = () => {

    const [isFormVisible,setFormVisible] = useState(false)
    
  return (
    <>
    
      <div className='h-screen w-95'>

        <Layout setFormVisible={setFormVisible} isFormVisible={isFormVisible}/>
        {
          isFormVisible && (<EnquiryForm ontoggle={setFormVisible(false)}/>)
        }
       
      </div>
    
    
    </>
  )
}

export default HomePage
