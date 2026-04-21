import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("swiper")) {
            return "swiper";
          }
          if (id.includes("framer-motion")) {
            return "motion";
          }
          if (id.includes("react-router-dom") || id.includes("react-router")) {
            return "router";
          }
          if (id.includes("react")) {
            return "react";
          }
          return undefined;
        },
      },
    },
  },
});
