import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router";
import store from "./store";

createApp(App)
  .use(VueRouter)
  .use(store)
  .mount("#app");
