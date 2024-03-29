import { getBabelOutputPlugin, babel } from "@rollup/plugin-babel";
import path from "path";
import { terser } from "rollup-plugin-terser";
import { MinifyOptions } from "terser";
import { defineConfig, UserConfig } from "vite";
import ts from "rollup-plugin-ts";
import { PluginItem } from "@babel/core";
export default defineConfig(({ mode, command }) => {
    console.log(mode, command);
    const isdrop = mode === "production" && command === "build";
    const terserOptions: MinifyOptions = {
        format: { comments: false },
        ecma: 2015,
        compress: { drop_console: isdrop, drop_debugger: isdrop },
        mangle: true,
        module: true,
        toplevel: true,
    };
    const config: UserConfig = {
        esbuild: false,
        // esbuild: { drop: isdrop ? ["console", "debugger"] : undefined },
        root: path.resolve(__dirname, "src"),
        plugins: [
            //@ts-ignore
            ts({
                transpiler: "typescript",
            }),
            // mode === "production" &&
            //     command === "build" &&
            //@ts-ignore
            babel({
                extensions: [".ts", ".js"],
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            corejs: "3",
                            useBuiltIns: "entry",
                            targets: {
                                esmodules: true,
                            },
                        },
                    ],
                ],
                plugins: [
                    // "babel-plugin-clean-code",
                    // [
                    //     "babel-plugin-import",
                    //     {
                    //         libraryName: "lodash",
                    //         libraryDirectory: "",
                    //         camel2DashComponentName: false, // default: true
                    //     },
                    // ],
                ],
            }),
            //@ts-ignore
            getBabelOutputPlugin({
                presets: ["babel-preset-minify"],
                // extensions: [".ts", ".js"],
                plugins: [
                    isdrop && "babel-plugin-clean-code",
                    // "@babel/plugin-syntax-typescript",
                ].filter(Boolean) as PluginItem[],
            }),
            //@ts-ignore
            terser(terserOptions),
        ],
        build: {
            sourcemap: "inline",
            lib: {
                entry: path.resolve(__dirname, "src", "index.ts"),
                formats: ["es" /* , "cjs" */],
                fileName: "index",
            },
            minify: false,
            emptyOutDir: true,
            outDir: path.resolve(__dirname, "dist"),
            target: "es2015",
        },
    };
    return config;
});
