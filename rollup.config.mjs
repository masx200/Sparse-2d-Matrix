import { defineConfig } from "rollup";
export default defineConfig([
    {
        input: "dist/index.es.js",
        output: [{ format: "cjs", file: "dist/index.cjs.js" }],
    },
]);
