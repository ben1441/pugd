"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const Loading = () => {
    return (
      <div className="flex bg-[#999999] items-center justify-center w-screen h-screen">
        <h1 className="text-[#796100] text-3xl font-bold animate-ping">
          PugHopiumInu
        </h1>
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <div
            id="home"
            className="flex bg-[#999999] items-center scroll-smooth justify-between h-auto w-screen"
          >
            <div className="flex flex-col mt-28 items-start justify-center gap-6">
              <div className="flex items-center w-screen justify-between">
                <div className="flex flex-col items-start gap-6 justify-between">
                  <h1 className="text-[#ff9564] font-bold ml-6 min-[480px]:ml-10 lg:ml-40 max-[500px]:text-[45px] md:text-5xl text-7xl">
                    PugHopiumInu
                  </h1>
                  <p className="text-[#f7a97c] font-autour lg:max-w-5xl ml-6 min-[480px]:ml-10 lg:ml-40">
                    In a whimsical world where digital currencies and adorable
                    pugs collide, <br /> "PugHopium" takes center stage as the
                    token with an extraordinary twist. The story unfolds in a
                    town known as Pugsville, where the local pug-loving
                    community finds themselves in the midst of an economic
                    transformation.
                  </p>
                  <div className="flex max-sm:flex-col max-sm:gap-8 items-start justify-end md:justify-between max-md:w-screen">
                    <div className="flex max-md:flex-col max-sm:w-3/4 max-sm:items-center max-sm:justify-center max-sm:gap-6 ml-10 md:ml-28 lg:ml-40 gap-8">
                      <button className="text-[#925a0b] font-bold btn-gradient-dark max-sm:w-full w-40 h-12">
                        Chart
                      </button>
                      <button className="text-[#925a0b] font-bold btn-gradient-light max-sm:w-full w-40 h-12">
                        Buy
                      </button>
                    </div>
                    <Image
                      src="/background/b1.png"
                      alt="PugHopiumInu"
                      width={400}
                      height={200}
                      className="md:hidden"
                    />
                  </div>
                </div>
                <Image
                  src="/background/b1.png"
                  alt="PugHopiumInu"
                  width={300}
                  height={200}
                  className="hidden md:block lg:hidden"
                />
                <Image
                  src="/background/b1.png"
                  alt="PugHopiumInu"
                  width={500}
                  height={200}
                  className="hidden lg:block"
                />
              </div>
              <div className="w-screen h-2 -mt-6 bg-[#ff9564]"></div>
            </div>
          </div>
          <Roadmap />
          <Footer />
        </div>
      )}
    </div>
  );
}
