import config from '../../../config';

export default async (event) => {
  event.preventDefault();
  const email = event.target[0].value;
  const password = event.target[1].value;
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
