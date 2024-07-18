"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Header from "./_components/header"
import { Card, CardContent } from "@/components/ui/card"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
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
    <div>
      <div>
        <Header/>
      </div>
      <div className="flex justify-center items-center w-full pt-5">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg border"
        >
          <ResizablePanel defaultSize={60}>
            <div className="flex h-auto items-center justify-center p-6">
            <Carousel
              plugins={[plugin.current]}
              className=""
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
            <CarouselContent >
              {Slideritem.map(({index,url}) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={url} className="w-5/6"></img>
                        {/* {index} */}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={40}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}
