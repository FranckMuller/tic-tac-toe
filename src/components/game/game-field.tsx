import type { FC, PropsWithChildren } from "react";

import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";
import { GameFieldLayout } from "./game-field-layout";

import type { TSymbol } from "@/types";
import { GameCell } from "./game-cell";

type Props = {
  className?: string;
  playersCount: number;
  cells: Array<TSymbol | null>;
  onCellClick: (idx: number) => void;
  currentMove: TSymbol;
  nextMove: TSymbol;
  winnerSequence?: number[];
  winnerSymbol?: TSymbol;
};

type GameMoveInfoProps = {
  actions: React.ReactElement;
  currentMove: TSymbol;
  nextMove: TSymbol;
};

const GameMoveInfo: FC<GameMoveInfoProps> = ({
  actions,
  currentMove,
  nextMove,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="mr-auto">
        <div className="flex gap-2 items-center text-lg font-semibold">
          Ход: <GameSymbol className="w-5 h-5" symbol={currentMove} />
        </div>
        <div className="flex gap-1 text-slate-400 text-xs">
          следующий: <GameSymbol className="w-3 h-3" symbol={nextMove} />
        </div>
      </div>

      {actions}
    </div>
  );
};

const GameGrid: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-4">
      {children}
    </div>
  );
};

export const GameField: FC<Props> = ({
  className,
  cells,
  onCellClick,
  currentMove,
  nextMove,
  winnerSequence,
  winnerSymbol,
}) => {
  const actions = (
    <>
      <UiButton>Ничья</UiButton>
      <UiButton variant="outline">Сдаться</UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />

      <GameGrid>
        {cells.map((symbol, idx) => (
          <GameCell
            key={idx}
            disabled={!!winnerSymbol}
            onClick={() => onCellClick(idx)}
            isWinner={!!winnerSequence?.includes(idx)}
          >
            {symbol && <GameSymbol symbol={symbol} />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
};
