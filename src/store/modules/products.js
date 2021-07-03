import axios from "axios";

const moduleProducts = {
  state: () => ({ products: ["one", "two", "three"], pages: 1, page: 1 }),
  mutations: {
    addProduct: (state, addition) => state.products.push(addition),
    productsOnPage: (state, products, pages, page) => {
      state.products = products;
      state.pages = pages;
      state.page = page;
    },
  },
  actions: {
    async getPageProducts({ commit }, keyword, pageNumber) {
      const { data } = await axios.get(
        `http://localhost:5000/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      // commit("addProduct", "four")
      console.log(keyword);
      console.log(pageNumber);
      console.log(data);
      commit("productsOnPage", data.products, data.pages, data.page);
    },
  },
  getters: { allProducts: (state) => state.products },
};

export default moduleProducts;
