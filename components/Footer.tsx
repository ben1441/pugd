"use client"

import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link"
const Footer = () => {
    return (
        <div id="footer" className="bg-gradient-new flex flex-col gap-4 items-center justify-center border-t-4 border-purple-800 w-screen h-40">
            <div className="flex items-center justify-center w-auto h-20 rounded-full bg-white/20 backdrop-blur morphism">
                <div className="m-2 w-20">
                    <Player src="/instagram.json" loop autoplay />
                </div>
                <div className="m-2 w-16">
                    <Link href="https://X.com/Nemukaeth">
                        <Player src="/facebook.json" loop autoplay />
                    </Link>
                </div>
                <div className="w-[90px]">
                    <Link href="https://t.me/Nemukaportal">
                        <Player src="/telegram.json" loop autoplay />
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center text-white">
                <p>2023 &copy; All right reserved | Wagmi Inc.</p>
            </div>
        </div>
    )
}

export default Footer;