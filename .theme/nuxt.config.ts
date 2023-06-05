// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.BASE_URL
  },
  modules: ["@nuxt/content"],
  dir: {
    public: ".public"
  },
  content: {
    markdown: {
      remarkPlugins: {
        "remark-emoji": false
      }
    }
  },
  router: {
    options: {
      strict: true
    }
  }
});
