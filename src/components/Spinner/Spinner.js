import React from 'react';

import './spinner.scss';

export const Spinner = () => {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
