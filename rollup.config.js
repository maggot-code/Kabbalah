/*
 * @Author: maggot-code
 * @Date: 2021-04-23 13:31:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-23 13:52:09
 * @Description: file content
 */
const typescript = require('rollup-plugin-typescript2');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const vue = require('rollup-plugin-vue');
const filesize = require('rollup-plugin-filesize');
const buble = require('@rollup/plugin-buble');
const replace = require('@rollup/plugin-replace');

const input = 'packages/install.ts';
const external = ["vue"];
const plugins = [
    vue(),
    typescript({
        objectHashIgnoreUnknownHack: true,
    }),
    commonjs(),
    json(),
    nodeResolve(),
    filesize(),
    buble(),
    replace({
        "preventAssignment": true,
        "process.env.NODE_ENV": JSON.stringify("production"),
    }),
]

module.exports = [
    {
        plugins,
        external,
        input,
        output: {
            file: "lib/index.umd.js",
            format: "umd",
            name: "Kabbalah",
            sourcemap: true,
        }
    },
    {
        plugins,
        external,
        input,
        output: {
            file: "lib/index.esm.js",
            format: "es",
            sourcemap: false,
        }
    }
]