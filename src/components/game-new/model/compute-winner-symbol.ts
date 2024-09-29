import type { TSymbol } from "@/types";
import type { GameState } from "./game-reducer";

export const computeWinnerSymbol = (
  gameState: GameState,
  {
    winnerSequence,
    nextMove,
  }: { winnerSequence: number[] | undefined; nextMove: TSymbol }
) => {
  return nextMove === gameState.currentMove
    ? gameState.currentMove
    : winnerSequence
    ? gameState.cells[winnerSequence[0]]
    : undefined;
};
