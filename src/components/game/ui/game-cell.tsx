import clsx from 'clsx'
import { GameSymbol } from "./game-symbol";
import type { TGameSymbol } from "@/types";

type Props = {
  isWinner: boolean | undefined;
  disabled: boolean;
  onClick: () => void;
  symbol: TGameSymbol | null;
};

export function GameCell({
  onClick,
  isWinner,
  disabled,
  symbol
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center border border-slate-200 -ml-px -mt-px",
        isWinner && "bg-orange-100"
      )}
    >
      {symbol && <GameSymbol symbol={symbol} />}
    </button>
  );
}
