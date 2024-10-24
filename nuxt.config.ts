import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      title: "照相馆门户网站",
      meta: [
        { name: "description", content: "照相馆门户网站，展示专业摄影服务" },
      ],
      script: [
        {
          type: "text/javascript",
          src: "https://webapi.amap.com/maps?v=2.0&key=0b99a1db158ca6e0ada2be664a8a4b66",
          defer: false, // 让脚本异步加载，不阻塞页面渲染
        },
      ],
    },
  },

  devtools: { enabled: false },

  typescript: {
    shim: false, // 修改 shim 配置
  },

  css: [
    "~/assets/css/tailwind.css",
    "bootstrap-icons/font/bootstrap-icons.css",
    "~/assets/css/toolStyle.scss",
    "~/assets/css/main.css",
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
          api: "modern-compiler",
        },
      },
    },
  },

  compatibilityDate: "2024-10-22",
});
