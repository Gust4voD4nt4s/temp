import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,


  {
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },

    ignores: [
      'build/**/*'
    ]

  }
];