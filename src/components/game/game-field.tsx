"use client";
import { useState, type PropsWithChildren } from "react";
import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import { UiButton } from "../uikit";
import { CrossIcon, CircleIcon, TriangleIcon, SquareIcon } from "./icons";
import { GAME_SYMBOLS, MOVE_ORDER, type TGameSymbol } from "./constants";

const getNextMove = (currentMove: TGameSymbol) => {
  const currentMoveIdx = MOVE_ORDER.indexOf(currentMove);
  return MOVE_ORDER[currentMoveIdx + 1] ?? MOVE_ORDER[0];
};

export function GameField({ className }: { className?: string }) {
  const [{ cells, currentMove }, setGameState] = useState({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS
  });

  const nextMove = getNextMove(currentMove);

  const handleCellClick = (idx: number) => {
    setGameState(prev => {
      if (prev.cells[idx]) return prev;

      return {
        ...prev,
        cells: prev.cells.map((cell, i) =>
          idx === i ? prev.currentMove : cell
        ),
        currentMove: getNextMove(currentMove)
      };
    });
  };

  const actions = (
    <>
      <UiButton size="md" variant="primary">
        Give up
      </UiButton>
      <UiButton size="md" variant="outline">
        Draw
      </UiButton>
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
          <GameCell key={idx} onClick={() => handleCellClick(idx)}>
            {symbol && <GameSymbol symbol={symbol} className="w-3 h-3" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({
  className,
  children
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx(className, "bg-white shadow-md rounded-lg px-2 py-4")}>
      {children}
    </div>
  );
}

type GameMoveInfoProps = {
  actions: React.ReactNode;
  currentMove: TGameSymbol;
  nextMove: TGameSymbol;
};

function GameMoveInfo({ actions, currentMove, nextMove }: GameMoveInfoProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-md font-semibold">
          Current: <GameSymbol symbol={currentMove} className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400">
          Next: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>

      {actions}
    </div>
  );
}

function GameGrid({ children }: PropsWithChildren<{}>) {
  return (
    <div className="grid grid-rows-[repeat(19,_28px)] grid-cols-[repeat(19,_28px)] mt-5 pl-px pt-px">
      {children}
    </div>
  );
}

type GameCellProps = {
  onClick: () => void;
};

function GameCell({ onClick, children }: PropsWithChildren<GameCellProps>) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center border border-slate-200 -ml-px -mt-px"
    >
      {children}
    </button>
  );
}
