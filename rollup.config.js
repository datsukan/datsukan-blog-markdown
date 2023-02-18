import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
const pkg = require("./package.json")

export default [
  {
    input: "src/index.ts",
    output: [
      // {
      //   file: pkg.main,
      //   format: "cjs",
      //   sourcemap: false,
      // },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      commonjs({
        include: ["node_modules/**"],
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/__tests__/**"],
        rootDir: "./src",
      }),
    ],
    external: [
      "@headlessui/react",
      "@heroicons/react",
      "@tailwindcss/line-clamp",
      "@tailwindcss/typography",
      "gatsby",
      "highlight.js",
      "react",
      "react-dom",
      "react-innertext",
      "react-scripts",
      "rehype-highlight",
      "rehype-react",
      "rehype-slug",
      "remark-breaks",
      "remark-directive",
      "remark-gfm",
      "remark-parse",
      "remark-rehype",
      "typescript",
      "unified",
      "web-vitals",
    ],
  },
  // {
  //   input: "src/index.d.ts",
  //   output: [{ file: "dist/cjs/index.d.ts", format: "cjs" }],
  //   plugins: [dts.default()],
  // },
  // {
  //   input: "src/index.d.ts",
  //   output: [{ file: "dist/esm/index.d.ts", format: "esm" }],
  //   plugins: [dts.default()],
  // },
  {
    input: "src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
  },
]
