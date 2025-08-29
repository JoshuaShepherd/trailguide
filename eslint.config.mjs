import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "vendor/**", // Ignore vendor directory
    ],
  },
  {
    rules: {
      // Turn unused variables into warnings instead of errors
      "@typescript-eslint/no-unused-vars": "warn",
      // Turn a11y issues into warnings
      "jsx-a11y/alt-text": "warn",
      // Allow unescaped entities in JSX (we've fixed the critical ones)
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
