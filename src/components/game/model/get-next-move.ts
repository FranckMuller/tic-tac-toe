import { MOVE_ORDER } from "../constants";
import type { TGameSymbol } from "@/types";
import type { Timers } from "./game-reducer.ts";

export function getNextMove(
  currentMove: TGameSymbol,
  playersCount: number,
  timers: Timers
) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    symbol => timers[symbol] > 0
  );
  const currentMoveIdx = slicedMoveOrder.indexOf(currentMove);
  return slicedMoveOrder[currentMoveIdx + 1] ?? slicedMoveOrder[0];
}
