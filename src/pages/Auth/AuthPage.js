import React from 'react';
import { SigninForm } from '../../components/SigninForm/SigninForm';

import styles from './AuthPage.module.scss';

export const AuthPage = () => {
  return (
    <div className={styles.authPage}>
      <SigninForm />
    </div>
  );
};
