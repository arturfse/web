import react from "@vitejs/plugin-react";
import { rmSync } from "node:fs";
import { resolve } from "node:path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, type PluginOption } from "vite";

const projectRoot = import.meta.dirname;
const generatedPaths = ["assets", "app.js", "styles.css", "chunks"];

function cleanRootBuildPlugin(): PluginOption {
  return {
    name: "clean-root-build",
    apply: "build",
    buildStart() {
      for (const path of generatedPaths) {
        rmSync(resolve(projectRoot, path), { recursive: true, force: true });
      }
    },
  };
}

export default defineConfig(({ mode }) => ({
  root: "src",
  base: "./",
  publicDir: false,
  plugins: [
    react(),
    cleanRootBuildPlugin(),
    mode === "analyze"
      ? (visualizer({
          filename: resolve(projectRoot, "bundle-report.html"),
          template: "treemap",
          gzipSize: true,
          brotliSize: true,
        }) as PluginOption)
      : false,
  ],
  resolve: {
    alias: {
      "@app": resolve(projectRoot, "src/app"),
      "@pages": resolve(projectRoot, "src/pages"),
      "@widgets": resolve(projectRoot, "src/widgets"),
      "@features": resolve(projectRoot, "src/features"),
      "@entities": resolve(projectRoot, "src/entities"),
      "@shared": resolve(projectRoot, "src/shared"),
    },
  },
  build: {
    outDir: "../",
    emptyOutDir: false,
    cssCodeSplit: true,
    sourcemap: false,
    target: "es2022",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        manualChunks(id: string): string | undefined {
          if (id.includes("node_modules/react")) return "react";
          if (id.includes("node_modules")) return "vendor";
          return undefined;
        },
      },
    },
  },
}));
