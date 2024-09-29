import type { FC } from "react";
import type { TSymbol } from "@/types";
import { GameSymbol } from "./game-symbol";

type Props = {
  currentMove: TSymbol;
  nextMove: TSymbol;
};

export const GameMoveInfo: FC<Props> = ({ currentMove, nextMove }) => {
  return (
    <div className="mr-auto">
      <div className="flex gap-2 items-center text-lg font-semibold">
        Ход: <GameSymbol className="w-5 h-5" symbol={currentMove} />
      </div>
      <div className="flex gap-1 text-slate-400 text-xs">
        следующий: <GameSymbol className="w-3 h-3" symbol={nextMove} />
      </div>
    </div>
  );
};
