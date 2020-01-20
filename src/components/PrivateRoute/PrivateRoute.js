import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/auth/authContext';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthed } = useContext(AuthContext);
  console.log(isAuthed);
  if (!isAuthed) {
    return <Redirect to={'/signin'} />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
};
