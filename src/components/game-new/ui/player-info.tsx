import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import { FaUser } from "react-icons/fa";
import { FC } from "react";
import { IPlayer } from "@/types";

type Props = {
  player: IPlayer;
  isRight: boolean;
  isTimerRunning: boolean;
  seconds: number;
};

export const PlayerInfo: FC<Props> = ({
  isRight,
  player,
  isTimerRunning,
  seconds,
}) => {
  const getTimerColor = (isTimerRunning: boolean, isDanger: boolean) => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-400";
  };

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  return (
    <div className="flex gap-4 items-center">
      <div className={clsx(isRight && "order-3", "relative")}>
        <div className="w-5 h-5 bg-white shadow rounded-full absolute -left-0.5 -top-0.5 flex items-center justify-center">
          <GameSymbol className="w-3 h-3" symbol={player.symbol} />
        </div>
        <div className="w-36 flex items-center gap-2 text-start">
          <div>
            <div className="w-10 h-10 text-slate-300 bg-teal-600 text-lg rounded-full flex items-center justify-center">
              <FaUser className="text-slate-50 w-5 h-5" />
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="text-teal-600 text-sm truncate">{player.name}</div>
            <div className="text-slate-400 text-xs">
              Рейтинг: {player.rating}
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(isRight && "order-2", "h-6 w-px bg-slate-200")}
      ></div>
      <div
        className={clsx(
          isRight && "order-1",
          "w-[60px] font-semibold",
          getTimerColor(isTimerRunning, isDanger)
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
};
