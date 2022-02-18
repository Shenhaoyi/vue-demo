import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  // 自动引入组件 
  Components({
    // 搜索组件的目录
    dirs: ['src/components'],
    // element puls ui库解析器，也可以自定义
    resolvers: [ // 自定义组件解析器
      ElementPlusResolver(),
    ],
    dts: true, // 是否生成components.d.ts文件，生成以支持组件的ts类型推断
  }),
  // 自动引入vue api
  AutoImport({ /* options */
    imports: ['vue', 'vue-router']
  })
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    }
  }
})
