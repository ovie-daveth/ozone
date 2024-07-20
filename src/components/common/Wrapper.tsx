"use client"

import React, { useState } from 'react'
import SideBar from './SideBar';
import SearchHeader from './SearchHeader';

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
        <div className={`${open ? "ml-[253px]" : "ml-[93px]"} transition-all ease-in-out duration-300 min-h-screen py-5`}>
            <div>
                <SearchHeader />
            </div>
            <div>{children}</div>
        </div>
     </div>
    </div>
  )
}

export default Wrapper
