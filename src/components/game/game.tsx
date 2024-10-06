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
import { computePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "../lib/timers";

const PLAYERS_COUNT = 2;

export const Game = () => {
  const [gameState, dispatch] = useReducer(
    gameReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 6000,
      moveStartAt: Date.now(),
    },
    initGameState
  );

  useInterval(1000, !!gameState.currentMove, () => {
    dispatch({
      type: ACTION_TYPES.TICK,
      now: Date.now(),
    });
  });

  const nextMove = getNextMove(gameState);
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
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, idx) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol
          );
          return (
            <PlayerInfo
              key={player.id}
              player={player}
              isRight={idx % 2 === 1}
              timer={timer}
              timerStartAt={timerStartAt}
            />
          );
        })}
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
                now: Date.now(),
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
            isRight={idx % 2 === 1}
            timer={gameState.timers[player.symbol]}
          />
        ))}
      />
    </>
  );
};
