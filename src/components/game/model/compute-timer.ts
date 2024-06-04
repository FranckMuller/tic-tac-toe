import type { GameState } from "./game-reducer";
import type { TGameSymbol } from "@/types";

export function computeTimer(state: GameState, playerSymbol: TGameSymbol) {
  return {
    timer: state.timers[playerSymbol],
    timerStartAt:
      playerSymbol === state.currentMove ? state.currentMoveStart : undefined
  };
}
