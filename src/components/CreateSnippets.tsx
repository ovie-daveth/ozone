"use client";

import React, { useEffect, useState } from 'react';
import { CiHashtag } from 'react-icons/ci';
import { MdBook, MdCancel, MdEdit } from 'react-icons/md';
import CodeEditor from './CodeEditor';
import { SnippetsInterface } from '@/variables/SnippetsRes';
import { db } from '@/services/db';

type Prop = {
    setOpenCreate: (open: boolean) => void;
    formData: SnippetsInterface;
    setFormData:  React.Dispatch<React.SetStateAction<SnippetsInterface>>;
}

interface tagInterface {
    color: string,
    name: string
}


const CreateSnippets = ({ setOpenCreate, formData, setFormData }: Prop) => {
    const [isOpenTag, setIsOpenTags] = useState(false);
    const [loading, setLoading] = useState({
        tag: false
    })
    const [tags, setTags] = useState<tagInterface[]>([
        {
            name: "",
            color: ""
        }
    ])

    const [language, setLanguage] = useState("javascript");
    const [forms, setForms] = useState<SnippetsInterface>({
        text: "",
        title: "",
        date:  "",
        language: language,
        tags: [],
        icon: "",
        desc: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForms(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    useEffect(() => {
        setForms(prevFormData => ({
            ...prevFormData,
            [language]: language
        }));

        setFormData(prevFormData => ({
            ...prevFormData,
            [language]: language
        }));
    }, [language])

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            title: forms.title,
            text: forms.text,
            date: forms.date,
            language: language,
            tags: forms.tags,
            icon: forms.icon,
            desc: forms.desc
        }));
    }, [forms])

    const getAllTAGS = async() => {
        const response = await db.tag.getAll();
        setLoading({
            ...loading,
            tag: true
        })
        if(response){
            console.log(response)
            setTags(response.documents as unknown as tagInterface[])
            setLoading({
                ...loading,
                tag: false
            })
        }
    }

    useEffect(() => {
      getAllTAGS();
    }, [])

    const openTags = () => {
        getAllTAGS()
        setIsOpenTags(!isOpenTag);
    }

    const addTags = (index: number) => {
        const newTags = [...forms.tags, tags[index]];
        if (newTags.length > 5) {
            alert("cannot add more than 5 tags");
            return;
        }
        setForms({
            ...formData,
            tags: newTags
        });
        console.log("the tags", newTags);
    };

    const handleCodeEditorChange = (value: string) => {
        setForms(prevFormData => ({
            ...prevFormData,
            text: value
        }));
        console.log("form", formData);
    }

    const closeAndSave = async() => {

        const form = {
            title: forms.title,
            date: forms.date,
            language: forms.language,
            description: forms.description,
            text: forms.text,
            tags: forms.tags
        }
        const response = await db.snippet.create(form)
        if(response){
            console.log("success", response)
            setOpenCreate(false);
        }
 
    }

    return (
        <div className={`py-3 mt-5 md:min-h-screen bg-sidebar rounded-md px-5 md:relative absolute md:top-0 top-44 min-h-[500px]`}>
            <span onClick={closeAndSave} className='absolute right-3 top-3 cursor-pointer hover:text-gray-300'>
                <MdCancel size="30" color="gray" />
            </span>
            <div className='mt-5'>
                <form className='flex flex-col gap-5'>
                    <div className='flex gap-4'>
                        <label className='text-xl font-medium' htmlFor="title">T</label>
                        <textarea
                            name="title"
                            value={forms.title}
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
                                        loading.tag ? "loading..." : <button
                                        onClick={() => addTags(index)}
                                        key={index}
                                        type="button"
                                        className='cursor-pointer hover:bg-gray-50'
                                    >
                                        {item?.name}
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
                                    <button key={index} className={`bg-white text-${item.color} rounded-md px-2 text-sm py-2 hover:bg-gray-100`}>
                                        {item.name}
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
                            name="desc"
                            placeholder='Description'
                            value={forms.description}
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
