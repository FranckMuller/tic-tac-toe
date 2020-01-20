import React from 'react';
import { Game } from '../../components/Game/Game';

import styles from './GamePage.module.scss';

export const GamePage = () => {
  return (
    <div className={styles.gamePage}>
      <Game />
    </div>
  );
};
