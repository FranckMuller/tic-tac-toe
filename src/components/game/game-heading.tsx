import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { CiStar, CiUser, CiTimer } from "react-icons/ci";

export function GameHeading({playersCount}: {playersCount: number}) {
  return (
    <div className="pl-1">
      <Link
        className="text-teal-600 text-xs flex items-center gap-1 -mb-1"
        href="#"
      >
        <FaArrowLeft />
        To main
      </Link>
      <h1 className="text-2xl">Tic Tac Toe</h1>

      <div className="flex items-center gap-2 text-sm text-slate-500">
        <CiStar className="w-4 h-4" />
        <div className="flex items-center gap-0.5">
          <CiUser className="w-4 h-4" /> {playersCount}
        </div>
        <div className="flex items-center gap-0.5">
          <CiTimer className="w-4 h-4" /> 2 min
        </div>
      </div>
    </div>
  );
}
