function getApiUrl() {
  if (
    process.env.REACT_APP_API_LOCATION === 'production'
  ) {
    return process.env.REACT_APP_API_URL_PROD;
  }
  return process.env.REACT_APP_API_URL;
}

export default {
  getApiUrl,
};
