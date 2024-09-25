import clsx from "clsx";
import { PlayerInfo } from "./player-info";
import { GAME_SYMBOLS } from "./constants";
import type { FC } from "react";
import type { TSymbol } from "@/types";

type Props = {
  className?: string;
  playersCount: number;
  currentMove: TSymbol;
  isWinner: boolean;
  onTimeOver: (symbol: TSymbol) => void;
};

const players = [
  {
    id: 2,
    name: "AnastasiyaGorgeous",
    rating: 500,
    symbol: GAME_SYMBOLS.CROSS,
  },
  { id: 1, name: "Dimasta", rating: 1000, symbol: GAME_SYMBOLS.ZERO },
  { id: 3, name: "Vera", rating: 1500, symbol: GAME_SYMBOLS.SQUARE },
  { id: 4, name: "Monro", rating: 11500, symbol: GAME_SYMBOLS.TRIANGLE },
];

export const GameInfo: FC<Props> = ({
  className,
  playersCount,
  currentMove,
  isWinner,
  onTimeOver,
}) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 justify-between"
      )}
    >
      {players.slice(0, playersCount).map((player, idx) => (
        <PlayerInfo
          key={player.id}
          isTimerRunning={currentMove === player.symbol && !isWinner}
          player={player}
          isRight={idx % 2 === 1}
          onTimeOver={() => onTimeOver(player.symbol)}
        />
      ))}
    </div>
  );
};
