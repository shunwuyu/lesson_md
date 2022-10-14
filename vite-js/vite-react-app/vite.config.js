import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import lessToJS from 'less-vars-to-js'
import fs from 'fs'
import path from 'path'

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './config/variables.less'), 'utf8')
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    })
  
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        modifyVars: themeVariables
      }
    }
  }
})
