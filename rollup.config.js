import babel from 'rollup-plugin-babel'
import { eslint } from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from "rollup-plugin-replace"
import uglify from "rollup-plugin-uglify"
import { minify } from 'uglify-es';

export default {
    input: 'src/nos-uploader.js',
    output: {
        file: 'dist/nos-uploader.min.js',
        format: 'es',
        name: 'bundle-name'
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        eslint({
          include: ['src/**'],
          exclude: ['node_modules/**']
        }),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV)
        }),
        uglify(
          {
            compress: {
              drop_console: true,
            },
            mangle: {
              reserved: ['Event'],
            }
          },
          minify,
        )
    ]
}