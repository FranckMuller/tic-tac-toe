import Image from "next/image";
import { Profile } from "../profile";
import { UiButton } from "../uikit";
import { FaAngleDown } from "react-icons/fa6";

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
      <UiButton className="w-32" size="lg" variant="primary">
        play
      </UiButton>

      <button className="flex items-center gap-2 text-teal-600 text-start ml-auto">
        <Profile />
        <FaAngleDown className="w-3 h-3" />
      </button>
    </header>
  );
}
