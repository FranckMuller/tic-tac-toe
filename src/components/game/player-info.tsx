import clsx from "clsx";
import { useEffect, useState, type FC } from "react";

import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";

import type { IPlayer } from "@/types";

type Props = {
  player: IPlayer;
  isRight: boolean;
  isTimerRunning: boolean;
  onTimeOver: () => void;
};

export const PlayerInfo: FC<Props> = ({
  player,
  isRight,
  isTimerRunning,
  onTimeOver,
}) => {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((prev) => Math.max(prev - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(3);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
  }, [seconds]);

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
        <Profile profile={player} className="w-36" />
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
