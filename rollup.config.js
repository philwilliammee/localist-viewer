// rollup.config.js

import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-css-only";
import scss from "rollup-plugin-scss";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "build/index.js",
      name: "app",
      sourcemap: "inline",
      format: "umd"
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
      dedupe: ["react", "react-dom"],
    }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    commonjs(),
    json(),
    typescript({
      tsconfig: "tsconfig.json",
      sourceMap: true,
      inlineSources: true,
    }),
    css({ output: "css/theme.css" }),
    scss({
      output: "build/css/style.css",
      failOnError: true,
      runtime: require("sass"),
    })
  ],
};
