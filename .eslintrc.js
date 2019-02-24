module.exports = {
  extends: ["plugin:prettier/recommended", "prettier/react"],
  env: {
    node: true,
    jest: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true
    }
  }
};
