import {
  SELECT_SQUARE,
  RESET_GAME,
  SET_DRAW,
  SET_WINNER,
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
        selectedSquaresCount: state.game.selectedSquaresCount + 1
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

  [SET_WINNER]: (state, { winner, coords }) => {
    return {
      ...state,
      game: {
        ...state.game,
        winner: winner,
        lineCoords: coords
      },
      user: {
        ...state.user,
        wins: winner === USER ? state.user.wins + 1 : state.user.wins,
        loses: winner === AI ? state.user.loses + 1 : state.user.loses
      }
    };
  },

  [RESET_GAME]: (state, { initialGameState }) => {
    return {
      ...state,
      game: initialGameState
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
