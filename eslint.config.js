import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "*.config.js",
      "vite.config.ts",
      "public/**"
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: "./tsconfig.app.json"
      },
      globals: {
        __APP_VERSION__: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      prettier: prettierPlugin,
      import: importPlugin
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.app.json"
        }
      }
    },
    rules: {
      "prettier/prettier": ["error", { ...prettierConfig }],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "jsx-quotes": ["error", "prefer-double"],
      "@typescript-eslint/semi": ["error", "always"],
      "@typescript-eslint/no-use-before-define": [1],
      "@typescript-eslint/no-unused-vars": 2,
      "@typescript-eslint/no-explicit-any": 2,
      "@typescript-eslint/type-annotation-spacing": 2,
      "react/jsx-no-duplicate-props": "error",
      "react/no-danger": "error",
      "react/no-did-mount-set-state": "error",
      "react/no-unused-prop-types": "error",
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": [
        "error",
        {
          allowIndexSignaturePropertyAccess: true
        }
      ],
      "no-duplicate-imports": ["error", { includeExports: true }],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ],
      "require-await": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            arguments: false,
            attributes: false
          }
        }
      ]
    }
  },
  prettierConfig
];
