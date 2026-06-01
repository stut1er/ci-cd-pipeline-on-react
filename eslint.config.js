// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [js.configs.recommended, {
    files: ["**/*.{js,jsx}"],
    plugins: {
        react: react,
    },
    languageOptions: {
        ecmaVersion: 2020,
        globals: {
            ...globals.browser,
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
        "no-unused-vars": ["warn", { 
            "varsIgnorePattern": "^_", 
            "argsIgnorePattern": "^_"
        }],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
}, {
    files: ["src/main.jsx"],
    rules: {
        "no-unused-vars": "off", 
    },
}, ...storybook.configs["flat/recommended"]];