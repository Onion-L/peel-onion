import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src"],
  target: "esnext",
  format: ["esm"],
  clean: true,
  minify: false,
  outDir: "dist",
  treeshake: true,
});
