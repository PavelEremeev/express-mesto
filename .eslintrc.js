module.exports = {
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {

    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-underscore-dangle": ["off", { "allow": ["_id"] }],
    "no-console": "off",
    "quotes": ["off", "double", { "avoidEscape": true }],
    "quote-props": ["off", "always"],
    "arrow-parens": ["off", "always"],
    "consistent-return": ["off", { treatUndefinedAsUnspecfied: true }],
    "arrow-body-style": ["off", "always"],

  },
};
