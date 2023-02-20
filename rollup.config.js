import nodePolyfills from 'rollup-plugin-polyfill-node';
import tsPaths from "rollup-plugin-tsconfig-paths"
import postcss from "rollup-plugin-postcss"
import terser from "@rollup/plugin-terser"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { babel } from '@rollup/plugin-babel';
import * as path from 'path';
const pkg = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      tsPaths(),
      resolve({browser: true}),
      postcss({
        extract: true,
      }),
      commonjs({
        include: ['node_modules/**'],
        transformMixedEsModules: true,
      }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/__tests__/**'],
        rootDir: "./src",
      }),
      babel({
        babelHelpers: 'runtime',
        configFile: path.resolve(__dirname, 'babel.config.js'),
      }),
      // terser(),
      // nodePolyfills(),
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
    ],
  },
  {
    input: 'src/index.d.ts',
    output: [{ file: 'dist/cjs/index.d.ts', format: 'cjs' }],
    plugins: [dts()],
  },
  {
    input: 'src/index.d.ts',
    output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
