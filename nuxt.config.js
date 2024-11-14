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

    css: [
        "~/assets/styles/tailwind.css",
        "~/assets/styles/main.css",
    ],

    build: {
        transpile: ["vuetify"],
    },

    devtools: { enabled: false },

    typescript: {
        shim: false,
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: [
        // Vuetify configuration in Nuxt 3
        (_options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => {
                config.plugins.push(vuetify({ autoImport: true }));
            });
        },
    ],
});
