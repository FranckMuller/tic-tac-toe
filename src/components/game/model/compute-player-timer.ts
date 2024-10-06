import type { TSymbol } from "@/types";
import { GameState } from "./game-reducer";

export const computePlayerTimer = (gameState: GameState, symbol: TSymbol) => {
  return {
    timer: gameState.timers[symbol],
    timerStartAt:
      gameState.currentMove === symbol ? gameState.currentMoveStart : undefined,
  };
};
