import Link from 'next/link'
import React from 'react'
import { FaCode } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { HiMiniTrash } from "react-icons/hi2";
import { FaHashtag } from "react-icons/fa6";
import { RiLogoutCircleFill } from "react-icons/ri";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const menus = [
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
        title: "All Snippets",
        href: "/start",
        icons: <FaCodepen />,
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

const MobileSideBar = () => {

    const path = usePathname();
    console.log("path", path)

  return (
    <div className={`bg-sidebar sm:hidden block px-5 fixed bottom-0 right-0 left-0`}>
            <div className='py-3 flex justify-between'>
               {
                menus.map((item, index) => (
                    <Link href={`${item.href}`} key={index} className={`flex items-center rounded-full relative group ${path === item.href && "bg-primary"}`}>
                        <div className={` p-2 rounded-md`}>{item.icons}</div>
                        <small className="opacity-0 group-hover:opacity-100 itransition absolute -top-5 -left-5 w-[100px]">{item.title}</small>
                </Link>
                ))
               }
            </div>
    </div>

  )
}

export default MobileSideBar
