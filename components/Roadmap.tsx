"use client";
import Image from "next/image";
import Link from "next/link";

const Roadmap = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-start w-screen min-h-screen h-auto">
      <div
        id="about"
        className="flex flex-col items-center gap-6 justify-center"
      >
        <h1 className="text-[#142030] font-autour font-bold mt-28 text-4xl min-[440px]:text-[42px] sm:text-7xl md:text-8xl">
          TOKENOMICS
        </h1>
        <div className="flex max-sm:flex-col gap-3">
          <div className="bg-white/20 glass-shadow mt-8 p-4 rounded-lg w-auto">
            <p className="max-sm:text-lg text-xl font-bold text-[#93563a]">
              Name: PugHopiumInu <br />
              Symbol: $PUGO <br />
              Total Supply: 100,000,000 <br />
              Burned: 45M <br />
              Initial LP: 50M <br />
              Partnerships: 5M <br /> <br />
              Max TX 1% <br />
              Max wallet 3% <br /> <br />
              Chain: BSC
            </p>
          </div>
          <Image
            src="/background/b1.png"
            alt="PugHopiumInu"
            width={300}
            height={300}
          />
        </div>
        <h1 className="text-[#142030] text-3xl md:text-5xl mt-8 font-bold">
          Tax and Others
        </h1>
        <div className="flex max-sm:flex-col gap-4">
          <div className="bg-white/20 glass-shadow mt-8 p-4 rounded-lg w-auto">
            <p className="max-sm:text-lg text-xl font-bold text-[#93563a]">
              Buy: 0% <br />
              Marketing: 0% <br />
              Liquidity: 0%
            </p>
          </div>
          <div className="bg-white/20 glass-shadow mt-8 p-4 rounded-lg w-auto">
            <p className="max-sm:text-lg text-xl font-bold text-[#93563a]">
              Sell: 10% <br />
              Marketing: 1% <br />
              Liquidity: 9%
            </p>
          </div>
        </div>
      </div>
      {/* <div
        id="roadmap"
        className="flex flex-col gap-6 items-center justify-start"
      >
        <h1 className="text-[#ff9564] font-autour font-bold mt-28 text-5xl min-[440px]:text-7xl sm:text-8xl">
          ROADMAP
        </h1>
        <Image
          src="/roadmap.svg"
          alt="Roadmap"
          width={1350}
          height={200}
          className="max-lg:hidden mb-8"
        />
        <Image
          src="/roadmap_tab.svg"
          alt="Roadmap"
          width={600}
          height={200}
          className="max-sm:hidden lg:hidden mb-8"
        />
        <Image
          src="/roadmap_mobile.svg"
          alt="Roadmap"
          width={300}
          height={200}
          className="sm:hidden mb-8"
        />
      </div> */}
      <h1 className="text-[#93563a] text-lg md:text-xl lg:text-2xl">
        Have you seen our whitepaper?
      </h1>
      <div
        id="whitepaper"
        className="bg-white/20 rounded-lg glass-shadow w-3/4 max-w-[300px] h-14 mb-8 flex items-center justify-center"
      >
        <Link href="https://docs-67.gitbook.io/pughopiuminu/">
          <p className="text-[#93563a]">Take a Look</p>
        </Link>
      </div>
    </div>
  );
};

export default Roadmap;
