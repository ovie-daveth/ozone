"use client"
import React, { useState } from "react"
import { db } from '@/services/db'
import { ID } from 'appwrite'
   
  type Prop = {
    setIsOpenTag: React.Dispatch<React.SetStateAction<boolean>>;
  }
  export function CreateTags({setIsOpenTag}: Prop) {

    const [value, setValue] = useState();
    const [loading, setLoading] = useState(false)
    const handleCreate = async (e:any) => {
      e.preventDefault();
      setLoading(true)
      try {
        const form = {
          name: value,
          color: "red"
        }
        console.log("form", form)
        const response = await db.tag.create(form)
        console.log("success", response)
        if(response){
          console.log("success", response)
          setIsOpenTag(false)
          setLoading(false)
        }
      } catch (error: any) {
        console.log("err", error.message);
        setLoading(false)
      }
      
    }
    return (
      <div className="rounded-md bg-backdrop w-full py-5 px-10 drop-shadow-lg shadow-lg">
        <div>
          <h3 className="text-xl mb-3">Create tags</h3>
          <small className="text-center text-gray-400 mb-3">Tags are labels you can use to remember and group your works easily</small>
          <form className="mt-4 w-full">
            <div className="flex flex-col gap-5">
              <input type="text" placeholder="" className="w-full h-10 bg-transparent outline-none border-[1.4px] border-gray-400 rounded-lg px-3" onChange={(e: any) => setValue(e.target.value)} />
              <button onClick={handleCreate} type="submit" className="w-[30%] bg-white py-2 text-primary rounded-md hover:bg-gray-100 font-bold tracking-wider">{loading ? "loading..": "Create"}</button>
            </div>
          </form>
        </div>
      </div>
    );
  }