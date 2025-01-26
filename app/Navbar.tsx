"use client"


import Link from 'next/link'
import { usePathname } from 'next/navigation';

import React from 'react'
import { FaBug } from "react-icons/fa";
import classNames from 'classnames';
import {useSession} from "next-auth/react"

const Navbar = () => {
    const {status,data:session}=useSession();
    const links=[
        {label:"Dashboard",href:"/"},
        {label:"issues",href:"/issues/list"}
    ]
    const currentPath=usePathname()
  return (
   <nav className='flex space-x-6 border-b mb-5  px-5 h-14 items-center'>
    <Link href={"/"}><FaBug/></Link>
    <ul className='flex space-x-6'>
    {links.map(link => 
    <Link 
            key={link.href} 
            className={classNames({
                'text-zinc-900':link.href===currentPath,
                'text-zinc-500':link.href!=currentPath,
                'hover:text-zinc-800 transition-colors':true
            })
            }
            href={link.href}>{link.label}</Link>)}
      {status==="authenticated" &&(<Link href={"/api/auth/signout"}>Logout</Link>)} 
      {status==="unauthenticated" && <Link href={"/api/auth/signin"}>Login</Link>}
       
    </ul>
   </nav>
  )
}

export default Navbar
