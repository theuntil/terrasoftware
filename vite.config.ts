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
    // Sunucu ayarları
    watch: {
      usePolling: true,
    },
    host: true,
    port: 5173, // Varsayılan port, isteğe göre değiştirilebilir
    open: true, // Tarayıcıda otomatik açılır
    // historyApiFallback: true,React Router SPA yönlendirme desteği
  },
});
