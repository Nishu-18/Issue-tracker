"use client"


import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Avatar, Box, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import classNames from 'classnames';
import { useSession } from "next-auth/react";
import { FaBug } from "react-icons/fa";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Navbar = () => {
    const {status,data:session}=useSession();
    const links=[
        {label:"Dashboard",href:"/"},
        {label:"issues",href:"/issues/list"}
    ]
    const currentPath=usePathname()
  return (
   <nav className='flex space-x-6 border-b   px-5 h-14 items-center justify-between'>
    
    <Flex gap={"3"} align={"center"}>
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
      
       
    </ul>

    </Flex>
    <Box>
        {status==="authenticated" && (
             <DropdownMenu.Root >
            <DropdownMenu.Trigger>
                <Avatar className='cursor-pointer' src={session?.user?.image!} fallback={"?"} size={"2"} radius='full' referrerPolicy='no-referrer'> </Avatar>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Label>
                    <Text size={"4"}>
                    {session?.user?.email}

                    </Text>
                    
                   
                </DropdownMenu.Label>
                <DropdownMenu.Item>
                <Link href="/api/auth/signout?callbackUrl=/">LogOut</Link>

                </DropdownMenu.Item>
                
            </DropdownMenu.Content>
        </DropdownMenu.Root>
       
        )}
        {status==="loading" && (<Skeleton width={"3rem"}/>)}
       
   
    {status==="unauthenticated" && <Link className='text-zinc-500 hover:text-zinc-800 transition-colors' href={"/api/auth/signin?callbackUrl=/"}>Login</Link>}
    </Box>
    
   </nav>
  )
}

export default Navbar
