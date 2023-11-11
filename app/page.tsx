"use client"

import Image from "next/image";
import Link from "next/link";
import Roadmap from "@/components/Roadmap";
import Scroll from "@/components/Scroll";
import Footer from "@/components/Footer";

export default function Home() {

  return <div>
    <div id="home" className="flex bg-gradient-new items-center scroll-smooth justify-between h-auto w-screen">
      <div className="absolute soft-circle w-[400px] md:w-[600px] h-[400px] md:h-[600px] -top-[150px] md:-top-[240px] lg:-top-[233px] -left-[150px] min-[480px]:-left-[100px] md:-left-[180px] lg:-left-[163px]"></div>
      {/*<div className="absolute soft-circle w-[300px] h-[300px] bottom-0 -right-[10%]"></div>*/}
      {/*<div className="flex flex-col items-center justify-center mt-20 w-auto h-auto">*/}
      {/*  <Image src="/balloon.svg" alt="balloon" width={200} height={200} className="relative left-6" />*/}
      {/*  <Image src="/balloon.svg" alt="balloon" width={200} height={200} className="relative left-5" />*/}
      {/*  <Image src="/balloon.svg" alt="balloon" width={200} height={200} className="relative left-7" />*/}
      {/*</div>*/}
      <div className="flex flex-col mt-28 items-start justify-center gap-6">
        <div className="flex items-center w-screen justify-between">
          <div className="flex flex-col items-start gap-6 justify-between">
            <h1 className="text-gradient font-autour font-bold ml-6 min-[480px]:ml-10 sm:ml-32 lg:ml-40 max-[400px]:text-[70px] text-[100px]">WAGMI</h1>
            <p className="max-sm:text-gradient-mobile text-gradient font-autour ml-6 min-[480px]:ml-10 sm:ml-32 lg:ml-40">Lorem ipsum dolor sit amet, consectetur adipiscing elitt</p>
            <div className="flex max-sm:flex-col max-sm:gap-8 items-start justify-end md:justify-between max-md:w-screen">
              <div className="flex max-sm:gap-6 ml-8 md:ml-32 lg:ml-40 gap-8">
                <button className="text-white font-bold btn-gradient-dark w-32 h-10">Chart</button>
                <button className="text-white font-bold btn-gradient-light w-32 h-10">Buy</button>
              </div>
              <Image src="/wagmi-hero.png" alt="Wagmi" width={500} height={200} className="md:hidden" />
            </div>
          </div>
          <Image src="/wagmi-hero.png" alt="Wagmi" width={600} height={200} className="max-md:hidden" />
        </div>
        <div className="w-screen h-1 -mt-6 bg-purple-800"></div>
      </div>
    </div>
    <Roadmap />
    <Footer />
  </div>;
}
