import { TSymbol } from "@/types";
import { getNextMove } from "./get-next-move";
import { GAME_SYMBOLS } from "../constants";

export const ACTION_TYPES = {
  CELL_CLICK: "cell-click",
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
};

export const initGameState = ({ playersCount }: { playersCount: number }) => {
  return {
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
    playersCount,
  };
};

export const gameReducer = (state: GameState, action: Action<any>) => {
  switch (action.type) {
    case ACTION_TYPES.CELL_CLICK: {
      const { index } = action;
      if (state.cells[index]) return state;

      return {
        ...state,
        currentMove: getNextMove(state, []),
        cells: state.cells.map((cell, idx) =>
          idx === index ? state.currentMove : cell
        ),
      };
    }
    default: {
      return state;
    }
  }
};
