import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseURL: "http://localhost:5173/",
    supportFile: false
  },
  viewportWidth:1024,
  viewportWidth:768,
  video:false


  // old code:
  // e2e: {
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
  // },

  // component: {
  //   devServer: {
  //     framework: "react",
  //     bundler: "vite",
  //   },
  // },
});
