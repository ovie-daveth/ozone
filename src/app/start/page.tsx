"use client"
import Button from '@/components/cards/button'
import PageWrapper from '@/components/common/PageWrapper'
import React, { useEffect, useState } from 'react'
import { MdAdd, MdBook, MdCancel, MdEdit } from 'react-icons/md'
import { GiNotebook } from "react-icons/gi";
import { useAuthContext } from '@/context/root'
import SampleCodeText from '@/components/cards/SampleCodeText'
import CreateSnippets from '@/components/CreateSnippets'
import { SnippetsInterface } from '@/variables/SnippetsRes'

const SnippetsData: SnippetsInterface[] = []

const page = () => {

  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);

  const {openCreate, setOpenCreate} = useAuthContext();
  const [isSnippet,setisSnippet] = useState(false)

  const openModal = (num: number) => {
   if(num === 3){
    setOpenCreate(true)
   }
  }

  useEffect(() => {
    if(SnippetsData.length >= 1){
      setisSnippet(true)
    }
  }, [SnippetsData])
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
               {
                isSnippet ?  <div className={`grid ${openCreate ? "grid-cols-2":"grid-cols-3"} mt-5 gap-3`}>
                  {
                    SnippetsData.map((item: SnippetsInterface, index: number) => (
                   
                    <SampleCodeText key={index} title='Bonjour' tags={item.tags} language={item.language} date={item.date} icon={item.icon} text={item.text} />
               
                    ))
                  }
                </div> :  <div className='mt-20 mx-auto w-[50%]'>
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
              }
             
          </div>
          <div className={`${openCreate ? "block" : "hidden"} md:w-[50%] w-full`}>
            <CreateSnippets setOpenCreate={setOpenCreate} />
          </div>
        </div>
    </PageWrapper>
  )
}

export default page