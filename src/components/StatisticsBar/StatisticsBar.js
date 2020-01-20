import React from 'react';

export const StatisticsBar = ({ name, wins, loses, draws }) => {
  return (
    <>
      <span>{name}</span>
      <div>
        <span>Wins {wins}</span>
        <span>Lose {loses}</span>
        <span>Draw {draws}</span>
      </div>
    </>
  );
};
