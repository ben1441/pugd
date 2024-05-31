"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import MobileNav from "./MobileNav";
import Scroll from "@/components/Scroll";

const Navbar = () => {
  return (
    <div className="flex fixed top-5 left-[5%] items-center justify-center h-14 w-[90%] bg-white/20 backdrop-blur morphism">
      <div className="flex items-end w-full justify-between">
        <Link href="/">
          <Image
            src="/background/b1.png"
            alt="PugHopiumInu"
            width={36}
            height={36}
            className="mx-4"
          />
        </Link>
        <h1 className="text-2xl text-[#e28357] font-bold">PugHopiumInu</h1>
        <div className="max-sm:hidden flex items-center justify-between">
          <button
            onClick={() => Scroll("home")}
            className="text-[#e28357] max-md:mx-6 mx-8 lg:mx-10 text-lg font-bold"
          >
            Home
          </button>
          <button
            onClick={() => Scroll("about")}
            className="text-[#e28357] max-md:mx-6 mx-8 lg:mx-10 text-lg font-bold"
          >
            Tokemonics
          </button>
          <button
            onClick={() => Scroll("roadmap")}
            className="text-[#e28357] max-md:mx-6 mx-8 lg:mx-10 text-lg font-bold"
          >
            Roadmap
          </button>
        </div>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
