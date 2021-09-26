module.exports = {
  parser: "babel-eslint",
  env: {
    es6: false,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: ["react"],
  extends: [ "plugin:react/recommended"],
  rules:{
    "react/jsx-uses-react": "error",   
    "react/jsx-uses-vars": "error" 
  }
};

