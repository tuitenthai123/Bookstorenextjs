"use client"
import * as React from "react"
import { useRouter } from 'next/navigation'
import Header from "./_components/header"
import Carouselbook from "./_components/carouselbook"
import Portfolio from "./_components/portfolio"
import Trendingshop from "./_components/trendingshop"
import Topsellerweek from "./_components/topsellerweek"
import { AuthProvider } from "@/context/AuthContext"

export default function Home() {
  const router = useRouter()
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
