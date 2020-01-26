export const setUserState = data => {
  return fetch(`${process.env.REACT_APP_DB_URL}/api.user.setstate`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });
};

export const getUserState = () => {
  return fetch(`${process.env.REACT_APP_DB_URL}/api.user.getstate`, {
    credentials: 'include'
  });
};
