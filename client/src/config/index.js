export function getApiUrl() {
  if (
    process.env.REACT_APP_API_LOCATION === 'production'
  ) {
    return process.env.REACT_APP_API_URL_PROD;
  }
  return process.env.REACT_APP_API_URL;
}

export const defaultCoordinates = {
  lat: -14.137483,
  lng: -47.5255588,
};

export const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export default {
  getApiUrl,
};
