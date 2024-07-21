"use client"
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc";
import Button from '../cards/button';
import { MdCancel } from 'react-icons/md';
import { RegisterRequest } from '@/variables/RegisterRequest';
import { registerUser } from '@/services/authServices';
import { useRouter } from 'next/navigation';

type Prop = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<{ login: boolean; register: boolean }>>;
}
export const Register = ({isOpen, setIsOpen}: Prop) => {

    const router = useRouter();

    const [formData, setformData] = useState<RegisterRequest>({
        name: "",
        email: "",
        password: "",
        comfirm: ""
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e: any) => {
        const {name, value} = e.target;

        setformData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = async (e: any)=> {
        e.preventDefault();
        const {name, email, password, comfirm} = formData;
        if(!name){
            console.log("Name cannot be empty")
            return null
        }
        if(!email){
            console.log("Email cannot be empty")
            return null
        }
        if(password !== comfirm){
            console.log("Password not correct")
            return null
        }
        
       try {
        setLoading(true)
        const response = await registerUser(formData)
        if(response.status){
            console.log(response)
            router.push("/start")
            //setLoading(false)
        }

       } catch (error) {
        setLoading(false)
       }
        console.log(formData)
    }
  return (
    <div className={`lg:w-[450px] md:w-[60%] w-[85%] bg-white text-black rounded-lg shadow-xl drop-shadow-lg fixed top-20 left-[50%] -translate-x-[50%] z-50 px-5 py-5 ${isOpen ? "block" : "hidden"}`}>
        <span onClick={() => setIsOpen({login:false, register: false})} className='float-end cursor-pointer hover:scale-105 itransition'><MdCancel size="30" color='gray' /></span>
        <div className='flex flex-col items-center justify-center w-full'>
            <form className='w-full px-10' onSubmit={handleSubmit}>
                <div className='text-center mb-5'>
                    <h3 className='font-bold'>Create your account</h3>
                    <small className='text-text-secondary'>Welcome! Please fill in the details to get started</small>
                </div>
                <div className='flex items-center gap-2 w-full'>
                    <button className='w-[100%] border-[1.4px] rounded-md flex items-center justify-center gap-2 py-3 hover:bg-gray-100 itransition'>
                        <span><FaGithub /> </span>
                        <p>Guthub</p>
                    </button>
                    <button className='w-[100%] border-[1.4px] rounded-md flex items-center justify-center gap-2 py-3 hover:bg-gray-100 itransition'>
                        <span><FcGoogle /> </span>
                        <p>Google</p>
                    </button>
                </div>
                <div className=' text-center mt-5 relative before:absolute before:-left-3 before:top-3 before:bg-text-secondary before:w-[50%] before:h-[1.4px] after:absolute after:-right-3 after:top-3 after:bg-text-secondary after:w-[50%] after:h-[1.4px]'>
                    <small>Or</small>
                </div>
                <div className='w-full mt-10 text-text-secondary flex flex-col gap-6'>
                    <div>
                        <label className='flex items-center justify-between pr-1' htmlFor="name">
                            <span>Name</span>
                            <span>Optional</span>
                        </label>
                        <input type="text" placeholder='' className='border-[1.4px] w-full mt-2 h-10 rounded-lg outline-none px-5' name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='flex items-center justify-between pr-1' htmlFor="email">
                            <span>Email</span>
                        </label>
                        <input type="text" placeholder='' className='border-[1.4px] w-full mt-2 h-10 rounded-lg outline-none px-5' name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='flex items-center justify-between pr-1' htmlFor="password">
                            <span>Password</span>
                        </label>
                        <input type="password" placeholder='' className='border-[1.4px] w-full mt-2 h-10 rounded-lg outline-none px-5' name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='flex items-center justify-between pr-1' htmlFor="password">
                            <span>Comfirm Password</span>
                        </label>
                        <input type="password" placeholder='' className='border-[1.4px] w-full mt-2 h-10 rounded-lg outline-none px-5' name="comfirm" value={formData.comfirm} onChange={handleChange} />
                    </div>
                    <div>
                       <Button type="submit" className='bg-blue-600 text-white h-12 cursor-pointer hover:bg-blue-700 itransition w-full'>{loading ? "Loading...":"Sign Up"}</Button>
                    </div>
                    <div className='text-center flex justify-center items-center gap-2'>
                        <span>Already registered?</span>
                        <span className='underline hover:text-gray-700 itransition cursor-pointer' onClick={() => setIsOpen({login: true, register: false})}>Sign In</span>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}