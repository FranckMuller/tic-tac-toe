
import {GameSymbol} from './game-symbol'
import type {TGameSymbol} from '@/types'

type Props = {
  currentMove: TGameSymbol;
  nextMove: TGameSymbol;
};

export function GameMoveInfo({ currentMove, nextMove }: Props) {
  return (
    <>
      <div className="flex items-center gap-1 text-md font-semibold">
        Current: <GameSymbol symbol={currentMove} className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-1 text-xs text-slate-400">
        Next: <GameSymbol symbol={nextMove} className="w-3 h-3" />
      </div>
    </>
  );
}
