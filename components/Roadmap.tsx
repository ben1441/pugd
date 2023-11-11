import Image from "next/image";

const Roadmap = () => {
    return (
        <div id="roadmap" className="flex flex-col gap-6 bg-gradient-new items-center justify-start w-screen min-h-screen h-auto">
            <h1 className="text-gradient font-autour font-bold mt-28 text-5xl min-[360px]:text-7xl sm:text-8xl">ROADMAP</h1>
            <Image src="/roadmap.svg" alt="Roadmap" width={1350} height={200} className="max-lg:hidden mb-8" />
            <Image src="/roadmap_tab.svg" alt="Roadmap" width={600} height={200} className="max-sm:hidden lg:hidden mb-8" />
            <Image src="/roadmap_mobile.svg" alt="Roadmap" width={300} height={200} className="sm:hidden mb-8" />
        </div>
    )
}

export default Roadmap;