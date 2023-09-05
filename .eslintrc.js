module.exports = {
    
    extends: [
      'plugin:vue/vue3-essential',
      '@vue/standard',
      '@vue/typescript/recommended',
      'prettier',
    ],
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
    rules: {
      'prettier/prettier': 'error',
    },
  };
  