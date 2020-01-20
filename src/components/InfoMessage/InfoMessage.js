import React, { useContext } from 'react';
import { GameContext } from '../../context/game/gameContext';
import { USER, AI } from '../../context/game/types';

import styles from './InfoMessage.module.scss';

export const InfoMessage = ({ confirmHanlder }) => {
  const { winner } = useContext(GameContext);
  return (
    <div className={styles.infoMessage}>
      <div className={styles.message}>
        {winner === USER && 'You win'}
        {winner === AI && 'You lose '}
        {!winner && 'Draw '}
      </div>
      <button onClick={confirmHanlder} className={styles.playBtn}>
        Play again
      </button>
    </div>
  );
};
