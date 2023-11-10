import Image from "next/image";
import Link from "next/link";
import Roadmap from "@/components/Roadmap";

export default function Home() {
  return <div>
    <div className="flex bg-[#9A6AEC] items-center justify-between h-screen w-screen">
      <div className="absolute soft-circle w-[400px] md:w-[600px] h-[400px] md:h-[600px] -top-[150px] md:-top-[240px] lg:-top-[233px] -left-[150px] min-[480px]:-left-[100px] md:-left-[180px] lg:-left-[163px]"></div>
      {/*<div className="absolute soft-circle w-[300px] h-[300px] bottom-0 -right-[10%]"></div>*/}
      {/*<div className="flex flex-col items-center justify-center mt-20 w-auto h-auto">*/}
      {/*  <Image src="/balloon.svg" alt="balloon" width={200} height={200} className="relative left-6" />*/}
      {/*  <Image src="/balloon.svg" alt="balloon" width={200} height={200} className="relative left-5" />*/}
      {/*  <Image src="/balloon.svg" alt="balloon" width={200} height={200} className="relative left-7" />*/}
      {/*</div>*/}
      <div className="flex flex-col items-start justify-center ml-6 min-[480px]:ml-10 sm:ml-32 lg:ml-40 gap-6">
        <h1 className="wagmi-gradient mt-20 font-bold min-[320px]:text-[80px] sm:text-[100px]">Wagmi</h1>
        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elitt</p>
        <div className="flex max-sm:flex-col gap-8">
          <Link href="#more">
            <button className="text-white font-bold btn-gradient-purple w-32 h-10">Get Started</button>
          </Link>
          <Link href="#getStarted">
            <button className="text-white font-bold btn-gradient-light w-32 h-10">Learn More</button>
            <Image src="/wagmi-hero.png" alt="Wagmi" width={500} height={200} className="max-md:mt-8 lg:absolute lg:bottom-0 lg:right-0" />
          </Link>
        </div>
      </div>
    </div>
    <Roadmap />
  </div>;
}
