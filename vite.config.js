import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");


  return {
    base: "/",
    //para ver el proyecto en la red local, para poder acceder desde otros dispositivos
    server: {
      host: true,      // escucha en 0.0.0.0 (todas las IPs)
      port: 5173,
    },

    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),

        }
      }
    },
    transformIndexHtml: {
      enforce: "pre",
      transform(html) {
        return html.replace(/%VITE_SITE_URL%/g, env.VITE_SITE_URL);
      }
    },
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: [
          "favicon*.{png,svg,ico}",
          "apple-touch-icon.png",
          "icon-*.png",
          "icons.svg"
        ],
        manifest: {
          name: "Mi Sitio Web",
          short_name: "SitioWeb",
          description:
            "Página web moderna con soporte para todos los dispositivos y PWA.",
          icons: [
            {
              src: "/favicon-16x16.png",
              sizes: "16x16",
              type: "image/png"
            },
            {
              src: "/favicon-32x32.png",
              sizes: "32x32",
              type: "image/png"
            },
            {
              src: "/apple-touch-icon.png",
              sizes: "180x180",
              type: "image/png"
            },
            {
              src: "/icon-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "/icon-512x512.png",
              sizes: "512x512",
              type: "image/png"
            }
          ],
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#1a73e8"
        },
        workbox: {
          globPatterns: [
            "**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,woff,woff2,eot,ttf,otf}"
          ]
        }
      })
    ]
  };
});