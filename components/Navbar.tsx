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
    <div className="flex fixed top-0 left-0 items-center justify-center h-16 w-full bg-lime-100">
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
        <h1 className="text-3xl text-red-400 font-bold">Rektum</h1>
        <div className="max-sm:hidden md:flex items-center justify-between">
          <Link href="/" className="flex items-center justify-start p4 gap-4">
            <Image src="/home.svg" alt="" width={20} height={20} />
            <p className="text-red-400 mx-12 text-lg font-bold">Home</p>
          </Link>
          <Link
            href="#about"
            className="flex items-center justify-start p4 gap-4"
          >
            <Image src="/job.svg" alt="" width={20} height={20} />
            <p className="text-red-400 mx-12 text-lg font-bold">About</p>
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-start p4 gap-4"
          >
            <Image src="/user.svg" alt="" width={20} height={20} />
            <p className="text-red-400 mx-12 text-lg font-bold">Contact</p>
          </Link>
        </div>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
