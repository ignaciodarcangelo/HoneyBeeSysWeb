import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  server: {
    // The design system this site consumes (`../project`, incl. its font
    // files) lives outside this Vite project's root — allow serving it.
    fs: { allow: [path.resolve(__dirname, "..")] },
  },
});
