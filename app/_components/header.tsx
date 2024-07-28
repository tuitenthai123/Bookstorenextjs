"use client"
import React,{useState} from 'react'
import logo from "../../asset/Logo.png"
import { FaRegCircleUser,FaBagShopping  } from "react-icons/fa6"
import Icon from "./icon"
import Searchbar from "./searchbar"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'

const Header = () => {
  const [hienthipass, sethienthipass] = useState("password")
  const [checkhienthipass, setcheckhienthipass] = useState("Hiện")
  const [tinhnang, settinhnang] = useState("dangnhap")
  
  const handlehienthipass = () => {
    if(checkhienthipass === "Hiện"){
      sethienthipass("text")
      setcheckhienthipass("Ẩn")
    }else{
      sethienthipass("password")
      setcheckhienthipass("Hiện")
    }
  }
  
  return (
  <Dialog>
    <div className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-200 bg-cyan-700 sm:bg-white/75">
        <div className="container mx-auto relative text-sm ">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="cursor-pointer flex h-20 w-20 items-center flex-shrink-0 sm:flex-row flex-col">
              <img className="mr-2 h-16 w-32" src={logo.src} alt="logo" />
              <span className="tracking-tight font-bold text-xl bg-gradient-to-r sm:from-[#3494E6] sm:to-[#EC6EAD] from-[#F29492] to-[#FFC371] text-transparent bg-clip-text">FruitsBook</span>
            </div>
            {/* tìm kiếm */}
            <Searchbar label="Đắc Nhân Tâm, Javascript..."/>
            <div className="flex gap-5">

              {/* giỏ hàng */}
              <Icon icon={FaBagShopping} label="Giỏ Hàng" href="#" />

              {/* đăng nhập */}
              <DialogTrigger asChild>
                <div>
                  <Icon icon={FaRegCircleUser} label="Tài Khoản" href="#" />
                </div>
              </DialogTrigger>

              {/* dialog content */}
                <DialogContent className='sm:w-[900px] w-[425px] rounded-lg'>
                  <div className='flex'>
                    <div className='sm:w-2/3 border w-full p-6 flex flex-col gap-5'>
                      {tinhnang === "dangnhap"? (
                        <div>
                          <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-1'>
                              <div className='text-lg font-medium'>Đăng nhập,</div>
                              <div className='text-xs'>Đăng nhập tài khoản FruitsBook bằng Email</div>
                            </div>
                            {/* dang nhap */}
                            <div className='flex gap-1'>
                              <div className='w-full'>
                                <div className='flex flex-col gap-4'>
                                  <div className='flex flex-col items-start gap-6'>
                                      {/* email */}
                                      <div className="flex items-center border-b border-teal-500  w-full p-1">
                                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none" type="email" placeholder="abc@gmail.com" aria-label="Full name"/>
                                      </div>
                                      {/* mật khẩu */}
                                      <div className="flex items-center border-b border-teal-500  w-full p-1">
                                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none" type={hienthipass} placeholder="Mật Khẩu" aria-label="Full name"/>
                                        <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 rounded" type="button" onClick={handlehienthipass}>{checkhienthipass}</button>
                                      </div>
                                  </div>
                                    <div className='flex justify-end gap-2 text-xs text-teal-500'>
                                      <div className='flex flex-col justify-end items-end gap-2'>
                                        <u className='cursor-pointer sm:-ml-36'>Quên mật khẩu?</u>
                                        <span className='cursor-pointer sm:-ml-36'>Chưa có tài khoản? <u >tạo tài khoản!</u></span>
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*nút đăng nhập*/}
                          <div>
                            <Button className=' w-full' variant={'custommau'}>Đăng nhập</Button>
                          </div>
                          <div className='sm:mt-24 mt-2 flex flex-col gap-3'>
                            <div className=' flex items-center justify-center opacity-70'>
                              Hoặc tiếp tục bằng
                            </div>
                            {/* google hoặc facebook */}
                            <div className='flex items-center justify-center gap-10'>
                                <img src="https://img.icons8.com/?size=100&id=114441&format=png&color=000000" alt="" className='size-14 transition shadow-lg rounded-full ease-in-out hover:-translate-y-3 hover:scale-125 duration-400' />
                                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" className='size-14 transition shadow-lg rounded-full ease-in-out hover:-translate-y-3 hover:scale-125 duration-400' />
                            </div>
                          </div>
                        </div>
                      ):(
                        <div>conmeo</div>
                      )}
                    </div>

                    {/* hinh */}
                    <div className='sm:w-1/3'>
                      <div className='border hidden md:block p-2 h-full bg-green-200/75 rounded-r-lg'>
                        <div className='flex flex-col gap-4 items-center justify-center h-[475px]'>
                          <img className='size-40' src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" alt="" />
                          <div className='flex flex-col gap-2 items-center justify-center text-green-600'>
                            <span className='text-xl'>Mua sắm tại FruitsBook</span>
                            <span className='text-sm'>Siêu ưu đãi mỗi tuần</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
            </div>
          </div>
        </div>
    </div>
  </Dialog>
  )
}

export default Header