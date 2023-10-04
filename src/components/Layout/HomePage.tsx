'use Client'
import React, { useState } from 'react'
import EnquiryForm from '../EnquiryForm'
import Layout from './Layout'

const  HomePage = () => {

    
    const [isSectionFormVisible,setSectionFormVisible] = useState(false)
    
 

  return (
    <>
    <div className='h-full w-95'>
        <Layout  setSectionFormVisible={setSectionFormVisible} isSectionFormVisible={isSectionFormVisible} setFormVisible={undefined} isFormVisible={false} />
    </div>
    </>
  )
}
 // isFormVisible && (<EnquiryForm />)

export default HomePage
