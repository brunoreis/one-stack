import config from '../config';

export default async (email, password) => {
  const apiUrl = config.getApiUrl();

  return fetch(
    `${apiUrl}/login`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    },
  ).then(res => res.json());
};
