/*
 * @Author: maggot-code
 * @Date: 2021-04-20 23:01:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-21 15:13:20
 * @Description: file content
 */
module.exports = {
    "root": true,
    // "root": [
    //   'plugin:vue/vue3-essential',
    //   'eslint:recommended',
    //   '@vue/typescript'
    // ],

    "env": {
        "node": true
    },

    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],

    "parserOptions": {
        "parser": [
            "@babel/eslint-parser",
            '@typescript-eslint/parser'
        ]
    },

    rules: {
        'indent': ['error', 4],
        'semi': 'off',
        'quotes': 'off',
        'no-console': 'off',
        'no-debugger': 'off',
        'prefer-const': 'off',
        'no-unused-vars': 'off',
    }
}
