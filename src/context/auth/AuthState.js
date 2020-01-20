import React, { useReducer } from 'react';
import { AuthContext } from './authContext';
import { authReducer } from './atuhReducer';
import { auth, checkAuthentication, logout } from './../../api/auth';
import { fetchUserStatistics, postUserStatistics } from './../../api/user';
import { SET_AUTH_STATE } from './types';

export const AuthState = ({ children }) => {
  const initialState = {
    isAuthed: false
  };
  const [state, dispatch] = useReducer(
    authReducer,
    JSON.parse(localStorage.getItem('authState')) || initialState
  );

  const signin = async userData => {
    await logout().then(res => {
      console.log(res);
    });
    const res = await auth(userData);
    if (res.ok) {
      console.log(res);
      checkAuthentication().then(res => {
        console.log(res);
      });
      postUserStatistics('123123').then(res => {
        console.log(res);
      });
      fetchUserStatistics().then(res => {
        console.log(res);
      });
      localStorage.setItem('authState', JSON.stringify({ isAuthed: true }));
      setAuth(true);
    }
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
        signin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
