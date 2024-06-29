module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    globals: {
        _IS_DEV_: true,
    },
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'airbnb',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            globalReturn: false,
            impliedStrict: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'jest'],
    rules: {

        quotes: ['warn', 'single'],
        semi: ['error', 'always'],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'no-unused-vars': ['off', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
        eqeqeq: ['error', 'always'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/prop-types': 'off',
        'jsx-quotes': ['warn', 'prefer-double'],
        'react/jsx-filename-extension': ['error', {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['warn', {
            markupOnly: true,
            ignoreAttribute: ['data-testid'],
        }],
        'max-len': ['warn', 100, { ignoreComments: true }],
        'space-infix-ops': 'off',
        'arrow-body-style': 'off',
        'react/require-default-props': 'off',
    },
    overrides: [
        {
            files: ['src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },

    ],
    settings: {
        react: {
            version: 'detect',
        },
        jest: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
};
