import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] }, // Ignores build directories
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:react/recommended', // React-specific rules
      'plugin:react-hooks/recommended', // React Hooks rules
      'plugin:@typescript-eslint/recommended', // TypeScript linting rules
    ],
    files: ['**/*.{ts,tsx}'],
    parser: '@typescript-eslint/parser', // Ensure TypeScript parser is used
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: 'react',
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    rules: {
      // React Hooks linting rules
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return type requirement
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ], // Warn for unused vars, ignoring args starting with '_'
    },
  }
);
