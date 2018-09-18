import config from '../../../config';

export default async (event) => {
  event.preventDefault();
  const username = event.target[0].value;
  const password = event.target[1].value;
  const baseUrl = config.getApiUrl();

  const result = {
    message: '',
    successful: false,
  };

  await fetch(
    `${baseUrl}/login`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        username,
        password,
      }),
    },
  ).then((response) => {
    if (response.status === 200) result.successful = true;
    else {
      response.json().then((resJson) => {
        result.message = resJson.message;
      });
    }
  });

  return result;
};
