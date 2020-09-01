module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // https://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin
    'plugin:vue/essential', // plugins: eslint-plugin-vue/essential
    '@vue/standard' // @vue/eslint-plugin-standard
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': [2, 'never']
  }
}
