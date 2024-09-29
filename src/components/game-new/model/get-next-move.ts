import type { TSymbol } from "@/types";
import { MOVE_ORDER } from "../constants";
import type { GameState } from "./game-reducer";

export const getNextMove = (
  gameState: GameState,
  playersTimeOver: TSymbol[]
) => {
  const slicedMoveOrder = MOVE_ORDER.slice(0, gameState.playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol)
  );
  const nextMoveIndex = slicedMoveOrder.indexOf(gameState.currentMove) + 1;

  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
};
