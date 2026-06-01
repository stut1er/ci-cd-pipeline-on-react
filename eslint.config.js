import globals from "globals";
import react from "eslint-plugin-react";

export default [
    {
        ignores: ["dist", "node_modules", "**/*.test.js", "**/*.spec.js"],
    },
    {
        files: ["**/*.{js,jsx}"],
        plugins: {
            react: react,
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "no-unused-vars": "warn",
            "no-console": "warn",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];