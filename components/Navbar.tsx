"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import MobileNav from "./MobileNav";

const Navbar = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="flex fixed top-5 left-[5%] items-center justify-center h-14 w-[90%] morphism">
      <div className="flex items-end w-full justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Rektum"
            width={36}
            height={36}
            className="mx-4"
          />
        </Link>
        <h1 className="text-3xl text-white font-bold">Wagmi</h1>
        <div className="max-sm:hidden flex items-center justify-between">
          <Link href="/" className="flex items-center justify-start p4 gap-4">
            {/*<Image src="/home.svg" alt="" width={20} height={20} />*/}
            <p className="text-white mx-12 text-lg font-bold">Home</p>
          </Link>
          <Link
            href="#about"
            className="flex items-center justify-start p4 gap-4"
          >
            {/*<Image src="/job.svg" alt="" width={20} height={20} />*/}
            <p className="text-white mx-12 text-lg font-bold">About</p>
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-start p4 gap-4"
          >
            {/*<Image src="/user.svg" alt="" width={20} height={20} />*/}
            <p className="text-white mx-12 text-lg font-bold">Contact</p>
          </Link>
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
