import type { TSymbol } from "@/types";
import { MOVE_ORDER } from "../constants";

export const getNextMove = (
  currentMove: TSymbol,
  playersCount: number,
  playersTimeOver: TSymbol[]
) => {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol)
  );
  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;

  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
};
