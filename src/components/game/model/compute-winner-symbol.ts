import type { GameState } from "./game-state-reducer";
import type { TGameSymbol } from "@/types";

export function computeWinnerSymbol(
  state: GameState,
  winnerSequence: undefined | number[],
  nextMove: TGameSymbol
) {
  return state.currentMove === nextMove
    ? state.currentMove
    : winnerSequence
    ? state.cells[winnerSequence?.[0]]
    : undefined;
}
