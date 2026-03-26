import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/Modal.jsx",
      name: "Modal",
      fileName: "modal"
    },
   rollupOptions: {                        
    external: ["react", "react-dom", "react/jsx-runtime"],  
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJsxRuntime"
        }
      }
    }
  }
})
