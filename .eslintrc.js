module.exports = {
  // ...
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', prettier],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    jsx: true,
  },

  rules: {
    'prettier/prettier': 'error',

    'class-methods-use-this': 'off', // desativa uma regra que diz que todo método de uma classe precisa usar a palavra this
    'no-param-reassign': 'off', // desativa uma regra que diz que não é permitido receber parâmetro e fazer alterações nele
    camelcase: 'off', // desativa uma regra que diz que toda variável precisa ser escrita no formato camelCase
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }], // não reclamar caso a variável utilizada seja next que é usada pelos middlewares do express
  },
};
