import { TSymbol } from "@/types";
import { getNextMove } from "./get-next-move";
import { GAME_SYMBOLS, MOVE_ORDER } from "../constants";

export const ACTION_TYPES = {
  CELL_CLICK: "cell-click",
  TICK: "tick",
};

type Action<T> = {
  type: (typeof ACTION_TYPES)[keyof typeof ACTION_TYPES];
} & {
  [key: string]: T;
};

export type GameState = {
  cells: Array<null | TSymbol>;
  currentMove: TSymbol;
  playersCount: number;
  currentMoveStart: number;
  timers: {
    [key: (typeof GAME_SYMBOLS)[keyof typeof GAME_SYMBOLS]]: number;
  };
};

export const initGameState = ({
  playersCount,
  defaultTimer,
  moveStartAt,
}: {
  playersCount: number;
  defaultTimer: number;
  moveStartAt: number;
}) => {
  return {
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
    playersCount,
    currentMoveStart: moveStartAt,
    timers: MOVE_ORDER.slice(0, playersCount).reduce(
      (timers: { [key: string]: number }, symbol) => {
        timers[symbol] = defaultTimer;
        return timers;
      },
      {}
    ),
  };
};

export const gameReducer = (state: GameState, action: Action<any>) => {
  switch (action.type) {
    case ACTION_TYPES.CELL_CLICK: {
      const { index, now } = action;
      if (state.cells[index]) return state;

      return {
        ...state,
        currentMove: getNextMove(state),
        currentMoveStart: now,
        timers: updateTimers(state, now),
        cells: updateCell(state, index),
      };
    }

    case ACTION_TYPES.TICK: {
      const { now } = action;
      if (!isTimeOver(state, now)) {
        return state;
      }

      return {
        ...state,
        currentMove: getNextMove(state),
        currentMoveStart: now,
        timers: updateTimers(state, now),
      };
    }

    default: {
      return state;
    }
  }
};

const updateCell = (gameState: GameState, index: number) => {
  return gameState.cells.map((cell, idx) =>
    idx === index ? gameState.currentMove : cell
  );
};

const updateTimers = (gameState: GameState, now: number) => {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentMove];

  return {
    ...gameState.timers,
    [gameState.currentMove]: timer - diff,
  };
};

const isTimeOver = (gameState: GameState, now: number) => {
  const timer = updateTimers(gameState, now)[gameState.currentMove];

  return timer <= 0;
};
