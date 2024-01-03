module.exports = {
  // 適用範囲の制限
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // create-react-appが生成したESLintの設定をpackage.jsonから転記
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // ESLintのフォーマットを無効化する（設定を上書きするためextendsの最後に記述すること）
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {},
}
