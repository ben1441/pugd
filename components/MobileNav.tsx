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
      <SheetContent side="left" className="bg-gradient border-none">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo.png" alt="Wagmi" width={36} height={36} />
          <p className="text-white text-4xl p-4 font-bold">Wagmi</p>
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
                <button onClick={() => Scroll("home")} className="text-white font-bold text-xl">Home</button>
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
                <button onClick={() => Scroll("about")} className="text-white font-bold text-xl">About</button>
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
                <button onClick={() => Scroll("roadmap")} className="text-white font-bold text-xl">Roadmap</button>
              </div>
            </SheetClose>
          </section>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
