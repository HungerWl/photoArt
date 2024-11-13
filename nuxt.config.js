import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
    build: {
        transpile: ["vuetify"],
    },
    app: {
        head: {
            title: "照相馆门户网站",
            meta: [
                {name: "description", content: "照相馆门户网站，展示专业摄影服务"},
            ],
        },
    },

    devtools: {enabled: false},

    typescript: {
        shim: false, // 修改 shim 配置
    },

    css: [
        "~/assets/styles/tailwind.css",
        "bootstrap-icons/font/bootstrap-icons.css",
        "~/assets/styles/toolStyle.scss",
        "~/assets/styles/main.css",
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}));
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
                    api: "modern-compiler",
                },
            },
        },
    },
    compatibilityDate: "2024-10-22",
});
