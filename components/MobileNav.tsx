"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import Scroll from "@/components/Scroll";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/hamburger.svg"
          alt="Menu"
          width={36}
          height={36}
          className="mx-4 sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-none">
        <Link href="/" className="flex items-start justify-center ml-4">
          <Image src="/background/b1.png" alt="Lemon Head" width={36} height={36} />
          <p className="text-[#796100] text-3xl p-3 font-bold">LEMONHEAD</p>
        </Link>
        <SheetClose asChild>
          <section className="flex h-full flex-col gap-6 pt-16 items-start">
            <SheetClose className="border-none">
              <div
                className="flex items-center justify-start p-4 gap-4"
              >
                <Image
                  src="/home.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <button onClick={() => Scroll("home")} className="text-[#796100] font-bold text-xl">Home</button>
              </div>
            </SheetClose>
            <SheetClose className="border-none">
              <div
                className="flex items-center justify-start p-4 gap-4"
              >
                <Image
                  src="/job.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <button onClick={() => Scroll("about")} className="text-[#796100] font-bold text-xl">Tokenomics</button>
              </div>
            </SheetClose>
            <SheetClose className="border-none">
              <div
                className="flex items-center justify-start p-4 gap-4"
              >
                <Image
                  src="/user.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <button onClick={() => Scroll("roadmap")} className="text-[#796100] font-bold text-xl">Roadmap</button>
              </div>
            </SheetClose>
            <SheetClose className="border-none">
              <div
                  className="flex items-center justify-start p-4 gap-4"
              >
                <Image
                    src="/home.svg"
                    alt=""
                    width={20}
                    height={20}
                />
                <button onClick={() => Scroll("whitepaper")} className="text-[#796100] font-bold text-xl">Whitwpaper</button>
              </div>
            </SheetClose>
          </section>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
