import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": path.join(__dirname, "src/"),
      "@/public": path.join(__dirname, "public"),
      "@/routes": path.join(__dirname, "src/routes"),
      "@/components": path.join(__dirname, "src/components"),
      "@/elements": path.join(__dirname, "src/components/elements"),
      "@/layout": path.join(__dirname, "src/components/layout"),
      "@/modules": path.join(__dirname, "src/components/modules"),
      "@/pages": path.join(__dirname, "src/components/pages"),
      "@/utils": path.join(__dirname, "src/utils"),
      "@/styles": path.join(__dirname, "src/styles"),
      "@/stores": path.join(__dirname, "src/stores"),
      "@/lib": path.join(__dirname, "src/lib"),
      "@/hooks": path.join(__dirname, "src/hooks"),
      "@/fonts": path.join(__dirname, "src/fonts"),
      "@/assets": path.join(__dirname, "src/assets"),
    },
  },
});
