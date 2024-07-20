"use client"
import React, { useState } from 'react'
import { FaMoon } from "react-icons/fa6";
import { BiSolidSun } from "react-icons/bi";

const Toggle = () => {
    const [selected, setSelected] = useState(true);
  return (
    <div className="w-full max-w-sm flex flex-col mx-auto text-center">
      <div className="relative w-full mt-4 rounded-md border h-10 p-3 bg-gray-200">
        <div className="relative w-full h-full flex items-center">
          <div onClick={() => setSelected(!selected)} className="w-full flex justify-center text-gray-400 cursor-pointer">
            <button>Light</button>
          </div>
          <div onClick={() => setSelected(!selected)} className="w-full flex justify-center text-gray-400 cursor-pointer">
            <button>Dark</button>
          </div>
        </div>
        <span
          className={`bg-white shadow text-sm flex items-center justify-center w-1/2 rounded h-[1.88rem] transition-all duration-150 ease-linear top-[4px] absolute ${
            selected
              ? 'left-1 text-indigo-600 font-semibold'
              : 'left-1/2 -ml-1 text-gray-800'
          }`}
        >
          {selected ? <BiSolidSun /> : <FaMoon />}
        </span>
      </div>
  </div>
)
}

export default Toggle