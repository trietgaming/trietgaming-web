import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import fs from "node:fs";

export default defineConfig({
  base: "",
  esbuild: {
    legalComments: "none",
    sourcemap: false,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    sourcesContent: false,
  },
  plugins: [solidPlugin()],
  server: {
    port: 8080,
    host: "0.0.0.0",
    // https: {
    //   key: fs.readFileSync("localhost-key.pem"),
    //   cert: fs.readFileSync("localhost.pem"),
    // },
  },
  assetsInclude: ["**/*.svg", "**/*.jpg", "**/*.png", "**/*.ico", "**/*.json"],
  resolve: {
    alias: [
      { find: "app-hooks", replacement: "/src/hooks" },
      { find: "ui-components", replacement: "/src/ui-components" },
      { find: "store", replacement: "/src/store" },
      { find: "pages", replacement: "/src/pages" },
      { find: "methods", replacement: "/src/methods" },
      { find: "components", replacement: "/src/components" },
      { find: "types", replacement: "/src/types" },
      { find: "app-constants", replacement: "/src/constants" },
      { find: "classes", replacement: "/src/classes" },
      { find: "assets", replacement: "/src/assets" },
      { find: "local-database", replacement: "/src/constants/database.js" },
    ],
  },
});
