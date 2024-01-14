module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: [
      'dist',
      '.eslintrc.cjs',
      '**/*.css',
      '**/*.html',
      '**/*.json',
      '**/* .*', // <-- Fix: Remove the space between '*' and '.'
      '**/*.log',
      '**/*.lock',
      '**/*.png',
      '**/*.jpg',
      '**/*.jpeg',
      'src/admin2/*',
      'public/*',
      'src/assets/*',
      'Dockerfile'
    ],
    
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', 'prettier'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': 'warn',
      "prettier/prettier": "error",
      'prefer-const': 'error',
      semi: ['error', 'always'],
    },
  }
  