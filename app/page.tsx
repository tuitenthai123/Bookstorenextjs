import logo from "../asset/Logo.png"
import { BsSearch } from "react-icons/bs";
import { FaRegCircleUser,FaBagShopping  } from "react-icons/fa6";

export default function Home() {

  return (
    <div>
      <div className="sticky top-0 z-50 p-3 backdrop-blur-lg border-b border-neutral-200 bg-cyan-700 sm:bg-white">
          <div className="container px-4 mx-auto relative text-sm ">
            <div className="flex justify-between items-center">
              {/* logo */}
              <div className="cursor-pointer flex h-20 w-20 items-center flex-shrink-0 sm:flex-row flex-col">
                <img className="mr-2 h-16 w-32" src={logo.src} alt="logo" />
                <span className="tracking-tight font-bold text-xl bg-gradient-to-r sm:from-[#3494E6] sm:to-[#EC6EAD] from-[#F29492] to-[#FFC371] text-transparent bg-clip-text">FruitsBook</span>
              </div>
              {/* tìm kiếm */}
              <div className='w-1/2 flex items-center'>
                <span className='h-10 pl-4 flex items-center justify-center bg-[#DDE4E4] rounded-l-[20px] text-gray-500'>
                  <BsSearch size={24} />
                </span>
                <input
                  type='text'
                  className='outline-none bg-[#DDE4E4] w-full px-4 py-2 rounded-r-[20px] h-10 text-gray-500'
                  placeholder='Tìm sách'
                />
              </div>

              {/* đăng nhập */}
              <div className="flex gap-5">
                {/* giỏ hàng */}
                <div className="flex flex-col justify-center items-center p-2 rounded-full w-full sm:rounded-xl bg-slate-200 cursor-pointer gap-1 md:w-24">
                  <FaBagShopping size={24}/>
                  <span className="md:block hidden">Giỏ Hàng</span>
                </div>
                {/* user */}
                <div className="flex flex-col justify-center items-center p-2 rounded-full w-full sm:rounded-xl bg-slate-200 cursor-pointer gap-1 md:w-24">
                  <FaRegCircleUser size={24} />
                  <span className="md:block hidden text-center">Tài Khoản</span>
                </div>
                
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
