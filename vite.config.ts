import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    port: 5173,
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1000, // uyarı sınırı 1000 KB olarak ayarlandı
  },
});
