"use client"
import Button from '@/components/cards/button'
import PageWrapper from '@/components/common/PageWrapper'
import React, { useState } from 'react'
import { MdAdd, MdBook, MdCancel, MdEdit } from 'react-icons/md'
import { GiNotebook } from "react-icons/gi";
import { useAuthContext } from '@/context/root'
import { CiHashtag } from "react-icons/ci";

const page = () => {



  const {openCreate, setOpenCreate} = useAuthContext();
  const [isOpenTag, setIsOpenTags] = useState(false);

  const openModal = (num: number) => {
   if(num === 3){
    setOpenCreate(true)
   }
  }

  const openTags = () => {
    setIsOpenTags(!isOpenTag);
  }
  return (
    <PageWrapper >
        <div className={`${openCreate ? "md:flex block  gap-5" : "block "}`}>
          <div className={`${openCreate ? "md:w-[50%] w-[100%]":"w-full"}`}>
              <div className='flex items-center justify-between px-5 bg-sidebar mt-5 h-16 rounded-xl'>
                <Button onclick={() => openModal(1)} type="button" className='bg-primary w-[60px]'>All</Button>
                <Button onclick={() => openModal(1)} type="button" className='bg-primary w-[60px] flex items-center gap-1'>
                  <span><MdAdd /></span>
                  <span>Tag</span>
                </Button>
              </div>

              <div className='mt-20 mx-auto w-[50%]'>
                <div className='flex flex-col gap-2 items-center justify-center text-center'>
                <div>
                  <GiNotebook size="100" color="gray" />
                </div>
                <div className='flex items-center flex-col gap-4'>
                  <p>You have clean slate buddy, let's add a snippet</p>
                  <Button onclick={() =>openModal(3)} type="button" className='bg-primary flex items-center gap-2 px-2' >
                  <span><MdAdd /></span>
                  <span>Add Snippet</span>
                  </Button>
                </div>
                </div>
              </div>
          </div>
          <div className={`${openCreate ? "block" : "hidden"} md:w-[50%] w-full mt-5 md:min-h-screen bg-sidebar rounded-md px-5 md:relative absolute md:top-0 top-44 min-h-[500px] `}>
            <span onClick={() => setOpenCreate(false)} className='absolute right-3 top-3 cursor-pointer hover:text-gray-300'>
              <MdCancel size="30" color="gray" />
            </span>
           <div className=' mt-5'>
            <form className='flex flex-col gap-5'>
              <div className='flex gap-4'>
                <label className='text-xl font-medium' htmlFor="title">T</label>
                <textarea placeholder='New Title...' className='bg-transparent appearance-none outline-none placeholder:text-xl placeholder:font-medium text-xl max-w-[80%]' />
              </div>
              <div className='flex items-center gap-4 relative'>
                {
                  isOpenTag && <div className='absolute top-2 right-10 bg-white text-sidebar rounded-lg w-[100px] px-2 py-2 text-[12px]'>
                  <ul className='flex flex-col gap-1'>
                    <li className='cursor-pointer hover:bg-gray-50'>Java</li>
                    <li className='cursor-pointer hover:bg-gray-50'>JavaScript</li>
                  </ul>
              </div>
                }
                <span className='text-primary'>
                <CiHashtag />
                </span>
                <button type="button" onClick={openTags} className='bg-white text-sidebar rounded-md px-2 text-sm py-2 hover:bg-gray-100'>No tags</button>
                <span>
                  <MdEdit />
                </span>
              </div>
              <div className='flex gap-4'>
                <label className='text-lg font-medium text-primary' htmlFor="title">
                  <MdBook />
                </label>
                <textarea placeholder='Description' className='bg-transparent outline-none border-[1.4px] rounded-lg px-5 py-2 placeholder:font-medium text-lg max-w-[80%]' />
              </div>
              <div className='border-[1.4px] rounded-lg min-h-screen py-3'>
                <div className=' px-3 text-gray-400'>
                  <select className='bg-transparent' name="" id="">
                    <option value="">Javascript</option>
                  </select>
                </div>
                <textarea placeholder='Your code' className='bg-transparent outline-none px-5 py-2 placeholder:font-medium text-sm max-w-[100%] min-h-[98vh] text-gray-400' />
              </div>
            </form>
           </div>
          </div>
        </div>
    </PageWrapper>
  )
}

export default page