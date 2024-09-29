import { useState } from "react";
import { GAME_SYMBOLS } from "../constants";
import { getNextMove } from "./get-next-move";
import { computeWinner } from "./compute-winner";
import type { TSymbol } from "@/types";

export const useGame = (playersCount: number) => {
  const [playersTimeOver, setPlayersTimeOver] = useState<TSymbol[]>([]);
  const [{ cells, currentMove }, setGame] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const handleCellClick = (index: number) => {
    setGame((prev) => {
      if (prev.cells[index]) return prev;

      return {
        ...prev,
        currentMove: getNextMove(
          prev.currentMove,
          playersCount,
          playersTimeOver
        ),
        cells: prev.cells.map((cell, idx) =>
          idx === index ? prev.currentMove : cell
        ),
      };
    });
  };

  const handleTimeOver = (symbol: TSymbol) => {
    setGame((prev) => ({
      ...prev,
      currentMove: getNextMove(prev.currentMove, playersCount, playersTimeOver),
    }));
    setPlayersTimeOver((prev) => [...prev, symbol]);
  };

  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);
  const winnerSequence = computeWinner(cells);
  const winnerSymbol =
    nextMove === currentMove
      ? currentMove
      : winnerSequence
      ? cells[winnerSequence[0]]
      : undefined;

  return {
    cells,
    currentMove,
    handleCellClick,
    nextMove,
    winnerSequence,
    winnerSymbol,
    handleTimeOver,
  };
};
