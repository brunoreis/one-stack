import config from '../../../config';

export default () => {
  const apiUrl = config.getApiUrl();

  return fetch(
    `${apiUrl}/logout`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
  );
};
