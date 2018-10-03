import config from '../../../config';

const logout = (onLogout) => {
  const apiUrl = config.getApiUrl();
  fetch(
    `${apiUrl}/logout`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    },
  ).then(() => onLogout());
};

export default logout;
