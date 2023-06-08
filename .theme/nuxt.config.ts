import { defineNuxtConfig } from "nuxt/config";
import TransformerModule from "./transformers/transformer-module";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.BASE_URL,
    head: {
      title: "Mehtap Deniz Sigorta",
      meta: [
        { charset: "utf-8" }
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/mds-mini-logo.png"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
          integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
          crossorigin: "anonymous"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        }
      ]
    }
  },
  components: {
    global: true,
    dirs: ["~/components"]
  },
  content: {
    markdown: {
      remarkPlugins: {
        "remark-emoji": false
      }
    }
  },
  css: ["~/assets/scss/style.scss"],
  dir: {
    public: ".public"
  },
  generate: {
    routes: ["/not-found"]
  },
  modules: [
    // @ts-ignore
    TransformerModule,
    "@nuxt/content"
  ],
  runtimeConfig: {
    public: {
      protocol: process.env.PROTOCOL,
      authority: process.env.AUTHORITY,
      baseUrl: process.env.BASE_URL,
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
