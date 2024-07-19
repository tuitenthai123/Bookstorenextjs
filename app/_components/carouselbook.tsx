"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Carouselbook = () => {
    const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
    )
    const Slideritem = [
    {index:1,url:"https://cdn0.fahasa.com/media/magentothem/banner7/BoargameT7_Slidebanner_840x320.jpg"},
    {index:2,url:"https://cdn0.fahasa.com/media/magentothem/banner7/TrangDoChoiThang7_Resize_SlideBanner_T7_840x320.jpg"},
    {index:3,url:"https://cdn0.fahasa.com/media/magentothem/banner7/BaloMiti_Slidebanner_840x320.png"},
    {index:4,url:"https://cdn0.fahasa.com/media/magentothem/banner7/NCCVinhThinh_T07_Slide_840x320.jpg"},
    {index:5,url:"https://cdn0.fahasa.com/media/magentothem/banner7/NCCPlus_T07_Slide_840x320_1.jpg"},
    {index:6,url:"https://cdn0.fahasa.com/media/magentothem/banner7/Backtoschool_0724_LDP_840x320.png"},
    ]
  return (
    <div className="flex justify-between h-auto px-11 mt-3 ">
    <div className="sm:w-2/3 w-full flex justify-center items-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full flex justify-center items-center"
      >
        <CarouselContent>
          {Slideritem.map(({index,url}) => (
              <CarouselItem key={index}>
                <div className="p-1 flex justify-center">
                      <img src={url} className="sm:w-[950px] w-full rounded-2xl"></img>
                      {/* {index} */}
                </div>
              </CarouselItem>
          ))}
          
        </CarouselContent>
        
      </Carousel>
    </div>
    <div className="w-1/3 flex-col hidden md:block">
      {/* banner tinh 1 */}
      <div className="h-1/2 flex items-center justify-center  ">
        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/dodo_pizza392x156.jpg" alt="" className="w-[450px] rounded-xl" />
      </div>
      {/* banner tinh 2 */}
      <div className="h-1/2 flex items-center justify-center  ">
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/Trangthanhtoankhongtienmat_0724_Subbanner_392x156.png" className="w-[450px] rounded-xl" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Carouselbook