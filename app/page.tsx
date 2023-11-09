import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <div className="flex bg-[#9A6AEC] items-center justify-between h-screen w-screen">
    {/*<div className="flex flex-col items-center justify-center mt-20 w-auto h-auto">*/}
    {/*  <Image src="/balloon.svg" alt="balloon" width={200} height={200} className="relative left-6" />*/}
    {/*  <Image src="/balloon.svg" alt="balloon" width={200} height={200} className="relative left-5" />*/}
    {/*  <Image src="/balloon.svg" alt="balloon" width={200} height={200} className="relative left-7" />*/}
    {/*</div>*/}
    <div className="flex flex-col items-start justify-center ml-10 sm:ml-32 lg:ml-40 gap-6">
      <h1 className="wagmi-gradient font-bold min-[320px]:text-[80px] sm:text-[100px]">Wagmi</h1>
      <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elitt</p>
      <div className="flex max-sm:flex-col gap-8">
        <Link href="#more">
          <button className="text-white font-bold btn-gradient-purple w-32 h-10">Get Started</button>
        </Link>
        <Link href="#getStarted">
          <button className="text-white font-bold btn-gradient-light w-32 h-10">Learn More</button>
        </Link>
      </div>
    </div>

    {/*<Image src="/wagmi-bg.png" alt="wagmi" width={600} height={0} />*/}
    <div className="relative -top-[40%] md:-left-[] lg:-left-[55%] soft-circle w-[400px] lg:w-[581px] h-[400px] lg:h-[609px] flex-shrink-0"></div>
    <div className="relative soft-circle w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] flex-shrink-0"></div>
    {/*<Image src="/wagmi-pose.png" alt="wagmi" width={200} height={200} className="fixed z-behind bottom-0 right-0" />*/}
  </div>;
}
