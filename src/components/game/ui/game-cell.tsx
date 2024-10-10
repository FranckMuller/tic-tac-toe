import { memo, type FC } from "react";
import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import type { TSymbol } from "@/types";

type Props = {
  disabled: boolean;
  onClick: (index: number) => void;
  isWinner: boolean;
  symbol: TSymbol | null;
  index: number;
};

export const GameCell = memo<Props>(
  ({ disabled, onClick, isWinner, symbol, index }) => {
    return (
      <button
        disabled={disabled}
        onClick={() => onClick(index)}
        className={clsx(
          "flex items-center justify-center border border-slate-200 -ml-px -mt-px",
          isWinner && "bg-orange-600/10"
        )}
      >
        {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
      </button>
    );
  }
);
