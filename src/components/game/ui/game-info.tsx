import { CiStar, CiUser, CiTimer } from "react-icons/ci";

type Props = {
  isRatingGame: boolean;
  playersCount: number;
  timeMode: string;
};

export function GameInfo({ isRatingGame, playersCount, timeMode }: Props) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
      {isRatingGame && <CiStar className="w-4 h-4" />}
      <div className="flex items-center gap-0.5">
        <CiUser className="w-4 h-4" /> {playersCount}
      </div>
      <div className="flex items-center gap-0.5">
        <CiTimer className="w-4 h-4" /> {timeMode}
      </div>
    </div>
  );
}
