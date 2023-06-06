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
  css: ["~/assets/scss/style.scss"],
  runtimeConfig: {
    public: {
      content: {
        anchorLinks: {
          depth: 0
        }
      }
    }
  },
  router: {
    options: {
      strict: true
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import \"@/assets/scss/_variabls.scss\";"
        }
      }
    }
  }
});
