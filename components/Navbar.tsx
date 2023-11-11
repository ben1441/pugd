"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import MobileNav from "./MobileNav";
import Scroll from "@/components/Scroll";

const Navbar = () => {
  return (
    <div className="flex fixed top-5 left-[5%] items-center justify-center h-14 w-[90%] bg-white/20 backdrop-blur morphism">
      <div className="flex items-end w-full justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Wagmi"
            width={36}
            height={36}
            className="mx-4"
          />
        </Link>
        <h1 className="text-3xl text-white font-bold">Wagmi</h1>
        <div className="max-sm:hidden flex items-center justify-between">
            {/*<Image src="/home.svg" alt="" width={20} height={20} />*/}
          <button onClick={() => Scroll("home")} className="text-white mx-12 text-lg font-bold">Home</button>
          <button onClick={() => Scroll("about")} className="text-white mx-12 text-lg font-bold">About</button>
          <button onClick={() => Scroll("roadmap")} className="text-white mx-12 text-lg font-bold">Roadmap</button>
        </div>
        <MobileNav />
      </div>
      {/*<div className="relative">*/}
      {/*  <div className="bg-white -z-10 h-32 w-32 rounded-full"></div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Navbar;
