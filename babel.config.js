/*
 * @Author: maggot-code
 * @Date: 2021-04-21 13:24:56
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-21 14:09:57
 * @Description: file content
 */
module.exports = {
    "presets": [
        "@vue/cli-plugin-babel/preset",
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@vue/babel-plugin-jsx",
        "lodash",
        [
            "@babel/plugin-proposal-class-properties",
            {
                "loose": true
            }
        ]
    ]
}