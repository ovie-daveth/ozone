"use client"

import { Login } from "@/components/auth/Login";
import { Register } from "@/components/auth/Register";
import Image from "next/image";
import { useState } from "react";
import { FaCode } from "react-icons/fa6";
export default function Home() {

  const [isOpen, setIsOpen] = useState({
    login: false,
    register: false
  });

  const OpenModal = (num: number) => {
    if(num === 1){
      setIsOpen({
        login: true,
        register: false
      })
    } else {
      setIsOpen({
        login: false,
        register: true
      })
    }
  }
  return (
    <div className="bg-white min-h-screen text-gray-600 px-10 py-5">
      <header className="flex items-center justify-between">
        <div>
          <div className={`flex items-center gap-2`}>
                  <div className='bg-blue-600 p-2 rounded-md'><FaCode size="30px" color="white" /></div>
                  <h1 className={` text-text-secondary hidden md:block font-bold`}> <span className="text-blue-600">Ozone</span> CodeDocs</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => OpenModal(2)} className="bg-blue-600 text-white border-blue-600 border-2 rounded-md w-[80px] py-1">Sign Up</button>
          <button onClick={() => OpenModal(1)} className="border-blue-600 border-2 rounded-md w-[80px] py-1">Sign in</button>
        </div>
      </header>
      <main className="mt-36">
        <div className="max-w-[650px] mx-auto">
          <div className="flex flex-col gap-6">
              <h1 className="text-right lg:text-2xl text-xl text-blue-600 font-bold">Don't loose your code again!</h1>
              <p className="w-[75%] text-center text-text-secondary">With our advanced tagging and search features, you can quickly find the snippet you need, right when you need it. Spend less time searching for code and more time writing it.</p>
          </div>
          <Image src="/images/code-snippet.png" alt="" height={700} width={700} className="w-full h-full mt-28" />
        </div>
      </main>
        <Login isOpen={isOpen.login} setIsOpen={setIsOpen} />
        <Register isOpen={isOpen.register} setIsOpen={setIsOpen} />
    </div>
  );
}
