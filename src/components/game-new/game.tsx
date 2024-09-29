"use client";
import { useReducer } from "react";
import { GameTitle } from "./ui/game-title";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { PLAYERS } from "./constants";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/icons/game-over-modal";
import { ACTION_TYPES, gameReducer, initGameState } from "./model/game-reducer";
import { getNextMove } from "./model/get-next-move";
import { computeWinner } from "./model/compute-winner";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";

const PLAYERS_COUNT = 2;

export const Game = () => {
  const [gameState, dispatch] = useReducer(
    gameReducer,
    { playersCount: PLAYERS_COUNT },
    initGameState
  );

  const nextMove = getNextMove(gameState, []);
  const winnerSequence = computeWinner(gameState.cells);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    nextMove,
    winnerSequence,
  });
  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        gameTitle={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={4} timeMode="5 мин. на ход" />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, idx) => (
          <PlayerInfo
            key={player.id}
            player={player}
            isTimerRunning={false}
            isRight={idx % 2 === 1}
            seconds={60}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={gameState.currentMove}
            nextMove={nextMove}
          />
        }
        gameCells={gameState.cells.map((cell, idx) => (
          <GameCell
            key={idx}
            symbol={cell}
            disabled={!!winnerSymbol}
            onClick={() =>
              dispatch({
                type: ACTION_TYPES.CELL_CLICK,
                index: idx,
              })
            }
            isWinner={!!winnerSequence?.includes(idx)}
          />
        ))}
      />

      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, idx) => (
          <PlayerInfo
            key={player.id}
            player={player}
            isTimerRunning={false}
            isRight={idx % 2 === 1}
            seconds={60}
          />
        ))}
      />
    </>
  );
};
