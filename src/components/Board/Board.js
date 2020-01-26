import React, { useContext, useEffect, useRef, createRef } from 'react';
import { GameContext } from '../../context/game/gameContext';
import { USER, AI } from '../../context/game/types';
import { generateCoords } from '../../utils/generateCoords';
import { checkWinningLine } from '../../utils/checkWinningLine';
import { StrikeLine } from '../StrikeLine/StrikeLine';

import styles from './Board.module.scss';

export const Board = () => {
  const {
    squares,
    isUserMove,
    selectSquare,
    isDraw,
    winner,
    lineCoords,
    completeGame,
    selectedSquaresCount
  } = useContext(GameContext);

  const squareElements = useRef([...Array(9)].map(() => createRef()));

  const onSelectSquare = idx => {
    if (winner || !isUserMove) return;
    selectSquare(idx);
  };

  const checkIsWinner = () => {
    const winnerData = checkWinningLine(squares);
    if (winnerData) {
      const coords = generateCoords(winnerData.winningLine, squareElements.current);
      completeGame(winnerData.winner, coords);
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (selectedSquaresCount === squares.length && !checkWinningLine(squares)) {
      completeGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSquaresCount]);

  useEffect(() => {
    const isEnd = checkIsWinner();
    if (isEnd) return;
    const randomSquare = getRandomSquare();
    if (!isUserMove && !winner && !isDraw && randomSquare !== null) {
      selectSquare(randomSquare);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squares]);

  const getRandomSquare = () => {
    let unCkeckedItems = [];
    squares.forEach((el, idx) => {
      if (!el.owner) unCkeckedItems.push(idx);
    });
    return unCkeckedItems.length > 0
      ? unCkeckedItems[Math.floor(Math.random() * unCkeckedItems.length)]
      : null;
  };

  let initKey = 100;
  let lineColor = null;
  if (winner && winner === AI) lineColor = '#f5222d';
  if (winner && winner === USER) lineColor = '#52c41a';

  return (
    <div className={styles.board}>
      {lineCoords && winner && <StrikeLine color={lineColor} coords={lineCoords} />}

      <ul>
        {squares.map((el, idx) => {
          return (
            <li
              className={el.owner || !isUserMove ? styles.disabled : null}
              ref={squareElements.current[idx]}
              onClick={() => onSelectSquare(idx)}
              key={initKey++}
              style={{ color: el.owner === USER ? '#52c41a' : '#f5222d' }}
            >
              {el.owner && el.owner === USER ? 'x' : null}
              {el.owner && el.owner === AI ? 'o' : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
