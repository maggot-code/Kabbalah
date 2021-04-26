/*
 * @Author: maggot-code
 * @Date: 2021-04-23 13:31:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-04-26 18:03:45
 * @Description: file content
 */
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import filesize from 'rollup-plugin-filesize';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const input = 'packages/install.ts';
const external = ["vue"];
const plugins = [
    vue(),
    scss(),
    filesize(),
    typescript({
        objectHashIgnoreUnknownHack: false,
    }),
    commonjs(),
    buble({
        objectAssign: 'Object.assign'
    }),
    replace({
        "preventAssignment": true,
        "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    json(),
    nodeResolve(),
]

export default [
    {
        plugins,
        external,
        input,
        output: {
            file: "lib/index.esm.js",
            format: "es",
            name: "Kabbalah",
            exports: "named",
            sourcemap: true,
            globals: {
                "vue": "vue"
            }
        }
    },
    {
        plugins,
        external,
        input,
        output: {
            file: "lib/index.umd.js",
            format: "umd",
            name: "Kabbalah",
            exports: "named",
            sourcemap: true,
            globals: {
                "vue": "vue"
            }
        }
    }
]