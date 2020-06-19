module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": "off",
    'no-useless-escape': 'off',
    'no-undef': 'off',
    'no-control-regex': 'off'
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
