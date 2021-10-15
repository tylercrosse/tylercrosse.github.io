module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    __PATH_PREFIX__: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
