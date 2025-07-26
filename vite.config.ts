import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'StudyCar Timer',
        short_name: 'StudyCar',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#f3f3f3',
        icons: [
          {
            src: 'Car1.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'Car1.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
