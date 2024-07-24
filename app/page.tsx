"use client"
import * as React from "react"
import Header from "./_components/header"
import Carouselbook from "./_components/carouselbook"
import Product from "./_components/product"

export default function Home() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Header/>
      </div>
      <div>
        <Carouselbook/>
      </div>
      <div className="-mt-2">
        <Product/>
      </div>
    </div>
  )
}
