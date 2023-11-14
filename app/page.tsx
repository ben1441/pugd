"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  const Loading = () => {
      return (
          <div className="flex bg-yellow-400 items-center justify-center w-screen h-screen">
              <h1 className="text-[#796100] text-3xl font-bold animate-ping">LEMONHEAD</h1>
          </div>
      )
  }

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    }, 1200)
  }, [])

  return (
      <div>
          {isLoading && <Loading />}
          {!isLoading && (
              <div>
                  <div id="home" className="flex bg-yellow-400 items-center scroll-smooth justify-between h-auto w-screen">
                      <div className="flex flex-col mt-28 items-start justify-center gap-6">
                          <div className="flex items-center w-screen justify-between">
                              <div className="flex flex-col items-start gap-6 justify-between">
                                  <h1 className="text-[#796100] font-bold ml-6 min-[480px]:ml-10 lg:ml-40 max-[500px]:text-[45px] md:text-5xl text-7xl">LEMONHEAD</h1>
                                  <p className="text-[#796100] font-autour lg:max-w-5xl ml-6 min-[480px]:ml-10 lg:ml-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Proin fermentum leo vel orci porta non pulvinar.</p>
                                  <div className="flex max-sm:flex-col max-sm:gap-8 items-start justify-end md:justify-between max-md:w-screen">
                                      <div className="flex max-md:flex-col max-sm:w-3/4 max-sm:items-center max-sm:justify-center max-sm:gap-6 ml-10 md:ml-28 lg:ml-40 gap-8">
                                          <button className="text-[#796100] font-bold btn-gradient-dark max-sm:w-full w-40 h-12">Chart</button>
                                          <button className="text-[#796100] font-bold btn-gradient-light max-sm:w-full w-40 h-12">Buy</button>
                                      </div>
                                      <Image src="/background/b1.png" alt="LemonHead" width={400} height={200} className="md:hidden" />
                                  </div>
                              </div>
                              <Image src="/background/b1.png" alt="LemonHead" width={300} height={200} className="max-md:hidden lg:hidden" />
                              <Image src="/background/b1.png" alt="LemonHead" width={500} height={200} className="max-lg:hidden" />
                          </div>
                          <div className="w-screen h-2 -mt-6 bg-green-700"></div>
                      </div>
                  </div>
                  <Roadmap />
                  <Footer />
              </div>
          )}
      </div>
  )
}
