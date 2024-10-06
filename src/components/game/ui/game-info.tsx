import { GoHistory } from "react-icons/go";
import { CiStar, CiUser } from "react-icons/ci";
import { FC } from "react";

type Props = {
  playersCount: number;
  isRatingGame: boolean;
  timeMode: string;
};

export const GameInfo: FC<Props> = ({
  isRatingGame,
  playersCount,
  timeMode,
}) => {
  return (
    <div className="text-slate-400 text-xs flex items-center gap-3 mt-2">
      {isRatingGame && <CiStar className="w-4 h-4" />}
      <div className="flex items-center gap-1">
        <CiUser className="w-4 h-4" /> {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <GoHistory className="w-4 h-4" />
        {timeMode}
      </div>
    </div>
  );
};
