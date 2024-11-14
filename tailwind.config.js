/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{vue,js,ts}',
    './store/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './modules/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {},
  },
}
