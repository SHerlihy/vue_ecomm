import { createStore } from "vuex";
import moduleProducts from "./modules/products";
import moduleCart from "./modules/cart";

const store = createStore({
  modules: {
    moduleProducts,
    moduleCart,
  },
});

export default store;
