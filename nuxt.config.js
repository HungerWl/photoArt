import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
    app: {
        head: {
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
    runtimeConfig: {
        public: {
            apiBase: 'http://192.168.3.125:8000', // 公开的 API 基础地址
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


    modules: [
        // Vuetify configuration in Nuxt 3
        (_options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => {
                config.plugins.push(vuetify({ autoImport: true }));
            });
        },
    ],

    vite: {
        vue: {
            template: {
                transformAssetUrls,
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
});
