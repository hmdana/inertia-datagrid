const path = require("path")
const { defineConfig } = require("vite")
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, "main.js"),
            name: "Inertia.js DataGrid",
            fileName: (format) => `inertia-datagrid.${format}.js`
        },
        rollupOptions: {
            external: [
                /^@inertiajs.*/,
                /^@popperjs.*/,
                /^lodash-es.*/,
                "qs",
                "vue"
            ],
            output: {
                globals: {
                    vue: "Vue",
                    Vue: "Vue"
                }
            }
        }
    }
})
