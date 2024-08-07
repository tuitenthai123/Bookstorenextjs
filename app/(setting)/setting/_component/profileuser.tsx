"use client"
import React,{useState,useEffect} from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { FaUserEdit } from "react-icons/fa";
import Cookies from 'js-cookie';

const profileuser = () => {
    const [avataurl, setavataurl] = useState("")
    var fullname = Cookies.get("fullname")
    var email = Cookies.get("email")
    useEffect(() => {
        const status = Cookies.get("loginstatus")
        if(status === "true"){
          setavataurl(Cookies.get("urlava")!)
        }
        }, [])  
  return (
    <div>
        <div className='flex gap-3'>
            <div className='flex items-center'>
                <Avatar className='rounded-full border-2 border-black/40'>
                  <AvatarImage src={avataurl || ""} alt="@shadcn" />
                  <AvatarFallback><FaUserEdit/></AvatarFallback>
                </Avatar>
            </div>
            <div className='flex flex-col '>
                <div>
                    <span className='text-xl font-semibold '>{fullname} </span><span className='font-semibold opacity-60'>({email})</span>
                </div>
                <div className='text-xs opacity-70'>
                    Your personal account
                </div>
            </div>
        </div>
    </div>
  )
}

export default profileuser