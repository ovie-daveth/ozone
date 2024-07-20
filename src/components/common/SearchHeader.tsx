"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosSearch, IoIosAdd } from "react-icons/io";
import Toggle from '../cards/Toggle';

const SearchHeader = () => {

  return (
    <div className='px-4 rounded-md dark:bg-sidebar w-full py-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-5'>
            <Image src="" alt="" width={60} height={60} className='rounded-full lg:w-[50px] w-[35px] lg:h-[50px] h-[35px]' />
            <div>
                <h2 className='font-semibold text-sm mb-2'>Omokefe Ovie David</h2>
                <p className='text-text-secondary text-[12px]'>oviedavid77@gmail.com</p>
            </div>
        </div>
        <div className='relative h-11 w-[70%]'>
        <span className='absolute left-4 top-[11px] text-primary'><IoIosSearch size={20} /></span>
          <input type="text" className='bg-search-color  flex items-center justify-center outline-none rounded-full w-full h-full px-10' />
          <button className='flex items-center justify-between gap-0 bg-primary absolute right-2 top-2 h-[70%] w-[8%] rounded-full px-2 font-medium'>
            <span><IoIosAdd size="24px" /></span>
            <p>Snippet</p>
          </button>
        </div>
        <div className='-mt-4'>
          <Toggle />
        </div>
      </div>
    </div>
  )
}

export default SearchHeader