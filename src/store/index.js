import { createStore } from "vuex";
import moduleProducts from "./modules/products";
import moduleCart from "./modules/cart";
import moduleOrder from "./modules/order";

const store = createStore({
  modules: {
    moduleProducts,
    moduleCart,
    moduleOrder,
  },
});

export default store;
