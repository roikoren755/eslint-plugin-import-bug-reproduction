module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
  plugins: ['import'],
  settings: {
    'import/resolver': { node: { extensions: ['.js'] } },
  },
  rules: { 'import/no-unused-modules': [2, { unusedExports: true }] },
};
