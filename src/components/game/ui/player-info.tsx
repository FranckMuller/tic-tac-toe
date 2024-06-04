import Image from "next/image";
import clsx from "clsx";
import { useNow } from "../../lib/use-now";
import { GameSymbol } from "./game-symbol";
import type { TPlayer } from "@/types";

type Props = {
  playerInfo: TPlayer;
  isRight: boolean;
  timer: number;
  timerStartAt: number | undefined;
  onTimeOver: () => void;
};

export function PlayerInfo({
  playerInfo,
  isRight,
  onTimeOver,
  timer,
  timerStartAt
}: Props) {
  const now = useNow(1000, !!timerStartAt);

  const mils = Math.max(
    now && timerStartAt ? timer - (now - timerStartAt) : timer,
    0
  );
  const seconds = Math.ceil(mils / 1000);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (timerStartAt) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-400";
  };

  return (
    <div className="flex items-center gap-3">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="flex place-items-center justify-center absolute -left-1 -top-1 shadow rounded-full w-5 h-5 bg-white">
          <GameSymbol className="w-3 h-3" symbol={playerInfo.symbol} />
        </div>
        <div className="w-36 flex items-center gap-2 text-teal-600 text-start ml-auto">
          <Image src={playerInfo.avatar} width={38} height={38} alt="avatar" />
          <div className="overflow-hidden">
            <div className="text-sm leading-tight truncate">
              {playerInfo.name}
            </div>
            <div className="text-xs text-slate-400 leading-tight">
              rating: {playerInfo.rating}
            </div>
          </div>
        </div>
      </div>
      <div className={clsx("w-px h-8 bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          "font-semibold text-lg w-14",
          isRight && "order-1",
          getTimerColor()
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
