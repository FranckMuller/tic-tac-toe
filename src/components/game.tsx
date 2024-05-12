"use client";
import { useState } from "react";
import { GameSymbol } from "./game-symbol";
import { GameInfo } from "./game-info";
import { GameCell } from "./game-cell";
import { SYMBOL_X, SYMBOL_O, type Symbol } from "@/components/constants";

const computeWinner = (cells: any) => {
  const lines = [
    [0, 1, 3],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

const cellsArray = new Array(9).fill(null);

export function Game() {
  const [cells, setCells] = useState(cellsArray);
  const [currentStep, setCurrentStep] = useState<Symbol>(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState<Array<number>>();

  const handleCellClick = (index: number) => {
    if (cells[index]) return;

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;

    const winnerSequence = computeWinner(cellsCopy);
    console.log(winnerSequence);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
    setWinnerSequence(winnerSequence);
  };

  const handleResetClick = () => {
    setCells(new Array(9).fill(null));
    setCurrentStep(SYMBOL_X);
    setWinnerSequence(undefined);
  };

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : null;
  const isDraw = !winnerSequence && cells.filter(cell => cell).length === 9;

  return (
    <main className="game">
      
        <GameInfo
          winnerSymbol={winnerSymbol}
          isDraw={isDraw}
          currentStep={currentStep}
        />
        <div className="game-field">
        {cells.map((cell, index) => (
          <GameCell
            key={index}
            onClick={() => handleCellClick(index)}
            isWinner={winnerSequence?.includes(index)}
          >
            <GameSymbol symbol={cell} />
          </GameCell>
        ))}
      </div>
      <button onClick={handleResetClick}>Reset</button>
    </main>
  );
}
