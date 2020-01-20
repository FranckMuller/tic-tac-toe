export const auth = data => {
  return fetch('http://localhost:8421/api.authentication.signin', {
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
  return fetch('http://localhost:8421/api.authentication.check', {
    credentials: 'include'
  });
};

export const logout = () => {
  return fetch('http://localhost:8421/api.authentication.signout', {
    credentials: 'include'
  });
};
