function getApiUrl() {
  return process.env.REACT_APP_ENV === 'prod'
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;
}

export default {
  getApiUrl,
};
