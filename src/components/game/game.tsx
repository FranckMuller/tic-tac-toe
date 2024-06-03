import { useReducer } from "react";

import { gameStateReducer, initGameState, GAME_STATE_ACTIONS } from "./model/game-state-reducer";
import { getNextMove } from "./model/get-next-move";
import { computeWinner } from "./model/compute-winner";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { PLAYERS } from "./constants";

import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameCell } from "./ui/game-cell";
import { UiButton } from "../uikit";


const PLAYERS_COUNT = 4;

export function Game() {
  const [state, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT },
    initGameState
  );

  const nextMove = getNextMove(state.currentMove, PLAYERS_COUNT);
  const winnerSequence = computeWinner(state.cells);
  const winnerSymbol = computeWinnerSymbol(state, winnerSequence, nextMove);

  const actions = (
    <>
      <UiButton size="md" variant="primary">
        Give up
      </UiButton>
      <UiButton size="md" variant="outline">
        Draw
      </UiButton>
    </>
  );

  return (
    <GameLayout
      backLink={<BackLink />}
      gameTitle={<GameTitle />}
      gameInfo={<GameInfo isRatingGame playersCount={4} timeMode="2 min" />}
      playersList={PLAYERS.map((p, index) => (
        <PlayerInfo
          key={p.id}
          isTimerRunning
          playerInfo={p}
          isRight={index % 2 === 1}
          seconds={60}
          onTimeOver={() => console.log("time is over")}
        />
      ))}
      gameMoveInfo={
        <GameMoveInfo currentMove={state.currentMove} nextMove={nextMove} />
      }
      actions={actions}
      gameCells={state.cells.map((symbol, index) => (
        <GameCell
          key={index}
          onClick={() =>
            dispatch({
              type: GAME_STATE_ACTIONS.CELL_CLICK,
              payload: { index }
            })
          }
          isWinner={winnerSymbol === symbol}
          disabled={!!winnerSymbol}
          symbol={symbol}
        />
      ))}
    />
  );
}
