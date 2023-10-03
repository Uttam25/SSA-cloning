'use Client'
import React, { useState } from 'react'
import EnquiryForm from '../EnquiryForm'
import Layout from './Layout'

const  HomePage = () => {

    const [isFormVisible,setFormVisible] = useState(false)
    const [isSectionFormVisible,setSectionFormVisible] = useState(false)
    
 

  return (
    <>
    <div className='h-full w-95'>
        <Layout setFormVisible={setFormVisible} isFormVisible={isFormVisible} setSectionFormVisible={setSectionFormVisible} isSectionFormVisible={isSectionFormVisible} />
    </div>
    </>
  )
}
 // isFormVisible && (<EnquiryForm />)

export default HomePage
