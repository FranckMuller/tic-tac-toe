export const auth = data => {
  return fetch('http://localhost:8421/api.authentication.signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });
};

export const checkAuthentication = () => {
  return fetch('http://localhost:8421/api.authentication.check');
};

export const logout = () => {
  return fetch('http://localhost:8421/api.authentication.signout');
};
