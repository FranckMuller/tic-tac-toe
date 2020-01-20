import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth/authContext';

import styles from './SigninForm.module.scss';

export const SigninForm = () => {
  const [inputValues, changeInputValues] = useState(null);
  const { signin } = useContext(AuthContext);

  const onChangeInput = e => {
    changeInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    signin(inputValues);
  };

  return (
    <div className={styles.signinForm}>
      <form>
        <div className={styles.inputGroup}>
          <label>Your name</label>
          <input name="username" onChange={onChangeInput} type="text" placeholder="enter name" />
        </div>
        <div className={styles.inputGroup}>
          <label>Your password</label>
          <input
            name="password"
            onChange={onChangeInput}
            type="password"
            placeholder="enter password"
          />
        </div>
        <div className={styles.submitBtn}>
          <button onClick={onSubmitForm} className={styles.btn}>
            enter
          </button>
        </div>
      </form>
    </div>
  );
};
