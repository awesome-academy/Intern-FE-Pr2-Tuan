module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
          jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        // 'prettier',
    ],
    rules: {
        semi: 1,
        quotes: [1, 'single'],
        'react/jsx-max-props-per-line': 1,
        'linebreak-style': 0,
        indent: 0,
        'no-shadow': 0,
        'prefer-destructuring': 0,
        'arrow-body-style': 0,
        'react/jsx-indent': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-indent-props': 0,
        'react/prop-types': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/no-array-index-key': 0,
        'react/jsx-uses-vars': 2,
        'react/prefer-stateless-function': 0,
        'react/button-has-type': 0,
        'react/no-unescaped-entities': 0,
        'react/jsx-wrap-multilines': 0,
        'react/destructuring-assignment': 0,
        'react/react-in-jsx-scope': 0,
        'react/self-closing-comp': 0,
        'react/jsx-closing-tag-location': 0,
        'no-trailing-spaces': 0,
        'no-multi-spaces': 0,
        'no-param-reassign': 0,
        'no-case-declarations': 0,
        'no-console': 0,
        'no-undef': 0,
        'no-plusplus': 0,
        'no-unused-vars': 1,
        'no-underscore-dangle': 0,
        'consistent-return': 0,
        'import/prefer-default-export': 0,
        'import/order': 1,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        // 'prettier/prettier': 2, 
    },
    // plugins: ['prettier'],
};
