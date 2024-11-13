~~~
├── assets/              # 静态资源 (CSS, 图片等)
│   └── styles/          # 全局样式、SCSS等
├── components/          # Vue 组件
│   └── common/          # 公共组件
├── composables/         # 可组合函数 (类似于 hooks)
├── content/             # Markdown 文件管理（如果使用 content 模块）
├── layouts/             # 页面布局文件
├── middleware/          # 中间件
├── pages/               # 页面视图
│   ├── index.vue        # 首页
│   └── about.vue        # 其他页面示例
├── plugins/             # 插件
│   └── axios.js         # Axios 等插件配置
├── public/              # 公共静态文件 (直接对外公开)
├── server/              # 后端逻辑（如 API 路由）
│   └── api/             # API 路由文件
├── stores/              # Pinia 或 Vuex 状态管理文件夹
│   └── user.js          # 示例用户状态模块
├── utils/               # 工具函数库
├── nuxt.config.js       # Nuxt 配置文件
├── app.vue              # 应用根文件
└── package.json         # 项目依赖及脚本
~~~
assets/: 用于存储未被 Webpack 或 Vite 直接处理的静态资源，例如图片、字体、全局的样式文件等。
components/: 项目中复用的 Vue 组件，按模块或功能分类，确保组件的可维护性和复用性。
composables/: 存储可复用的逻辑函数，帮助解耦复杂逻辑，让代码更加简洁、模块化。
layouts/: 布局文件，可以为不同页面提供不同的布局方案，例如头部、底部组件的组合。
middleware/: 用于定义页面进入前执行的中间件，如权限校验、路由跳转逻辑等。
pages/: 放置页面文件，Nuxt 会自动生成路由。每个页面视图通常以组件形式存在。
plugins/: 用于配置插件，例如在整个应用程序中全局使用的插件 (如 Axios, Auth 等)。
public/: 存放不会经过 Webpack/Vite 处理的静态文件，能够直接通过 URL 访问。
server/: 存储后端逻辑或 API 路由，符合 Nuxt 3 的 SSR 特性。
stores/: 用于状态管理，可以选择 Pinia 或 Vuex 来存储和管理应用的状态。
utils/: 常用工具函数文件夹，便于在项目中复用一些小的功能函数。