//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  bracketSpacing: false,
  arrowParens: "avoid",

  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
