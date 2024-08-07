"use client"
import * as React from "react"
import Header from "./_components/header"
import Carouselbook from "./_components/carouselbook"
import Portfolio from "./_components/portfolio"
import Trendingshop from "./_components/trendingshop"
import Topsellerweek from "./_components/topsellerweek"
import { AuthProvider } from "@/context/AuthContext"

export default function Home() {
  const [loading, setloading] = React.useState(true)

  function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  React.useEffect(() => {
    setloading(true)    
    sleep(500)
    setloading(false)
  }, [])
  
  if(loading)
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


  return (
    <div>
      <div className="sticky top-0 z-50">
        <AuthProvider>
          <Header/>
        </AuthProvider>
      </div>
      <div>
        <Carouselbook/>
      </div>
      <div className="mt-2 hidden md:block">
        <Portfolio/>
      </div>
      <div>
        <Trendingshop/>
      </div>
      <div>
        <Topsellerweek/>
      </div>
    </div>
  )
}
