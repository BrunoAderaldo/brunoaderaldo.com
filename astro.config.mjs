import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://brunoaderaldo.com",
  integrations: [sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/base/styles/_base.scss";`,
        },
      },
    },
  },
});
