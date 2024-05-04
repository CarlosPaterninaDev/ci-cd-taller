import globals from "globals";


export default [
  {files: ["index.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
];