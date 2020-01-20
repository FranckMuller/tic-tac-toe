export const postUserStatistics = data => {
  return fetch('http://localhost:8421/api.user.setstate', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });
};

export const fetchUserStatistics = () => {
  return fetch('http://localhost:8421/api.user.getstate', {
    credentials: 'include'
  });
};
