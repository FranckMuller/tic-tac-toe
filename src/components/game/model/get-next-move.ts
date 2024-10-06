import type { TSymbol } from "@/types";
import { MOVE_ORDER } from "../constants";
import type { GameState } from "./game-reducer";

export const getNextMove = (gameState: GameState) => {
  const slicedMoveOrder = MOVE_ORDER.slice(0, gameState.playersCount).filter(
    (symbol) => gameState.timers[symbol] > 0
  );
  const nextMoveIndex = slicedMoveOrder.indexOf(gameState.currentMove) + 1;

  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
};
