// eslint.config.js
import { fixupPluginRules } from "@eslint/compat";
import eslintJS from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

const patchedImportPlugin = fixupPluginRules(eslintPluginImport);
const patchedReactHooksPlugin = fixupPluginRules(eslintPluginReactHooks);

export default [
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.eslint.json",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      react: eslintPluginReact,
      "react-hooks": patchedReactHooksPlugin,
      "jsx-a11y": eslintPluginJsxA11y,
      import: patchedImportPlugin,
      "react-refresh": eslintPluginReactRefresh,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...eslintJS.configs.recommended.rules,
      ...eslintPluginReact.configs.recommended.rules,
      ...patchedReactHooksPlugin.configs.recommended.rules,

      // Airbnb 룰 핵심 추출
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/alt-text": "warn",
      "import/order": [
        "warn",
        {
          groups: [["builtin", "external"], "internal"],
          "newlines-between": "ignore",
        },
      ],
      "prefer-const": ["error", {
        "destructuring": "all",         // 배열과 객체 분해할당에도 적용
        "ignoreReadBeforeAssign": false // 변수 선언 전에 읽히는 경우를 무시할지 여부
      }],

      // 추가된 플러그인 적용
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: true,
          trailingComma: "all",
          tabWidth: 2,
          useTabs: false,
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
