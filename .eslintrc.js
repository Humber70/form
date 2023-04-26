module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["standard", "eslint-config-prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    camelcase: "off",
    "spaced-comment": "warn",
    "prefer-const": "warn",
    "no-unused-vars": "warn"
  }
}
