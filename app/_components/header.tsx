import React from 'react'
import logo from "../../asset/Logo.png"
import { FaRegCircleUser,FaBagShopping  } from "react-icons/fa6"
import Icon from "./icon"
import Searchbar from "./searchbar"

const Header = () => {
  return (
    <div className="sticky top-0 z-50 p-3 backdrop-blur-lg border-b border-neutral-200 bg-cyan-700 sm:bg-white">
    <div className="container px-4 mx-auto relative text-sm ">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="cursor-pointer flex h-20 w-20 items-center flex-shrink-0 sm:flex-row flex-col">
          <img className="mr-2 h-16 w-32" src={logo.src} alt="logo" />
          <span className="tracking-tight font-bold text-xl bg-gradient-to-r sm:from-[#3494E6] sm:to-[#EC6EAD] from-[#F29492] to-[#FFC371] text-transparent bg-clip-text">FruitsBook</span>
        </div>
        {/* tìm kiếm */}
        <Searchbar label="Đắc Nhân Tâm, Javascript..."/>
        {/* đăng nhập */}
        <div className="flex gap-5">
          {/* giỏ hàng */}
          <Icon icon={FaBagShopping} label="Giỏ Hàng" href="#" />
          <Icon icon={FaRegCircleUser} label="Tài Khoản" href="#" />
        </div>
      </div>
    </div>
</div>
  )
}

export default Header