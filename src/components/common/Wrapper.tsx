"use client"

import React, { useState } from 'react'
import SideBar from './SideBar';
import SearchHeader from './SearchHeader';
import MobileSideBar from './MobileSideBar';

type Prop = {
    children: React.ReactNode;
}
const Wrapper = ({
    children
}: Prop) => {

    const [open, setIsOpen] = useState(false)
    
  return (
    <div className=''>
     <div>
        <div className='fixed '>
            <SideBar open={open} setIsOpen={setIsOpen} />
        </div>
        <div className={`${open ? "sm:ml-[280px]  sm:w-[calc(100%-300px)]" : "sm:ml-[120px]  sm:w-[calc(100%-150px)]"} transition-all ease-in-out duration-300 min-h-screen sm:py-5`}>
            <div>
                <SearchHeader />
            </div>
            <div>{children}</div>
        </div>
        <MobileSideBar />
     </div>
    </div>
  )
}

export default Wrapper
