import { timeAgo } from '@/utils'
import { tagInterface } from '@/variables/SnippetsRes'
import React from 'react'
import { MdDelete, MdOutlineFavoriteBorder } from 'react-icons/md'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Prop = {
    title?: string,
    text?: any,
    date?: any,
    language?: string,
    tags?: tagInterface[],
    icon?: any,
    desc: string
}
const SampleCodeText = ({text, date, language, tags, title, desc, icon}: Prop) => {
  return (
    <div className='dark:bg-sidebar rounded-lg min-h-[30px] min-w-[200px] px-5 py-3'>
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
                <h3 className='md:text-lg'>{title}</h3>
                <span><MdOutlineFavoriteBorder /></span>
            </div>
            <div className=' italic text-[12px] float-right flex justify-end'>
                {timeAgo(date)}
            </div>
            <div className='flex items-center gap-2 flex-wrap'>
               {
                tags?.map((item, index) => (
                    <span className='bg-white px-2 text-primary rounded-full text-[12px] lowercase' key={index}>{item.name}</span>
                ))
               }
            </div>
            <div className='text-[12px] italic text-gray-500 border-b-[1px] border-gray-500 pb-1 mt-2 mb-3'>
                {desc}
            </div>
            <div className='text-gray-300 text-sm'>
            <SyntaxHighlighter language={language} style= {okaidia}>
                {text}
    </SyntaxHighlighter>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <div className='flex items-center gap-1 '>
                    <span>{icon}</span>
                    <p>{language}</p>
                </div>
                <div className=' cursor-pointer'>
                    <MdDelete />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SampleCodeText
