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
import { UiModal, UiButton } from "../components/uikit";

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
        <UiModal isOpen={!!winnerSymbol} onClose={() => console.log('close')}>
          <UiModal.Header>Game is over!</UiModal.Header>
          <UiModal.Body>
            <div className="text-xs">
              Winner: <span className="text-teal-600">Dimasta</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer className="flex justify-end gap-2">
            <UiButton size="md" variant="outline">
              Return
            </UiButton>
            <UiButton size="md" variant="primary">
              Play again
            </UiButton>
          </UiModal.Footer>
        </UiModal>
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
