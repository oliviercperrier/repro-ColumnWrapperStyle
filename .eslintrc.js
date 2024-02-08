module.exports = {
  extends: ["airbnb", "airbnb-typescript", "prettier", "plugin:storybook/recommended"],
  plugins: ["prettier", "unused-imports"],
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/react-in-jsx-scope": "off",
    "no-param-reassign": "off",
    "prefer-const": "off",
    "no-plusplus": "off",
    "react/no-array-index-key": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/naming-convention": "off",
    "import/no-extraneous-dependencies": "off",
    "no-restricted-exports": "off",
    "no-underscore-dangle": "off",
    "react/style-prop-object": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/no-unstable-nested-components": "off",
    "consistent-return": "off",
    "no-nested-ternary": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/no-unused-prop-types": "off",
    "no-return-assign": "off",
    "no-unsafe-optional-chaining": "off",
    "react/destructuring-assignment": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "warn",
    "no-console": "error",
    radix: "off",
    "react/function-component-definition": [2, {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function"
    }],
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["warn", {
      vars: "all",
      varsIgnorePattern: "^_",
      args: "after-used",
      argsIgnorePattern: "^_"
    }]
  },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    }
  }
};