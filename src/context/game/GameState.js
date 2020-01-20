import React, { useReducer, useEffect } from 'react';
import { GameContext } from './gameContext';
import { gameReducer } from './gameReducer';
import { postUserStatistics, fetchUserStatistics } from '../../api/user';
import {
  SELECT_SQUARE,
  SET_DRAW,
  RESET_GAME,
  COMPLETE_GAME,
  SET_LOADING,
  SET_USER_STATISTICS,
  USER,
  AI
} from './types';

export const GameState = ({ children }) => {
  const initialState = {
    game: {
      squares: Array(9).fill({ owner: null }),
      isUserMove: true,
      winner: null,
      isDraw: false,
      lineCoords: null,
      selectedSquaresCount: 0,
      isLoading: false
    },
    user: {
      wins: 0,
      loses: 0,
      draws: 0
    }
  };

  const [state, dispatch] = useReducer(gameReducer, {
    game: JSON.parse(localStorage.getItem('gameState')) || initialState.game,
    user: initialState.user
  });

  useEffect(() => {
    setLoading(true);
    (async () => {
      const res = await fetchUserStatistics();
      console.log(res);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(state.game));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.game.squares]);

  const setUserStatistics = statistics => {
    dispatch({
      type: SET_USER_STATISTICS,
      payload: {
        user: statistics
      }
    });
  };

  const setLoading = value => {
    dispatch({
      type: SET_LOADING,
      payload: {
        value
      }
    });
  };

  const selectSquare = idx => {
    dispatch({
      type: SELECT_SQUARE,
      payload: {
        idx
      }
    });
  };

  const completeGame = async (winner = null, coords = null) => {
    if (winner) {
      let { wins, loses, draws } = state.user;
      const userStatistic = {
        wins: winner === USER ? ++wins : wins,
        loses: winner === AI ? ++loses : loses,
        draws: !winner ? ++draws : draws
      };
      // const res = await postUserStatistics(userStatistic);
      // console.log(res);
      dispatch({
        type: COMPLETE_GAME,
        payload: {
          coords,
          winner
        }
      });
    } else {
      dispatch({
        type: SET_DRAW
      });
    }
  };

  const resetGame = () => {
    dispatch({
      type: RESET_GAME
    });
  };

  return (
    <GameContext.Provider
      value={{
        squares: state.game.squares,
        isUserMove: state.game.isUserMove,
        winner: state.game.winner,
        lineCoords: state.game.lineCoords,
        wins: state.user.wins,
        loses: state.user.loses,
        selectedSquaresCount: state.game.selectedSquaresCount,
        isDraw: state.game.isDraw,
        draws: state.user.draws,
        isLoading: state.game.isLoading,
        selectSquare,
        resetGame,
        completeGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
