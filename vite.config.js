import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/osser-frontend/',
  plugins: [react()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  }
})
