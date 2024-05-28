import { useState, useEffect } from "react";
import clsx from "clsx";
import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";
import { MdClose } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { GAME_SYMBOLS } from "./constants";
import type { TPlayer, TGameSymbol } from "@/types";
import avatarSrc from "../profile/man.png";

const players = [
  {
    id: 1,
    name: "Dimasta",
    rating: 1500,
    avatar: avatarSrc,
    symbol: GAME_SYMBOLS.CROSS
  },
  {
    id: 2,
    name: "Dimasta Chack Norris",
    rating: 900,
    avatar: avatarSrc,
    symbol: GAME_SYMBOLS.ZERO
  },
  {
    id: 3,
    name: "Olesya Novokreschenova",
    rating: 1420,
    avatar: avatarSrc,
    symbol: GAME_SYMBOLS.TRIANGLE
  },
  {
    id: 4,
    name: "Mazepa",
    rating: 0,
    avatar: avatarSrc,
    symbol: GAME_SYMBOLS.SQUARE
  }
];

type GameInfoProps = {
  className: string;
  playersCount: number;
  isWinner: boolean;
  currentMove: TGameSymbol;
  handleTimeOver: (symbol: TGameSymbol) => void;
};

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  handleTimeOver
}: GameInfoProps) {
  return (
    <div
      className={clsx(
        className,
        "grid grid-cols-2 gap-3 bg-white shadow-md rounded-lg py-4 px-8"
      )}
    >
      {players.slice(0, playersCount).map((p, i) => (
        <ProfileInfo
          key={p.id}
          profileInfo={p}
          isRight={i % 2 === 1}
          isTimerRunning={currentMove === p.symbol && !isWinner}
          onTimeOver={() => handleTimeOver(p.symbol)}
        />
      ))}
    </div>
  );
}

type ProfileInfoProps = {
  profileInfo: TPlayer;
  isRight: boolean;
  isTimerRunning: boolean;
  onTimeOver: () => void;
};

function ProfileInfo({
  profileInfo,
  isRight,
  isTimerRunning,
  onTimeOver
}: ProfileInfoProps) {
  const [seconds, setSeconds] = useState(6);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds(s => Math.max(s - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(6);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
  }, [seconds]);

  const isDanger = seconds < 10;
  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-400";
  };

  return (
    <div className="flex items-center gap-3">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="flex place-items-center justify-center absolute -left-1 -top-1 shadow rounded-full w-5 h-5 bg-white">
          <GameSymbol className="w-3 h-3" symbol={profileInfo.symbol} />
        </div>
        <Profile
          name={profileInfo.name}
          rating={profileInfo.rating}
          avatar={profileInfo.avatar}
          className="w-36"
        />
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
