"use client";
import { useState } from "react";
import { Header } from "../components/header";
import { GameSymbol } from "../components/game/game-symbol";
import {
  GameInfo,
  GameHeading,
  GameField,
  useGameState
} from "../components/game";

function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    winnerSequence,
    handleCellClick,
    handleTimeOver,
    winnerSymbol
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen text-red">
      <Header />
      <main className="py-4 mx-auto w-max">
        <GameHeading playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          handleTimeOver={handleTimeOver}
        />
        {winnerSymbol && <GameSymbol symbol={winnerSymbol} />}
        <GameField
          className="mt-5"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          playersCount={playersCount}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}

export default HomePage;
