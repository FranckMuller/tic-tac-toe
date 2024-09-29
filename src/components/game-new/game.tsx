"use client";
import { GameTitle } from "./ui/game-title";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { useGame } from "./model/use-game";
import { PLAYERS } from "./constants";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/icons/game-over-modal";

const PLAYERS_COUNT = 2;

export const Game = () => {
  const {
    cells,
    winnerSymbol,
    winnerSequence,
    handleCellClick,
    currentMove,
    nextMove,
  } = useGame(PLAYERS_COUNT);

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
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, idx) => (
          <GameCell
            key={idx}
            symbol={cell}
            disabled={!!winnerSymbol}
            onClick={() => handleCellClick(idx)}
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
