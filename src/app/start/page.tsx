"use client";

import React, { useContext, useEffect, useState } from 'react';
import { MdAdd, MdBook, MdCancel, MdEdit } from 'react-icons/md';
import { GiNotebook } from "react-icons/gi";
import SampleCodeText from '@/components/cards/SampleCodeText';
import CreateSnippets from '@/components/CreateSnippets';
import { SnippetsInterface } from '@/variables/SnippetsRes';
import { Context } from '@/context/root';
import { CreateTags } from '@/components/CreateTags';
import PageWrapper from '@/components/common/PageWrapper';
import Button from '@/components/cards/button';
import { db } from '@/services/db';


const page = () => {
  const { openCreate, setOpenCreate } = useContext(Context);
  const [isSnippet, setisSnippet] = useState(false);
  const [isOpenTag, setIsOpenTag] = useState(false);
  const [SnippetsData, setIsSnippetsData] = useState<SnippetsInterface[]>([])

  const openModal = (num: number) => {
    if (num === 3) {
      setOpenCreate(true);
    }

    if (num === 2) {
      setIsOpenTag(!isOpenTag);
    }
  };

  const [formData, setFormData] = useState<SnippetsInterface>({
    text: "",
    title: "",
    date: "",
    language: "",
    tags: [],
    icon: "",
    description: ""
  });

  const getSnippets = async() => {
    const response = await db.snippet.getAll();
    if(response){
      console.log("data", response)
      setIsSnippetsData(response.documents)
    }
  }



  useEffect(() => {
    getSnippets()
    console.log("data", formData);
  }, [formData]);

  useEffect(() => {
    if (SnippetsData.length >= 1) {
      setisSnippet(true);
    }
  }, [SnippetsData]);

  return (
    <PageWrapper>
      <div className={`${openCreate ? "md:flex block  gap-5" : "block "}`}>
        <div className={`${openCreate ? "md:w-[50%] w-[100%]" : "w-full"}`}>
          <div className='flex items-center justify-between px-5 bg-sidebar mt-5 h-16 rounded-xl'>
            <Button onclick={() => openModal(1)} type="button" className='bg-primary w-[60px]'>All</Button>
            <Button onclick={() => openModal(2)} type="button" className='bg-primary w-[60px] flex items-center gap-1'>
              <span><MdAdd /></span>
              <span>Tag</span>
            </Button>
            {isOpenTag &&
              <div className='absolute top-28 md:left-[25%] left-0 md:w-[50%] w-full px-2'>
                <CreateTags setIsOpenTag={setIsOpenTag} />
              </div>
            }
          </div>
          {isSnippet ?
            <div className={`grid ${openCreate ? "grid-cols-2" : "grid-cols-3"} mt-5 gap-3`}>
              {SnippetsData.map((item: SnippetsInterface, index: number) => (
                <SampleCodeText key={index} title={item.title} tags={item.tags} language={item.language} date={item.date} icon={item.icon} text={item.text} desc={item.description} />
              ))}
            </div> :
            <div className='mt-20 mx-auto w-[50%]'>
              <div className='flex flex-col gap-2 items-center justify-center text-center'>
                <div>
                  <GiNotebook size="100" color="gray" />
                </div>
                <div className='flex items-center flex-col gap-4'>
                  <p>You have clean slate buddy, let's add a snippet</p>
                  <Button onclick={() => openModal(3)} type="button" className='bg-primary flex items-center gap-2 px-2' >
                    <span><MdAdd /></span>
                    <span>Add Snippet</span>
                  </Button>
                </div>
              </div>
            </div>
          }
        </div>
        <div className={`${openCreate ? "block" : "hidden"} md:w-[50%] w-full`}>
          <CreateSnippets setOpenCreate={setOpenCreate} formData={formData} setFormData={setFormData} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
