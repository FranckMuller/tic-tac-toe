import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './ModalWindow.module.scss';
import closeIcon from './close.svg';

export const ModalWindow = props => {
  const [isShowed, toggleShow] = useState(false);

  useEffect(() => {
    if (props.children) {
      toggleShow(true);
    } else {
      toggleShow(false);
    }
  }, [props.children]);

  const onClose = () => {
    toggleShow(false);
  };

  const modal = isShowed ? (
    <div className={styles.modalWindow}>
      <button className={styles.closeBtn} onClick={onClose}>
        <img src={closeIcon} alt="close" />
      </button>
      <div className={styles.modalWindowContent}>{props.children}</div>
    </div>
  ) : null;

  return ReactDOM.createPortal(modal, window.document.getElementById('modalWindowWrapper'));
};
