import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import sass from 'rollup-plugin-sass'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      dir: './lib',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      dir: './lib',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      extract: 'style/index.css',
      modules: true
    }),
    sass(),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve(),
    commonjs()
  ]
}
