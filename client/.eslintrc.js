module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off",
    "react/destructuring-assignment": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "import/no-extraneous-dependencies": "[error, { devDependencies: true }]",
    "react-hooks/rules-of-hooks": "error",
    "prefer-destructuring": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off,"
  },
  "plugins": [
    "cypress",
    "react-hooks"
  ],
  "env": {
    "browser": true,
    "cypress/globals": true
  },
};
