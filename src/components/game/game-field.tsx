"use client";
import { useState, type PropsWithChildren } from "react";
import clsx from "clsx";
import { useGameState } from "./use-game-state";
import { GameSymbol } from "./game-symbol";
import { UiButton } from "../uikit";
import { CrossIcon, CircleIcon, TriangleIcon, SquareIcon } from "./icons";
import type { TGameSymbol } from "@/types";

type GameField = {
  cells: Array<null | TGameSymbol>;
  currentMove: TGameSymbol;
  nextMove: TGameSymbol;
  className: string;
  playersCount: number;
  winnerSymbol?: TGameSymbol;
  handleCellClick: (idx: number) => void;
};

export function GameField({
  cells,
  currentMove,
  nextMove,
  className,
  playersCount,
  handleCellClick,
  winnerSymbol
}: GameField) {
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
          <GameCell
            key={idx}
            onClick={() => handleCellClick(idx)}
            isWinner={winnerSymbol === symbol}
            disabled={!!winnerSymbol}
          >
            {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
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
          Current: <GameSymbol symbol={currentMove} className="w-5 h-5" />
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
  isWinner: boolean | undefined;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function GameCell({ onClick, isWinner, disabled, children }: GameCellProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center border border-slate-200 -ml-px -mt-px",
        isWinner && "bg-orange-100"
      )}
    >
      {children}
    </button>
  );
}
