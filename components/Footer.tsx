"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-[#999999] flex flex-col gap-4 items-center justify-center border-t-8 border-[#ff9564] w-screen h-40"
    >
      <div className="flex items-center justify-center w-auto h-20 rounded-full bg-white/20 backdrop-blur morphism">
        <div className="m-2 w-16">
          <Link href="https://x.com/pughopiuminu">
            <Player src="/twitter.json" loop autoplay />
          </Link>
        </div>
        <div className="w-[90px]">
          <Link href="https://t.me/officialPugo">
            <Player src="/telegram.json" loop autoplay />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center text-[#93563a]">
        <p>&copy; PugHopiumInu. 2024 All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
