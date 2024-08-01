"use client";

import React, { useEffect, useState } from 'react';
import { CiHashtag } from 'react-icons/ci';
import { MdBook, MdCancel, MdEdit } from 'react-icons/md';
import CodeEditor from './CodeEditor';
import { SnippetsInterface } from '@/variables/SnippetsRes';

type Prop = {
    setOpenCreate: (open: boolean) => void;
}

const tags: any[] = ["Java", "ApiCall", "MyDebug"];

const CreateSnippets = ({ setOpenCreate }: Prop) => {
    const [isOpenTag, setIsOpenTags] = useState(false);
    const [formData, setFormData] = useState<SnippetsInterface>({
        text: "",
        title: "",
        date: "",
        language: "",
        tags: [],
        icon: ""
    });

    const [language, setLanguage] = useState("javascript")

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    useEffect(() => {
      setFormData({
        ...formData,
        language: language,
        date: new Date()
      })
    }, [language])

    const openTags = () => {
        setIsOpenTags(!isOpenTag);
    }

    const addTags = (index: number) => {
        const newTags = [...formData.tags, tags[index]];
        if (newTags.length > 5) {
            alert("cannot add more than 5 tags");
            return;
        }
        setFormData({
            ...formData,
            tags: newTags
        });
        console.log("the tags", newTags);
    };

    const handleCodeEditorChange = (value: string) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            text: value
        }));
        console.log("form", formData);
    }

    return (
        <div className={`py-3 mt-5 md:min-h-screen bg-sidebar rounded-md px-5 md:relative absolute md:top-0 top-44 min-h-[500px]`}>
            <span onClick={() => setOpenCreate(false)} className='absolute right-3 top-3 cursor-pointer hover:text-gray-300'>
                <MdCancel size="30" color="gray" />
            </span>
            <div className='mt-5'>
                <form className='flex flex-col gap-5'>
                    <div className='flex gap-4'>
                        <label className='text-xl font-medium' htmlFor="title">T</label>
                        <textarea
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder='New Title...'
                            className='bg-transparent appearance-none outline-none placeholder:text-xl placeholder:font-medium text-xl max-w-[80%]'
                        />
                    </div>
                    <div className='flex items-center gap-4 relative'>
                        {isOpenTag && 
                            <div className='absolute -top-10 left-40 bg-white text-sidebar rounded-lg w-[100px] px-2 py-2 text-[12px]'>
                                <div className='flex flex-col gap-1'>
                                    {tags.map((item, index) => (
                                        <button
                                            onClick={() => addTags(index)}
                                            key={index}
                                            type="button"
                                            className='cursor-pointer hover:bg-gray-50'
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        }
                        <span className='text-primary'>
                            <CiHashtag />
                        </span>
                        <div className='flex items-center gap-1 flex-wrap'>
                            {formData.tags.length < 1 ? (
                                <button type="button" className='bg-white text-sidebar rounded-md px-2 text-sm py-2 hover:bg-gray-100'>
                                    No tags
                                </button>
                            ) : (
                                formData.tags.map((item, index) => (
                                    <button key={index} className='bg-white text-sidebar rounded-md px-2 text-sm py-2 hover:bg-gray-100'>
                                        {item}
                                    </button>
                                ))
                            )}
                        </div>
                        <span onClick={openTags} className='cursor-pointer'>
                            <MdEdit />
                        </span>
                    </div>
                    <div className='flex gap-4'>
                        <label className='text-lg font-medium text-primary' htmlFor="description">
                            <MdBook />
                        </label>
                        <textarea
                            name="text"
                            placeholder='Description'
                            value={formData.text}
                            onChange={handleChange}
                            className='bg-transparent outline-none border-[1.4px] rounded-lg px-5 py-2 placeholder:font-medium text-lg max-w-[80%]'
                        />
                    </div>
                    <div className='border-[1.4px] rounded-lg min-h-screen py-3'>
                        <CodeEditor onChange={handleCodeEditorChange} language={language} setLanguage={setLanguage} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateSnippets;
