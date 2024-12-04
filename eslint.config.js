const next = require("eslint-config-next");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const tailwindcssPlugin = require("eslint-plugin-tailwindcss");

module.exports = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["node_modules", "dist", ".next"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    extends: [next()],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "react/react-in-jsx-scope": "off",
      "no-console": "warn",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-contradicting-classname": "error",
    },
    settings: {
      tailwindcss: {
        config: "./tailwind.config.ts", // Path to your Tailwind config
      },
    },
  },
];
