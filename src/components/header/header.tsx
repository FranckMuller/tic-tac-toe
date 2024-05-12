import Image from "next/image";

import { FaAngleDown } from "react-icons/fa6";

import avatarSrc from "./man.png";

export function Header() {
  return (
    <header className="flex items-center h-14 shadow-md bg-white px-8">
      <div className="flex items-center">
        <span className="text-teal-400 text-2xl">X</span>
        <span className="h-6 w-px bg-black mx-1"></span>
        <span className="text-orange-700 text-2xl">O</span>
        <span className="pt-1">nline</span>
      </div>

      <div className="w-px h-6 bg-slate-300 mx-6" />

      <button className="text-white hover:bg-teal-500 transition-colors rounded-sm bg-teal-600 w-32 px-5 py-1 text-sm leading-tight">
        play
      </button>

      <button className="flex items-center gap-2 text-teal-600 hover:text-teal-500 transition-colors text-start ml-auto">
        <Image src={avatarSrc} width={38} height={38} alt="avatar" />
        <div>
          <div className="text-sm leading-tight">Dimasta</div>
          <div className="text-xs text-slate-400 leading-tight">
            rating: 1400
          </div>
        </div>
        <FaAngleDown className="w-3 h-3" />
      </button>
    </header>
  );
}
