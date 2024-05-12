import { type Symbol } from "@/components/constants";
import { GameSymbol } from "./game-symbol";

type Props = {
  winnerSymbol?: Symbol;
  currentStep: Symbol;
  isDraw: boolean;
};

export function GameInfo({ winnerSymbol, currentStep, isDraw }: Props) {
  let content = null;

  if (isDraw) content = "Draw";

  if (winnerSymbol)
    content = (
      <>
        Winner: <GameSymbol symbol={winnerSymbol} />
      </>
    );

  if (!winnerSymbol && !isDraw)
    content = (
      <>
        Current step: <GameSymbol symbol={currentStep} />
      </>
    );

  return <div className="game-info">{content}</div>;
}
