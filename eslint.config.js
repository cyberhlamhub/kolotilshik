import path from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintParserAstro from 'astro-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compat = new FlatCompat({
  baseDirectory: dirname,
});

export default [
  eslint.configs.recommended,
  eslintConfigPrettier,
  ...eslintPluginAstro.configs.recommended,
  ...compat.extends('eslint-config-airbnb-base'),
  // ...compat.extends("eslint-config-airbnb-typescript"),
  {
    files: ['**/*.ts', '**/*.js', '**/*.mjs'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 2021,
      },
    },
    plugins: {
      importPlugin,
      prettier,
      typescriptEslint,
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-undef': 0,
      'no-bitwise': 0,
      'no-param-reassign': 0,
      'typescriptEslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', disallowTypeAnnotations: false },
      ],
      'typescriptEslint/ban-ts-comment': 'warn',
      'typescriptEslint/no-empty-object-type': 'warn',
      'typescriptEslint/no-explicit-any': 'warn',
      'typescriptEslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^(_|ignore)',
        },
      ],
      'import/no-unresolved': 0,
      'import/prefer-default-export': 0,
      'import/extensions': 0,
      'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
      'importPlugin/order': [
        2,
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
  }, {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintParserAstro,
    },
    plugins: {
      importPlugin,
      prettier,
    },
    rules: {
      'astro/no-conflict-set-directives': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-undef': 0,
      'import/no-unresolved': 0,
      'importPlugin/order': [
        2,
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
  },
];
