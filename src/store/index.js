import { createStore } from "vuex";
import moduleProducts from "./modules/products";

const store = createStore({
  modules: {
    moduleProducts,
  },
});

export default store;
