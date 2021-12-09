import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    resolve:{
        alias:[
            { find: '@', replacement: '/src' },
            { find: '@component', replacement: '/src/component' },
            { find: '@entity', replacement: '/src/entity' }
        ],
    },
    plugins: [vue()]
})
