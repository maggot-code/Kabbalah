/*
 * @Author: maggot-code
 * @Date: 2021-04-20 23:01:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-21 10:12:21
 * @Description: file content
 */
module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "parser": "@babel/eslint-parser"
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