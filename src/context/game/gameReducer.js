import {
  SELECT_SQUARE,
  RESET_GAME,
  SET_DRAW,
  COMPLETE_GAME,
  SET_LOADING,
  SET_USER_STATISTICS,
  USER,
  AI
} from './types';

const handlers = {
  [SELECT_SQUARE]: (state, { idx }) => {
    const { squares } = state.game;
    if (!squares[idx] || squares[idx].owner || idx === null) {
      return state;
    }

    const newItem = {
      owner: state.game.isUserMove ? USER : AI
    };

    return {
      ...state,
      game: {
        ...state.game,
        squares: [...squares.slice(0, idx), newItem, ...squares.slice(idx + 1)],
        isUserMove: !state.game.isUserMove,
        selectedSquaresCount: ++state.game.selectedSquaresCount
      }
    };
  },

  [SET_LOADING]: (state, { value }) => {
    return {
      ...state,
      game: {
        ...state.game,
        isLoading: value
      }
    };
  },

  [COMPLETE_GAME]: (state, { winner, coords }) => {
    return {
      ...state,
      game: {
        ...state.game,
        winner: winner,
        lineCoords: coords
      },
      wins: winner === USER ? ++state.user.wins : state.user.wins,
      loses: winner === AI ? ++state.user.loses : state.user.loses
    };
  },

  [RESET_GAME]: state => {
    return {
      ...state,
      game: {
        ...state.game,
        squares: Array(9).fill({ owner: null }),
        isUserMove: true,
        winner: null,
        lineCoords: null,
        selectedSquaresCount: 0,
        isDraw: false
      }
    };
  },

  [SET_DRAW]: state => {
    return {
      ...state,
      draws: ++state.user.draws,
      game: {
        ...state.game,
        isDraw: true
      }
    };
  },

  [SET_USER_STATISTICS]: (state, { user }) => {
    return {
      ...state,
      user: {
        ...state.user,
        ...user
      }
    };
  },

  DEFAULT: state => state
};

export const gameReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action.payload);
};
