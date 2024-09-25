import Link from "next/link";
import { GoArrowLeft, GoHistory } from "react-icons/go";
import { CiStar, CiUser } from "react-icons/ci";
import { FC } from "react";

type Props = {
  playersCount: number;
};

export const GameTitle: FC<Props> = ({ playersCount }) => {
  return (
    <div className="ml-2">
      <Link href="#" className="text-xs text-teal-600 flex items-center gap-2">
        <GoArrowLeft /> На главную
      </Link>
      <h1 className="text-4xl">Крестики нолики</h1>
      <div className="text-slate-400 text-xs flex items-center gap-3 mt-2">
        <div>
          <CiStar className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1">
          <CiUser className="w-4 h-4" /> {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <GoHistory className="w-4 h-4" />5 мин. на ход
        </div>
      </div>
    </div>
  );
};
