module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": "off",
  },
  "plugins": [
    "cypress"
  ],
  "env": {
    "browser": true,
    "jest": true,
    "cypress/globals": true,
  },
};
