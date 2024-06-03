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
        <Link className="m-2 w-16" href="https://x.com/pughopiuminu">
          <div>
            <Player src="/twitter.json" loop autoplay />
          </div>
        </Link>
        <Link className="w-[90px]" href="https://t.me/PugOnHopium">
          <div>
            <Player src="/telegram.json" loop autoplay />
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center text-[#93563a] gap-2">
        <Link href="mailto:team@pugo.wtf">
          <p>team@pugo.wtf</p>
        </Link>
        <p>&copy; PugHopiumInu. 2024 All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
