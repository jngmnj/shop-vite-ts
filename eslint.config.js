import path from 'path';
import { fileURLToPath } from 'url';

import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import globals from 'globals';

import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fixedReact = fixupPluginRules(react);
const fixedHooks = fixupPluginRules(reactHooks);
const fixedImport = fixupPluginRules(importPlugin);
const fixedTS = fixupPluginRules(ts);

export default [
  { ignores: ['dist', 'node_modules'] },

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': fixedTS,
      react: fixedReact,
      'react-hooks': fixedHooks,
      import: fixedImport,
      'jsx-a11y': jsxA11y,
      prettier,
      'react-refresh': eslintPluginReactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...fixedTS.configs.recommended.rules,
      ...fixedReact.configs.recommended.rules,
      ...fixedHooks.configs.recommended.rules,
      ...fixedImport.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],

      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: false,
        },
      ],

      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': [
        'error',
        { singleQuote: true, trailingComma: 'all' },
      ],
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        alias: {
          map: [
            ['@', path.resolve(__dirname, 'src')],
            ['@components', path.resolve(__dirname, 'src/components')],
            ['@data', path.resolve(__dirname, 'src/data')],
            ['@pages', path.resolve(__dirname, 'src/pages')],
            ['@assets', path.resolve(__dirname, 'src/assets')],
            ['@hooks', path.resolve(__dirname, 'src/hooks')],
            ['@utils', path.resolve(__dirname, 'src/utils')],
            ['@api', path.resolve(__dirname, 'src/api')],
            ['@store', path.resolve(__dirname, 'src/store')],
            ['@constants', path.resolve(__dirname, 'src/constants')],
          ],
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
    },
  },
];
