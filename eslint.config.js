import tseslint from 'typescript-eslint';
import globals from 'globals';
import js from "@eslint/js";
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  {ignores : ['**/*.cjs', '**/*.mjs', '.yarn']}, // eslint 설정 무시 파일
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020, // ecma 버전
      globals: globals.browser, // window, document, fetch 등
    },
    plugins : {
      'react-hooks' : reactHooks, // react hooks
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    }
  }
);