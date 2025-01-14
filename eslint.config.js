// @ts-check
import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

// 변경 전: export default [...]// 변경 후: export default tseslint.config(...)
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
  },
  {
    ignores : [".yarn/**", ".vite/**"]
  }
);
