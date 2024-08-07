"use client"
import React,{useState,useEffect} from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from 'next/link';
import { redirect } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Cookies from 'js-cookie';
import { FaUserEdit } from "react-icons/fa";
import { LiaSignOutAltSolid } from "react-icons/lia";

const HeaderSetting = () => {
  const [login, setlogin] = useState(false)
  const [avataurl, setavataurl] = useState("")
    
  useEffect(() => {
    const status = Cookies.get("loginstatus")
    if(status === "true"){
      setlogin(true)
      setavataurl(Cookies.get("urlava")!)
    }else
      setlogin(false)
    }, [])
    const handlesignout = () => {
        Cookies.set("loginstatus","false")
        Cookies.remove("urlava")
        return redirect("/")
      }
  return (
    <div className='w-full'>
        <div className="flex justify-between">
            <div className='flex items-center gap-2'>
                <Link href='/'><IoMdArrowRoundBack size={30} className='cursor-pointer' /></Link>
                <span className='font-bold text-xl'>Setting</span>
            </div>
            <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className='flex items-center justify-center md:block rounded-full mt-2 w-8 sm:w-11 sm:h-11 bg-white '>
                    <Avatar className='rounded-full'>
                      <AvatarImage src={avataurl || ""} alt="@shadcn" />
                      <AvatarFallback><FaUserEdit/></AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>User Setting</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem  onClick={handlesignout} className='cursor-pointer'>
                        <LiaSignOutAltSolid className="mr-2 h-4 w-4" />
                        <span>Sign out</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu></div>
        </div>
    </div>
  )
}

export default HeaderSetting