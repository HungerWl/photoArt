import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
    app: {
        head: {
            baseURL: "/",
            title: "照相馆门户网站",
            meta: [
                { name: "description", content: "专业摄影服务展示" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { charset: "utf-8" }
            ],
            link: [
                { rel: "icon", type: "image/png", href: "/favicon.ico" }, // 增加 favicon
            ],
        },
    },

    loadingIndicator: 'circle',

    errorPage: {
        statusCode: 500,
        component: '~/pages/error.vue'
    },

    runtimeConfig: {
        public: {
            apiBase: 'http://www.ecmanage.cn:8000', // 公开的 API 基础地址
        },
    },

    css: [
        "~/assets/styles/tailwind.css",
        "~/assets/styles/main.css",
        "~/assets/styles/global.css",
    ],

    build: {
        transpile: ["vuetify"],
    },

    modules: ["@nuxt/image"],

    vite: {
        vue: {
            template: {
                transformAssetUrls: vuetify.transformAssetUrls, // 正确处理 Vuetify 组件的资源路径
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    silenceDeprecations: ['legacy-js-api'],
                },
            },
        },
    },

    hooks: {
        "vite:extendConfig"(config) {
            config.plugins = config.plugins || [];
            config.plugins.push(
                vuetify({
                    autoImport: true, // 自动导入 Vuetify 组件
                })
            );
        },
    },

    devtools: { enabled: true },

    typescript: {
        shim: false,
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    compatibilityDate: "2024-12-03",
});