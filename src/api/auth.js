export const signin = data => {
  return fetch(`${process.env.REACT_APP_DB_URL}/api.authentication.signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};

export const checkAuthentication = () => {
  return fetch(`${process.env.REACT_APP_DB_URL}/api.authentication.check`, {
    credentials: 'include'
  });
};

export const signout = () => {
  return fetch(`${process.env.REACT_APP_DB_URL}/api.authentication.signout`, {
    credentials: 'include'
  });
};
