import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../context/game/gameContext';
import { Board } from '../Board/Board';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { InfoMessage } from '../InfoMessage/InfoMessage';
import { StatisticsBar } from '../StatisticsBar/StatisticsBar';
import { Button } from '../Button/Button';
import { Spinner } from '../Spinner/Spinner';

import styles from './Game.module.scss';

export const Game = () => {
  const [modalContent, setModalContent] = useState(null);
  const { winner, isUserMove, isDraw, resetGame, wins, loses, draws, isLoading } = useContext(
    GameContext
  );

  const confirmAnotherGame = () => {
    resetGame();
    setModalContent(null);
  };

  useEffect(() => {
    if (winner || isDraw) {
      setModalContent(<InfoMessage confirmHanlder={confirmAnotherGame} />);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner, isDraw]);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.game}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperStatusBar}>
          <div className={styles.userStatusBar}>
            <StatisticsBar name={'You'} wins={wins} loses={loses} draws={draws} />
          </div>
          {!winner && !isDraw && isUserMove && <div className={styles.move}>your turn</div>}
        </div>

        <Board />

        <div className={styles.wrapperStatusBar}>
          <div className={styles.aiStatusBar}>
            <StatisticsBar name={'You'} wins={loses} loses={wins} draws={draws} />
          </div>
          {!winner && !isDraw && !isUserMove && <div className={styles.move}>computer running</div>}
        </div>
      </div>
      <div className={styles.btnGorup}>
        <div>
          <Button clickHandler={resetGame} text={'Reset game'} />
        </div>
      </div>
      <ModalWindow>{modalContent}</ModalWindow>
    </div>
  );
};
