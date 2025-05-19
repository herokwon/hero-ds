import storybook from 'eslint-plugin-storybook';

import { FlatCompat } from '@eslint/eslintrc';
import prettierConfigs from 'eslint-config-prettier/flat';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type { import('eslint').Linter.Config } */
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...storybook.configs['flat/recommended'],
  prettierConfigs,
];

export default eslintConfig;
