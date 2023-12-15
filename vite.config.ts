import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/chords-lab/",
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    rollupOptions: {
      input: ['src/main.tsx', './index.html']
    },
  },
});
