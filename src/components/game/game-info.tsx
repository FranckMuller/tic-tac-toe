import clsx from "clsx";
import { Profile } from "../profile";
import { CircleIcon, CrossIcon } from "./icons";
import { MdClose } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";

export function GameInfo({ className }: { className: string }) {
  return (
    <div
      className={clsx(
        className,
        "flex justify-between bg-white shadow-md rounded-lg py-4 px-8"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="flex place-items-center justify-center absolute -left-1 -top-1 shadow rounded-full w-5 h-5 bg-white">
            <CrossIcon className="w-3 h-3" />
          </div>
          <Profile className="w-36" />
        </div>
        <div className="w-px h-8 bg-slate-200" />
        <div className="font-semibold text-lg">08:10</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="font-semibold text-lg text-orange-600">00:10</div>
        <div className="w-px h-8 bg-slate-200" />
        <div className="relative">
          <div className="flex place-items-center justify-center absolute -left-1 -top-1 shadow rounded-full w-5 h-5 bg-white">
            <CircleIcon className="w-3 h-3" />
          </div>
          <Profile className="w-36" />
        </div>
      </div>
    </div>
  );
}
