module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "import/no-extraneous-dependencies": "[error, { devDependencies: true }]",
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
