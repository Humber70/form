module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: "standard",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    quotes: "off",
    camelcase: "off",
    "spaced-comment": "warn",
    "prefer-const": "warn",
    semi: "off",
    "no-unused-vars": "warn"
  }
}
