module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts',] }],
    'import/extensions': [0],
    'default-param-last': ['off'],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 0,
    'no-alert': 0,
    'react/require-default-props': 0,
    'no-plusplus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'no-use-before-define': 0,
    'no-unused-expressions': 0,
    'react/jsx-no-useless-fragment': 0,
    'consistent-return': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'prefer-template': 0
  },
};
