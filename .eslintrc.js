module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "import/prefer-default-export": "off",
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/prefer-stateless-function": [
            0
        ],
        "react/jsx-indent": [
            0
        ],
        "react/sort-comp": [
            0
        ],
        "react/destructuring-assignment": [
            0
        ],
        "react/forbid-prop-types": [
            0
        ],
        "react/no-unescaped-entities": [
            "error",
            {
                "forbid": [
                    ">",
                    "}"
                ]
            }
        ],
        "quotes": [
            "error",
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": false
            }
        ],
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "camelcase": "off",
        "no-use-before-define": "off",
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "implicit-arrow-linebreak": "off",
        "comma-dangle": "off",
        "indent": "off",
        "no-trailing-spaces": "off"
    }
};
