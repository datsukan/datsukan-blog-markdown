import postcss from "rollup-plugin-postcss"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from '@rollup/plugin-commonjs';
import tsPaths from "rollup-plugin-tsconfig-paths"
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import terser from "@rollup/plugin-terser"
import dts from 'rollup-plugin-dts';

import * as path from 'path';
const pkg = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
      resolve({browser: true}),
      commonjs({
        include: ['node_modules/**'],
        transformMixedEsModules: true,
      }),
      tsPaths(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/__tests__/**'],
        rootDir: "./src",
      }),
      babel({
        babelHelpers: 'runtime',
        configFile: path.resolve(__dirname, 'babel.config.js'),
      }),
      terser(),
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
