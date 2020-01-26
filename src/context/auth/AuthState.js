import React, { useReducer, useEffect } from 'react';
import { AuthContext } from './authContext';
import { authReducer } from './authReducer';
import { signin, signout, checkAuthentication } from './../../api/auth';
import { SET_AUTH_STATE, SET_ERROR } from './types';

export const AuthState = ({ children }) => {
  const initialState = {
    isAuthed: false,
    error: null
  };
  const [state, dispatch] = useReducer(
    authReducer,
    JSON.parse(localStorage.getItem('authState')) || initialState
  );

  useEffect(() => {
    checkIsAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async userData => {
    const res = await signin(userData);
    if (res.ok) {
      localStorage.setItem('authState', JSON.stringify({ isAuthed: true }));
      setAuth(true);
    } else {
      setError('Invalid name or password');
    }
  };

  const logout = async () => {
    const res = await signout();
    if (res.ok) {
      setAuth(false);
      localStorage.removeItem('authState');
    }
  };

  const checkIsAuth = async () => {
    const res = await checkAuthentication();
    if (res.ok) {
      setAuth(true);
    } else {
      localStorage.removeItem('authState');
      setAuth(false);
    }
  };

  const setError = message => {
    dispatch({
      type: SET_ERROR,
      payload: {
        message
      }
    });
  };

  const setAuth = isAuthed => {
    dispatch({
      type: SET_AUTH_STATE,
      payload: {
        isAuthed
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthed: state.isAuthed,
        error: state.error,
        login,
        checkIsAuth,
        logout,
        setError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
