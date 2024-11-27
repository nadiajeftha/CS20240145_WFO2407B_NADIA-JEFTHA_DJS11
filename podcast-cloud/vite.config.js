import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      components: "/src/components",
    },
  },
  build: {
    outDir: "podcast-cloud/dist",
    emptyOutDir: true,
  },
});
