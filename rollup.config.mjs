import { defineConfig } from "rollup";
export default defineConfig([
    {
        input: "dist/index.es.js",
        output: [
            { sourcemap: "inline", format: "cjs", file: "dist/index.cjs.js" },
        ],
    },
]);
