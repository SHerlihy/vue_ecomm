import axios from "axios";

const moduleProducts = {
  state: () => ({
    products: [{}],
    pages: 1,
    page: 1,
    product: {},
  }),
  mutations: {
    addProduct: (state, addition) => state.products.push(addition),
    productsOnPage: (state, products, pages, page) => {
      state.products = products;
      state.pages = pages;
      state.page = page;
    },
    productDetails: (state, details) => {
      state.product = details;
    },
  },
  actions: {
    async getPageProducts({ commit }, keyword, pageNumber) {
      const { data } = await axios.get(
        `http://localhost:5000/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      commit("productsOnPage", data.products, data.pages, data.page);
    },
    async getProduct({ commit }, id) {
      const { data } = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      commit("productDetails", data);
    },
  },
  getters: {
    allProducts: (state) => state.products,
    oneProduct: (state) => state.product,
  },
};

export default moduleProducts;
