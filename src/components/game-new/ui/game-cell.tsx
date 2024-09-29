import type { FC } from "react";
import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import type { TSymbol } from "@/types";

type Props = {
  disabled: boolean;
  onClick: () => void;
  isWinner: boolean;
  symbol: TSymbol | null;
};

export const GameCell: FC<Props> = ({
  disabled,
  onClick,
  isWinner,
  symbol,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center border border-slate-200 -ml-px -mt-px",
        isWinner && "bg-orange-600/10"
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
};
