"use client"

import React, { useState } from 'react'
import { FaCode } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { HiMiniTrash } from "react-icons/hi2";
import { FaHashtag } from "react-icons/fa6";
import { RiLogoutCircleFill } from "react-icons/ri";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
    open: boolean,
    setIsOpen: (open: boolean) => void;
}
const menus = [
    {
        title: "All Snippets",
        href: "/start",
        icons: <FaCodepen />,
    },
    {
        title: "Favorites",
        href: "/favorites",
        icons: <MdFavoriteBorder />,
    },
    {
        title: "Trash",
        href: "/trash",
        icons: <HiMiniTrash />,
    },
    {
        title: "Tags",
        href: "/tags",
        icons: <FaHashtag />,
    },
    {
        title: "Log Out",
        icons: <RiLogoutCircleFill />,
    },
]

const SideBar = ({open, setIsOpen}: Props) => {

    //const [open, setIsOpen] = useState(false);

    const path = usePathname();
    console.log("path", path)

    const OpenSideBar = () => {
        setIsOpen(!open)   
    }
  return (
    <div className={`bg-sidebar min-h-screen relative ${open ? "w-[250px] " : "w-[80px]"} transition-all ease-in-out duration-300 px-10`}>
       <div onClick={OpenSideBar} className={`absolute -right-4 top-28 bg-sidebar rounded-full h-10 w-10 flex items-center justify-center`}>
        <span className={`bg-primary rounded-full h-6 w-6 flex items-center justify-center cursor-pointer`}>
                {
                    open ? <FaAngleLeft size="20" /> : <FaAngleRight size="20" />
                }
            </span>
       </div>
        <div className='py-6 flex flex-col gap-20'>
            <div className={`flex items-center ${open ? "" : "justify-center"} gap-2`}>
                <div className='bg-primary p-2 rounded-md'><FaCode size="30px" /></div>
                <h1 className={` text-text-secondary ${open ? "block" : "hidden"}`}>Ozone CodeDocs</h1>
            </div>
            <div className='py-6 flex flex-col gap-5'>
                {
                    open && <span className='text-sm'>Quick Links</span>
                }
               {
                menus.slice(0,3).map((item, index) => (
                    <Link href={`${item.href}`} key={index} className={`flex items-center ${open ? (path === item.href && "bg-primary") : "justify-center"} gap-2`}>
                        <div className={` ${open ? "" : (path === item.href && "bg-primary")} p-2 rounded-md`}>{item.icons}</div>
                        <h3 className={`${open ? "block" : "hidden"}`}>{item.title}</h3>
                </Link>
                ))
               }
             <div className='mt-5 flex flex-col gap-5'></div>
                {   
                menus.slice(3,5).map((item, index) => (
               
                    <Link href={`${item.href}`} key={index} className={`flex items-center ${open ? (path === item.href && "bg-primary") : "justify-center"} gap-2`}>
                        <div className={` ${open ? "" : (path === item.href && "bg-primary")} p-2 rounded-md`}>{item.icons}</div>
                        <h3 className={`${open ? "block" : "hidden"}`}>{item.title}</h3>
                </Link>
               
                ))
               }
            </div>
        </div>
    </div>
  )
}

export default SideBar