import { getNextMove } from "./get-next-move";
import { GAME_SYMBOLS, MOVE_ORDER } from "../constants";
import type { SymbolValues } from "@/types";

export const GAME_ACTIONS = {
  CELL_CLICK: "cell-click",
  TICK: "tick"
} as const;

type ActionType = (typeof GAME_ACTIONS)[keyof typeof GAME_ACTIONS];

interface CellClickAction {
  type: typeof GAME_ACTIONS.CELL_CLICK;
  payload: { index: number; now: number };
}

interface TickAction {
  type: typeof GAME_ACTIONS.TICK;
  now: number;
}

type Action = CellClickAction | TickAction;
export type Timers = Record<SymbolValues, number>;

export function initGameState({
  playersCount,
  defaultTimer,
  currentMoveStart
}: {
  playersCount: number;
  defaultTimer: number;
  currentMoveStart: number;
}) {
  const timers: Timers = MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {} as Timers);

  return {
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
    playersCount,
    timers,
    currentMoveStart
  };
}

export type GameState = ReturnType<typeof initGameState>;

export function gameReducer(state: GameState, action: Action) {
  switch (action.type) {
    case GAME_ACTIONS.CELL_CLICK: {
      const {
        payload: { index, now }
      } = action;

      if (state.cells[index]) {
        return state;
      }

      return {
        ...state,
        timers: updateTimers(state, now),
        cells: updateCells(state, index),
        currentMove: getNextMove(
          state.currentMove,
          state.playersCount,
          state.timers
        ),
        currentMoveStart: now
      };
    }

    case GAME_ACTIONS.TICK: {
      const { now } = action;

      if (!isTimeOver(state, now)) {
        return state;
      }

      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(
          state.currentMove,
          state.playersCount,
          state.timers
        ),
        currentMoveStart: now
      };
    }

    default: {
      return state;
    }
  }
}

function updateCells(gameState: GameState, index: number) {
  return gameState.cells.map((cell, i) =>
    index === i ? gameState.currentMove : cell
  );
}

function updateTimers(gameState: GameState, now: number) {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentMove];

  return {
    ...gameState.timers,
    [gameState.currentMove]: timer - diff
  };
}

function isTimeOver(gameState: GameState, now: number) {
  const timer = updateTimers(gameState, now)[gameState.currentMove];

  return timer <= 0;
}
