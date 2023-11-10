import Image from "next/image";

const Roadmap = () => {
    return (
        <div className="flex flex-col gap-6 bg-gradient items-center justify-start w-screen min-h-screen h-auto">
            <h1 className="wagmi-gradient mt-28 font-bold text-6xl min-[360px]:text-7xl sm:text-8xl">Roadmap</h1>
            <Image src="/roadmap.svg" alt="Roadmap" width={1350} height={200} className="max-lg:hidden" />
            <Image src="/roadmap_tab.svg" alt="Roadmap" width={600} height={200} className="max-sm:hidden lg:hidden" />
            <Image src="/roadmap_mobile.svg" alt="Roadmap" width={300} height={200} className="sm:hidden" />
        </div>
    )
}

export default Roadmap;