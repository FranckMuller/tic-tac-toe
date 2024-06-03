import { MOVE_ORDER } from "../constants";
import type { TGameSymbol } from "@/types";

export function getNextMove(
  currentMove: TGameSymbol,
  playersCount: number,
) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount)
  const currentMoveIdx = slicedMoveOrder.indexOf(currentMove);
  return slicedMoveOrder[currentMoveIdx + 1] ?? slicedMoveOrder[0];
}