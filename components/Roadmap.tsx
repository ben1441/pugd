import Image from "next/image";

const Roadmap = () => {
    return (
        <div className="flex flex-col gap-6 bg-[#5A47AC] items-center justify-start w-screen min-h-screen h-auto">
            <div id="about" className="flex flex-col items-center gap-6 justify-center">
                <h1 className="text-white font-autour font-bold mt-28 text-4xl min-[400px]:text-[42px] sm:text-7xl md:text-8xl">TOKENOMICS</h1>
                <div className="flex max-sm:flex-col">
                    <div className="bg-white/20 glass-shadow mt-8 p-4 rounded-lg w-auto">
                        <p className="max-sm:text-lg text-xl font-bold text-white">Name: WAGMI <br/>
                            Symbol: $WAGMI <br/>
                            Total Supply: 100,000,000,000 <br/>
                            Chain: ETH (ERC)
                        </p>
                    </div>
                    <Image src="/logo.png" alt="Wagmi" width={300} height={300} />
                </div>
                <h1 className="text-white text-3xl mt-8">Tax and Others</h1>
                <div className="flex max-sm:flex-col gap-4">
                    <div className="bg-white/20 glass-shadow mt-8 p-4 rounded-lg w-auto">
                        <p className="max-sm:text-lg text-xl font-bold text-white">
                            Buy: 3% <br/>
                            Marketing: 2% <br/>
                            Liquidity: Automatic
                        </p>
                    </div>
                    <div className="bg-white/20 glass-shadow mt-8 p-4 rounded-lg w-auto">
                        <p className="max-sm:text-lg text-xl font-bold text-white">
                            Sell: 3% <br/>
                            Marketing: 2% <br/>
                            Liquidity: Automatic
                        </p>
                    </div>
                </div>
            </div>
            <div id="roadmap" className="flex flex-col gap-6 items-center justify-start">
                <h1 className="text-white font-autour font-bold mt-28 text-5xl min-[400px]:text-7xl sm:text-8xl">ROADMAP</h1>
                <Image src="/roadmap.svg" alt="Roadmap" width={1350} height={200} className="max-lg:hidden mb-8" />
                <Image src="/roadmap_tab.svg" alt="Roadmap" width={600} height={200} className="max-sm:hidden lg:hidden mb-8" />
                <Image src="/roadmap_mobile.svg" alt="Roadmap" width={300} height={200} className="sm:hidden mb-8" />
            </div>
        </div>
    )
}

export default Roadmap;