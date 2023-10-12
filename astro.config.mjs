import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula",
    },
  },
});
