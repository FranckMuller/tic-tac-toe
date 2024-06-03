import {getNextMove} from './get-next-move' 
import { GAME_SYMBOLS } from "../constants";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click"
} as const;

type ActionType = (typeof GAME_STATE_ACTIONS)[keyof typeof GAME_STATE_ACTIONS];

interface CellClickAction {
  type: typeof GAME_STATE_ACTIONS.CELL_CLICK;
  payload: { index: number };
}

type Action = CellClickAction;

export function initGameState({ playersCount }: { playersCount: number }) {
  return {
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
    playersCount
  };
}

export type GameState = ReturnType<typeof initGameState>;

export function gameStateReducer(state: GameState, action: Action) {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const {
        payload: { index }
      } = action;
      if (state.cells[index]) return state;

      return {
        ...state,
        cells: state.cells.map((cell, i) =>
          index === i ? state.currentMove : cell
        ),
        currentMove: getNextMove(state.currentMove, state.playersCount)
      };
    }

    default: {
      return state;
    }
  }
}
