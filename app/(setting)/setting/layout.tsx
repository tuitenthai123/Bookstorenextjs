"use client"
import React,{useState,useEffect, Suspense} from "react";
import HeaderSetting from "./_component/HeaderSetting";
import SidebarSetting from "./_component/SidebarSetting";
import Profileuser from "./_component/profileuser";
import Loading from "./_component/loading";
import { redirect } from "next/navigation";
import Cookies from 'js-cookie';
const SettingLayout = ({
    children
  }: {
    children: React.ReactNode
  }) => {
    function sleep(ms:number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    const [loading, setloading] = useState(true)
    useEffect(() => {
      sleep(400)
      setloading(false)
    }, [])
    
    if(loading){
      return(
        <div className="flex items-center justify-center min-h-screen">
        <div aria-label="Loading..." role="status" className="flex items-center space-x-2 ">
          <svg className="h-20 w-20 animate-spin stroke-cyan-600" viewBox="0 0 256 256">
              <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="24"></line>
              <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="24"></line>
              <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
              <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="24"></line>
              <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
              <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
              </line>
          </svg>
          <span className="text-4xl font-medium text-cyan-600">Now Loading...</span>
        </div>
      </div>
    )       
    }
    if(Cookies.get("loginstatus") === "false" || !Cookies.get()){
      return redirect("/");
    }
    return ( 
      <div className="flex flex-col">
        <div className="flex justify-start items-center border-b-2 border-gray-200/40 p-3">
            <HeaderSetting/>
        </div>
        <div className="p-3 mt-2"><Profileuser/></div>
        <div className="flex">
          <div className="sm:w-1/5 w-1/3 ">
            <SidebarSetting/>
          </div>
          <div className="sm:w-4/5 w-2/3 flex border p-1.5">
          <Suspense fallback={<Loading/>} >
            {children}
          </Suspense>
          </div>

        </div>
      </div>
     );
  }
   
  export default SettingLayout;