module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    __PLATFORM__: true,
    __GLOBAL__: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-underscore-dangle': 'off',
    'import/no-named-as-default': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'complexity': ['error', 20],
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-empty-function': ['error', { allow: [] }],
    'import/no-cycle': [2, { maxDepth: 1 }],
  },
};
