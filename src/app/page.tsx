"use client";
import { useState } from "react";
import { GameInfo, GameTitle, GameField } from "@/components/game";
import { Header } from "@/components/header";
import { useGame } from "@/components/game/use-game";
import { GameSymbol } from "@/components/game/game-symbol";

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    handleCellClick,
    nextMove,
    winnerSequence,
    handleTimeOver,
    winnerSymbol,
  } = useGame(playersCount);

  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      <Header />
      <main className="pt-8 w-max mx-auto">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onTimeOver={handleTimeOver}
          className="mt-4"
        />
        {winnerSymbol && <GameSymbol className="my-6" symbol={winnerSymbol} />}
        <GameField
          className="mt-4"
          playersCount={playersCount}
          cells={cells}
          onCellClick={handleCellClick}
          currentMove={currentMove}
          nextMove={nextMove}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
