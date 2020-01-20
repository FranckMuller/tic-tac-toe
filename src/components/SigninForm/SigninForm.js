import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth/authContext';
import { Redirect } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';

import styles from './SigninForm.module.scss';

export const SigninForm = () => {
  const [inputValues, changeInputValues] = useState(null);
  const { signin, isAuthed, isLoading, error, setError } = useContext(AuthContext);

  const onChangeInput = e => {
    if (error) setError(null);
    changeInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    signin(inputValues);
  };

  if (isAuthed) {
    return <Redirect to={'/'} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.signinForm}>
      {error && <div className={styles.error}>{error}</div>}
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
