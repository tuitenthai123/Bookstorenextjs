"use client"
import * as React from "react"
import Header from "./_components/header"
import Carouselbook from "./_components/carouselbook"
import Portfolio from "./_components/portfolio"
import Trendingshop from "./_components/trendingshop"
import Topsellerweek from "./_components/topsellerweek"

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header/>
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
