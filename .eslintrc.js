module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    // Airbnb style guide 적용
    'airbnb-base',
    // TypeScript ESLint recommanded style 적용
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    'max-len': 0,
    camelcase: 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'global-require': 0,
    'no-use-before-define': 0,
    'no-plusplus': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-vars': 0,
    'no-shadow': 0,
  },
};
