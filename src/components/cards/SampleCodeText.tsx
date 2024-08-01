import React from 'react'
import { MdDelete, MdOutlineFavoriteBorder } from 'react-icons/md'

type Prop = {
    title?: string,
    text?: any,
    date?: any,
    language?: string,
    tags?: string[],
    icon?: any
}
const SampleCodeText = ({text, date, language, tags, title, icon}: Prop) => {
  return (
    <div className='dark:bg-sidebar rounded-lg min-h-[30px] min-w-[200px] px-5 py-3'>
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
                <h3>{title}</h3>
                <span><MdOutlineFavoriteBorder /></span>
            </div>
            <div>
                {date}
            </div>
            <div>
               {
                tags.map((item, index) => (
                    <span className='bg-white px-2 text-primary' key={index}>{item}</span>
                ))
               }
            </div>
            <div>
                {text}
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <span>{icon}</span>
                    <p>{language}</p>
                </div>
                <div>
                    <MdDelete />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SampleCodeText
