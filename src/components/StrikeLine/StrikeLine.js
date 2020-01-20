import React from 'react';

import styles from './StrikeLine.module.scss';

export const StrikeLine = ({ coords, color }) => (
  <div className={styles.line}>
    <svg>
      <line
        x1={coords.x1}
        y1={coords.y1}
        x2={coords.x2}
        y2={coords.y2}
        style={{ stroke: color, strokeWidth: 2 }}
      />
    </svg>
  </div>
);
