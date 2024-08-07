"use client"
import React,{useState,useRef,useEffect} from 'react'
import Cookies from 'js-cookie';
import axios from 'axios'
import logo from "../../asset/Logo.png"
import Icon from "./icon"
import Searchbar from "./searchbar"
import {InputOTPForm}  from './OTPinput'
import { FaRegCircleUser,FaBagShopping  } from "react-icons/fa6"
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
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
import { useToast } from "@/components/ui/use-toast"
import Link from 'next/link';


const Header: React.FC = () => {
  const [hienthipass, sethienthipass] = useState("password")
  const [checkhienthipass, setcheckhienthipass] = useState("Hiện")
  const [tinhnang, settinhnang] = useState("dangnhap")
  const [emailtemp, setemailtemp] = useState("")
  const email = useRef<HTMLInputElement>(null)
  const pass = useRef<HTMLInputElement>(null)
  const againpass = useRef<HTMLInputElement>(null)
  const [login, setlogin] = useState(false)
  const [avataurl, setavataurl] = useState("")
  const { toast } = useToast()

  useEffect(() => {
  const status = Cookies.get("loginstatus")
  if(status === "true"){
    setlogin(true)
    setavataurl(Cookies.get("urlava")!)
  }else
    setlogin(false)
  }, [])
  
  function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function validateEmail(email: string){
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  function validatePassword(password:string) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]).{6,}$/;
    return regex.test(password)
  }

  const handleOtpSubmit = (otpValue: string) => {
    handlekichhoatemail(otpValue,emailtemp)
  };
  
  const handlehienthipass = () => {
    if(checkhienthipass === "Hiện"){
      sethienthipass("text")
      setcheckhienthipass("Ẩn")
    }else{
      sethienthipass("password")
      setcheckhienthipass("Hiện")
    }
  }

  const handlexacthucemail = async () => {
    let emailinput = email.current!.value
    if(validateEmail(emailinput)){    
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth`,{emailinput},{headers: {"Content-Type": "application/json",},},)
      settinhnang("xacthuc")
      setemailtemp(emailinput)
    }else{
      alert("không đúng định dạng email vui lòng nhập lại")
    }
  }

  const handlekichhoatemail = async (OTP:string,email:string) => {
    const guimail = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/verify`,{OTP,email},
      {headers: {"Content-Type": "application/json",},},)
    if(guimail?.data?.message === "ok"){
      settinhnang("xacthucpassword")
      toast({
        variant: "default",
        title: "Xác thực thành công",
        description: "Bạn đã xác thực thành công email",
      })
    }else{
      console.log("conmeo")
      toast({
        variant: "destructive",
        title: "Lỗi mã xác thực",
        description: "Hãy kiểm tra lại email của bạn đôi khi trong hộp thư rác",
      })
    }
  }

  const handlexacnhanmatkhau = async () => {
    if(pass.current!.value === againpass.current!.value){
      if(validatePassword(pass.current!.value)){
        try {
          const passguidi = pass.current!.value
          await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/verifypassword`,{passguidi,emailtemp},
            {headers: {"Content-Type": "application/json",},},)
          toast({
            variant: "default",
            title: "Tạo tài khoản thành công",
            description: "Tài khoản của bạn đã tạo thành công!. \n bây giờ bạn có thể đăng nhập bằng tài khoản này",
          })
          settinhnang("dangnhap")
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Lỗi cục bộ",
            description: "Hãy thử liên hệ quản trị viên để xử lý",
          })
        }
        
      }else{
        toast({
          variant: "destructive",
          title: "Lỗi mật khẩu không đúng định dạng",
          description: "Mật khẩu phải có ít nhất 6 kí tự có số, một kí tự in hoa, một kí tự đặc biệt",
        })
      }
    }else{
      toast({
        variant: "destructive",
        title: "Lỗi mật khẩu không khớp",
        description: "Hãy kiểm tra lại mật khẩu của bạn có khớp hay không",
      })
    }
  }

  const handlelogin = async () => {
    const password = pass.current!.value;
    let emailinput = email.current!.value;
    try {
      const loginResponse = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, { password, emailinput },
        { headers: { "Content-Type": "application/json" }, });
      if (loginResponse.data.message) {
        Cookies.set("urlava",loginResponse.data.avata?.avatarurl)
        Cookies.set("loginstatus","true")
        Cookies.set("email",loginResponse.data?.avata?.email)
        Cookies.set("fullname",loginResponse.data?.avata?.fullName)
        Cookies.set("verified",loginResponse.data?.avata?.verified)
        console.log(loginResponse.data?.avata?.verified)
        setlogin(true)
        toast({
          variant: "default",
          title: "Đăng nhập thành công",
          description: "Chào mừng bạn đến với Fruitbook!",
        });
        await sleep(2000);
        window.location.reload()
      } else {
        toast({
          variant: "destructive",
          title: "Lỗi đăng nhập",
          description: "Hãy kiểm tra lại mật khẩu của bạn có khớp hay không",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Lỗi đăng nhập",
        description: "Đã xảy ra lỗi trong quá trình đăng nhập. Vui lòng thử lại sau.",
      });
    }
  };

  const handlesignout = () => {
    setlogin(false)
    Cookies.set("loginstatus","false")
    Cookies.remove("urlava")
    Cookies.remove("fullname")
    Cookies.remove("email")
    Cookies.remove("verified")
  }

  return (
  <Dialog>
    <div className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-200 bg-cyan-700 sm:bg-white/75">
        <div className="container mx-auto relative text-sm ">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div className="cursor-pointer flex h-20 w-20 items-center sm:flex-row flex-col">
              <img className="mr-2 h-16 w-32" src={logo.src} alt="logo" />
              <span className="tracking-tight font-bold text-xl bg-gradient-to-r sm:from-[#3494E6] sm:to-[#EC6EAD] from-[#F29492] to-[#FFC371] text-transparent bg-clip-text">FruitsBook</span>
            </div>
            {/* tìm kiếm */}
            <Searchbar label="Đắc Nhân Tâm, Mèo Đi Hia..."/>
            <div className="flex gap-2 sm:gap-5">
              {/* giỏ hàng */}
              <Icon icon={FaBagShopping} label="Giỏ Hàng" href="#" />

              {/* đăng nhập */}
              {login ? (      
                <DropdownMenu>
                  <DropdownMenuTrigger className='flex items-center justify-center md:block border-0 rounded-full h-6 mt-2 '>
                    {/* avata */}
                    <Avatar className='rounded-full bg-white border-0'>
                      <AvatarImage src={avataurl || ""} alt="@shadcn" />
                      <AvatarFallback>conmeo</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>User Setting</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <Link href={"/setting/profile"} >
                        <DropdownMenuItem className='cursor-pointer'>
                          <div className='flex items-center'>
                            <FaUserEdit className="mr-2 h-4 w-4" />
                            <span>Setting</span>
                          </div>
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem className='cursor-pointer' onClick={handlesignout}>
                        <LiaSignOutAltSolid  className="mr-2 h-4 w-4" />
                        <span>Sign out</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              ):(              
              <DialogTrigger>
                <div onClick={()=>{settinhnang("dangnhap")}}>
                  <Icon icon={FaRegCircleUser} label="Tài Khoản" href="#" />
                </div>
              </DialogTrigger>)}

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
                                        <input ref={email} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none" type="email" placeholder="abc@gmail.com" aria-label="Full name"/>
                                      </div>
                                      {/* mật khẩu */}
                                      <div className="flex items-center border-b border-teal-500  w-full p-1">
                                        <input ref={pass} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none" type={hienthipass} placeholder="Mật Khẩu" aria-label="Full name"/>
                                        <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 rounded" type="button" onClick={handlehienthipass}>{checkhienthipass}</button>
                                      </div>
                                  </div>
                                    <div className='flex justify-end gap-2 text-xs text-teal-500 mb-4'>
                                      <div className='flex flex-col justify-end items-end gap-2'>
                                        <u className='cursor-pointer sm:-ml-36'  onClick={handlesignout}>Quên mật khẩu?</u>
                                        <span className='cursor-pointer sm:-ml-36'>Chưa có tài khoản? <u onClick={()=>{settinhnang("taotaikhoan")}}>Tạo tài khoản!</u></span>
                                      </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*nút đăng nhập*/}
                          <div onClick={handlelogin}>
                            <Button className=' w-full' variant={'custommau'}>Đăng nhập</Button>
                          </div>
                          <div className='sm:mt-24 mt-2 flex flex-col gap-3'>
                            <div className=' flex items-center justify-center opacity-70'>
                              Hoặc tiếp tục bằng
                            </div>
                            {/* google hoặc facebook */}
                            <div className='flex items-center justify-center gap-10'>
                                <img src="https://img.icons8.com/?size=100&id=114441&format=png&color=000000" alt="" className='size-14 transition shadow-lg rounded-full ease-in-out hover:-translate-y-3 hover:scale-110 duration-300' />
                                <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" className='size-14 transition shadow-lg rounded-full ease-in-out hover:-translate-y-3 hover:scale-110 duration-300' />
                            </div>
                          </div>
                        </div>
                      ):
                      // tạo tài khoản
                      tinhnang === "taotaikhoan" ? (
                        // đăng kí
                        <div className='flex flex-col gap-3'>
                          <div className='cursor-pointer w-5' onClick={()=>{settinhnang("dangnhap")}}>
                            <IoMdArrowRoundBack size={30} />
                          </div>
                          <div className='flex flex-col gap-4'>
                            <div className='flex flex-col'>
                              <span className='text-lg font-medium'>Tạo tài khoản</span>
                              <span className='text-xs'>Nhập email của bạn vào</span>
                            </div>
                            {/* email input */}
                            <div className="flex items-center border-b border-teal-500 w-full p-1">
                              <input ref={email} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none" type="email" placeholder="abc@gmail.com" aria-label="Full name"/>
                            </div>
                            <div className='sm:mt-4 mt-1' onClick={handlexacthucemail}>
                              <Button className=' w-full' variant={'custommau'}>Tiếp tục</Button>
                            </div>
                            <div className='sm:mt-24 mt-2 flex flex-col gap-3'>
                              <div className=' flex items-center justify-center opacity-70'>
                                Hoặc đăng nhập bằng
                              </div>
                              {/* google hoặc facebook */}
                              <div className='flex items-center justify-center gap-10'>
                                  <img src="https://img.icons8.com/?size=100&id=114441&format=png&color=000000" alt="" className='size-14 transition shadow-lg rounded-full ease-in-out hover:-translate-y-3 hover:scale-110 duration-300' />
                                  <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" className='size-14 transition shadow-lg rounded-full ease-in-out hover:-translate-y-3 hover:scale-110 duration-300' />
                              </div>
                            </div>
                          </div>
                        </div>
                      ):

                      // tạo mật khẩu
                      tinhnang === "xacthuc" ?(
                        <div className='flex flex-col gap-3'>
                          <div className='cursor-pointer w-5' onClick={()=>{settinhnang("dangnhap")}}>
                            <IoMdArrowRoundBack size={30} />
                          </div>
                          <div className='flex flex-col gap-2 items-center justify-center'>
                            {/* email input */}
                            <div >
                              <InputOTPForm onOtpSubmit={handleOtpSubmit} otpDescription='Check thùng thư nhập mã xác nhận tại đây' otpLabel='Xác thực email' buttonlabel='Xác Thực'/>
                            </div>
                          </div>
                        </div>
                      ):tinhnang === "xacthucpassword" ?(                        
                        <div className='flex flex-col gap-5'>
                          <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-1'>
                              <div className='text-lg font-medium'>Tạo tai khoản,</div>
                              <div className='text-xs'>Nhập mật khẩu cho tài khoản của bạn</div>
                            </div>
                            {/* dang nhap */}
                            <div className='flex gap-1'>
                              <div className='w-full'>
                                <div className='flex flex-col gap-4'>
                                  <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col items-start gap-5'>
                                      <div className="flex items-center border-b border-teal-500  w-full p-1">
                                        {/* email */}
                                        <input disabled value={emailtemp} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none" type="email" placeholder="abc@gmail.com" aria-label="Full name"/>
                                      </div>
                                      {/* mật khẩu */}
                                      <div className='w-full'>
                                        <div className="flex items-center border-b border-teal-500  w-full p-1">
                                          <input ref={pass} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none" type={hienthipass} placeholder="Mật Khẩu" aria-label="Full name"/>
                                        </div>
                                        <div><span className='text-xs opacity-55'>Lưu ý: Mật khẩu ít nhất 6 kí tự có số, một kí tự in hoa, một kí tự đặc biệt</span></div>
                                      </div>
                                      
                                      {/* nhap lai mat khau */}
                                      <div className="flex items-center border-b border-teal-500  w-full p-1">
                                        <input ref={againpass} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none" type={hienthipass} placeholder="Nhập lại mật khẩu" aria-label="Full name"/>
                                      </div>
                                    </div>
                                      <div className='flex items-end justify-end'>
                                        <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 rounded" type="button" onClick={handlehienthipass}>{checkhienthipass}</button>
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*nút đăng nhập*/}
                          <div onClick={handlexacnhanmatkhau}>
                            <Button className='w-full' variant={'custommau'}>Tạo tài khoản</Button>
                          </div>
                        </div>
                      ):(<div>meomeo</div>)}
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