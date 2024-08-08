"use client"
import React,{useState,useEffect} from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

import { Button } from '@/components/ui/button';
import { FaUserEdit,FaCamera  } from "react-icons/fa";
import Cookies from 'js-cookie';


const page = () => {
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
    <div className='w-11/12 p-3 -mt-2'>
      <div className='flex flex-col gap-4'>
        <div className='border-b-2  border-gray-400/20 p-2'>
          <span className='text-3xl font-semibold'>Thông tin người dùng</span>
        </div>
        <div className='flex border'>
          <div className='w-5/6 border'>
            thong tin
          </div>
          <div className='w-1/6 border flex flex-col gap-2'>
            <div>
              <span className='font-semibold'>Profile picture</span>
            </div>
            <div className='flex justify-center'>
              <div className="relative h-32 w-32">
                <img
                  src={avataurl||""}
                  alt="Avatar"
                  className="w-full size-32 h-full rounded-full object-contain border-2 border-black/40"
                />
                <div>
                  <Button size={"sm"} variant={"outline"} className='size-10 z-50 rounded-full bg-blue-500 absolute -right-1 -bottom-1 text-white hover:bg-blue-700 hover:text-white border-0'><FaCamera /></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page