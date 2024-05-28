import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { getNextMove, computeWinner } from "./model";
import type { TGameSymbol } from "@/types";

export function useGameState(playersCount: number) {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
    playersTimeOver: [] as Array<TGameSymbol>
  });

  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);
  const winnerSequence = computeWinner(cells);
  const winnerSymbol =
    currentMove === nextMove ? currentMove : winnerSequence ? cells[winnerSequence?.[0]] : undefined;

  const handleCellClick = (idx: number) => {
    setGameState(prev => {
      if (prev.cells[idx]) return prev;

      return {
        ...prev,
        cells: prev.cells.map((cell, i) =>
          idx === i ? prev.currentMove : cell
        ),
        currentMove: getNextMove(currentMove, playersCount, playersTimeOver)
      };
    });
  };

  const handleTimeOver = (symbol: TGameSymbol) => {
    setGameState(prev => {
      return {
        ...prev,
        playersTimeOver: [...prev.playersTimeOver, symbol],
        currentMove: getNextMove(currentMove, playersCount, playersTimeOver)
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    winnerSequence,
    handleCellClick,
    handleTimeOver,
    winnerSymbol
  };
}
