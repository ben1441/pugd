import Image from "next/image";

const Roadmap = () => {
    return (
        <div className="flex flex-col gap-6 bg-gradient-new items-center justify-start w-screen min-h-screen h-auto">
            <div id="about" className="flex flex-col items-center gap-6 justify-center">
                <h1 className="text-gradient font-autour font-bold mt-28 text-4xl min-[400px]:text-[42px] sm:text-7xl md:text-8xl">ABOUT</h1>
                <p className="p-4 max-sm:text-gradient-mobile text-gradient md:text-lg max-w-5xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Proin fermentum leo vel orci porta non pulvinar.</p>
                <h1 className="text-gradient font-autour font-bold mt-28 text-4xl min-[400px]:text-[42px] sm:text-7xl md:text-8xl">TOKENOMICS</h1>
                <div className="flex max-sm:flex-col">
                    <div className="bg-white/20 glass-shadow mt-8 p-4 rounded-lg w-auto">
                        <p className="max-sm:text-lg text-xl font-bold tokenomics">Name: WAGMI <br/>
                            Symbol: $WAGMI <br/>
                            Total Supply: 100,000,000,000
                        </p>
                    </div>
                    <Image src="/logo.png" alt="Wagmi" width={300} height={300} />
                </div>
            </div>
            <div id="roadmap" className="flex flex-col gap-6 items-center justify-start">
                <h1 className="text-gradient font-autour font-bold mt-28 text-5xl min-[400px]:text-7xl sm:text-8xl">ROADMAP</h1>
                <Image src="/roadmap.svg" alt="Roadmap" width={1350} height={200} className="max-lg:hidden mb-8" />
                <Image src="/roadmap_tab.svg" alt="Roadmap" width={600} height={200} className="max-sm:hidden lg:hidden mb-8" />
                <Image src="/roadmap_mobile.svg" alt="Roadmap" width={300} height={200} className="sm:hidden mb-8" />
            </div>
        </div>
    )
}

export default Roadmap;