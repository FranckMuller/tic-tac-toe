import { useReducer } from "react";

import { gameReducer, initGameState, GAME_ACTIONS } from "./model/game-reducer";
import { getNextMove } from "./model/get-next-move";
import { computeWinner } from "./model/compute-winner";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { computeTimer } from "./model/compute-timer";
import { useInterval } from "../lib/use-interval";
import { PLAYERS } from "./constants";

import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameCell } from "./ui/game-cell";
import { UiButton } from "../uikit";

const PLAYERS_COUNT = 2;

export function Game() {
  const [state, dispatch] = useReducer(
    gameReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 60 * 1000,
      currentMoveStart: Date.now()
    },
    initGameState
  );

  useInterval(1000, !!state.currentMoveStart, () => {
    dispatch({
      type: GAME_ACTIONS.TICK,
      now: Date.now()
    });
  });

  const nextMove = getNextMove(state.currentMove, PLAYERS_COUNT, state.timers);
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
  console.log(winnerSymbol);
  return (
    <GameLayout
      backLink={<BackLink />}
      gameTitle={<GameTitle />}
      gameInfo={<GameInfo isRatingGame playersCount={4} timeMode="2 min" />}
      playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((p, index) => {
        const { timer, timerStartAt } = computeTimer(state, p.symbol);

        return (
          <PlayerInfo
            key={p.id}
            playerInfo={p}
            isRight={index % 2 === 1}
            timer={timer}
            timerStartAt={timerStartAt}
            onTimeOver={() => console.log("time is over")}
          />
        );
      })}
      gameMoveInfo={
        <GameMoveInfo currentMove={state.currentMove} nextMove={nextMove} />
      }
      actions={actions}
      gameCells={state.cells.map((symbol, index) => (
        <GameCell
          key={index}
          onClick={() =>
            dispatch({
              type: GAME_ACTIONS.CELL_CLICK,
              payload: { index, now: Date.now() }
            })
          }
          isWinner={winnerSequence?.includes(index)}
          disabled={!!winnerSymbol}
          symbol={symbol}
        />
      ))}
    />
  );
}
