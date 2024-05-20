import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";
  import type {  TGameSymbol } from "@/types";

const getNextMove = (currentMove: TGameSymbol, playersCount: number) => {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount)
  const currentMoveIdx = slicedMoveOrder.indexOf(currentMove);
  return slicedMoveOrder[currentMoveIdx + 1] ?? slicedMoveOrder[0];
};

export function useGameState(playersCount: number) {
  const [{ cells, currentMove }, setGameState] = useState({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS
  });

  const nextMove = getNextMove(currentMove, playersCount);

  const handleCellClick = (idx: number) => {
    setGameState(prev => {
      if (prev.cells[idx]) return prev;

      return {
        ...prev,
        cells: prev.cells.map((cell, i) =>
          idx === i ? prev.currentMove : cell
        ),
        currentMove: getNextMove(currentMove, playersCount)
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick
  };
}
